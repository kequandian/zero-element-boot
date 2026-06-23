/**
 * Grid Config Converter for Layout Specifications
 * Main converter: transforms parsed specs into MultiViewport's gridConfig format
 */

import { WeightCalculator } from './weightCalculator';
import { GridReferenceResolver } from './gridReferenceResolver';

/**
 * Main converter: transforms parsed specs into MultiViewport's gridConfig format
 */
export class GridConfigConverter {
  /**
   * Convert parsed layout to gridConfig
   * @param {ParsedLayout} parsedLayout - Output from parsers
   * @returns {Object} gridConfig for MultiViewport
   */
  static convert(parsedLayout) {
    if (!parsedLayout) {
      throw new Error('Cannot convert null or undefined parsed layout');
    }

    if (parsedLayout.format === 'STANDARD') {
      return this._convertStandard(parsedLayout);
    }
    if (parsedLayout.format === 'GRID_TEMPLATE') {
      return this._convertGridTemplate(parsedLayout);
    }
    throw new Error(`Unsupported format: ${parsedLayout.format}`);
  }

  /**
   * Convert Standard format to gridConfig
   * @param {Object} parsed - Parsed Standard format layout
   * @returns {Object} MultiViewport gridConfig
   * @private
   */
  static _convertStandard(parsed) {
    const {
      rowWeights,
      colWeights,
      spacing,
      margin,
      rowMinHeights,
      colMinWidths
    } = parsed;

    // Convert weights, handling fixed vs proportional
    // Standard format directly maps to MultiViewport's format
    const horizontalWeights = colWeights && colWeights.length > 0 ? colWeights : [1];
    const verticalWeights = rowWeights && rowWeights.length > 0 ? rowWeights : [1];

    // Build gap string
    const gap = spacing !== undefined ? `${spacing}px` : '0px';

    // Create children array (Standard format doesn't have nested grids)
    // But we need to account for cells that span multiple positions
    const children = [];

    return {
      horizontalWeights,
      verticalWeights,
      gap,
      // Store min constraints for use during rendering
      minHeights: rowMinHeights,
      minWidths: colMinWidths,
      margin,
      children,
      // Store metadata for style application
      _parsed: parsed
    };
  }

  /**
   * Convert Grid Template format to gridConfig
   * @param {Object} parsed - Parsed Grid Template layout
   * @returns {Object} MultiViewport gridConfig
   * @private
   */
  static _convertGridTemplate(parsed) {
    // First resolve grid references
    const resolved = GridReferenceResolver.resolve(parsed);

    // Calculate aspect ratio for long edge weight resolution
    const { rootRegion } = parsed;
    const aspectRatio = rootRegion.cells.dimensions.cols / rootRegion.cells.dimensions.rows;

    // Convert to MultiViewport's hierarchy format
    const gridConfig = GridReferenceResolver.toGridConfigHierarchy(resolved, aspectRatio);

    // Store metadata for style application
    gridConfig._parsed = parsed;

    return gridConfig;
  }

  /**
   * Apply weight normalization for CSS Grid rendering
   * Converts special weight values to appropriate CSS values
   * @param {number[]} weights - Weight array
   * @returns {string} CSS grid template string
   */
  static weightsToGridTemplate(weights) {
    return WeightCalculator.toGridTemplate(weights);
  }

  /**
   * Get effective weights for a dimension
   * Handles long edge weights by determining direction
   * @param {Object} weightsConfig - Weights configuration
   * @param {number} containerWidth - Container width
   * @param {number} containerHeight - Container height
   * @returns {Object} Object with rows and cols arrays
   */
  static resolveLongEdgeWeights(weightsConfig, containerWidth, containerHeight) {
    if (!weightsConfig.isLongEdge) {
      return {
        rows: weightsConfig.rows,
        cols: weightsConfig.cols
      };
    }

    const isLandscape = containerWidth >= containerHeight;

    if (isLandscape) {
      return {
        rows: [1], // Will be expanded to match row count
        cols: weightsConfig.longEdgeWeights
      };
    } else {
      return {
        rows: weightsConfig.longEdgeWeights,
        cols: [1] // Will be expanded to match column count
      };
    }
  }

  /**
   * Validate gridConfig before rendering
   * @param {Object} gridConfig - Grid configuration to validate
   * @returns {boolean} true if valid
   * @throws {Error} if invalid
   */
  static validate(gridConfig) {
    if (!gridConfig) {
      throw new Error('gridConfig is null or undefined');
    }

    if (!gridConfig.horizontalWeights || !Array.isArray(gridConfig.horizontalWeights)) {
      throw new Error('gridConfig.horizontalWeights must be an array');
    }

    if (!gridConfig.verticalWeights || !Array.isArray(gridConfig.verticalWeights)) {
      throw new Error('gridConfig.verticalWeights must be an array');
    }

    if (gridConfig.horizontalWeights.length === 0) {
      throw new Error('horizontalWeights cannot be empty');
    }

    if (gridConfig.verticalWeights.length === 0) {
      throw new Error('verticalWeights cannot be empty');
    }

    // Validate weight values
    const validateWeightArray = (weights, name) => {
      weights.forEach((w, i) => {
        if (typeof w !== 'number' || isNaN(w)) {
          throw new Error(`${name}[${i}] is not a valid number: ${w}`);
        }
      });
    };

    validateWeightArray(gridConfig.horizontalWeights, 'horizontalWeights');
    validateWeightArray(gridConfig.verticalWeights, 'verticalWeights');

    return true;
  }
}

export default GridConfigConverter;
