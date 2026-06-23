/**
 * Style Applier for Layout Specifications
 * Applies style definitions from layout spec to rendered cells
 */

/**
 * Applies style definitions from layout spec to rendered cells
 */
export class StyleApplier {
  /**
   * Get styles for a specific cell
   * @param {string} cellId - Cell identifier
   * @param {Object} layoutSpec - Original layout specification
   * @returns {Object} React style object
   */
  static getCellStyle(cellId, layoutSpec) {
    if (!layoutSpec) return {};

    const defaultStyle = layoutSpec.defaultStyle || layoutSpec.params?.defaultStyle || null;
    const cellStyles = layoutSpec.cellStyles || layoutSpec.params?.cellStyles || {};

    const cellStyle = cellStyles?.[cellId] || {};
    const mergedStyle = { ...defaultStyle, ...cellStyle };

    return this._convertStyleObject(mergedStyle);
  }

  /**
   * Get styles for a cell by index
   * Used when rendering by position rather than cellId
   * @param {number} cellIndex - Cell index in rendering order
   * @param {Array} cellIds - Ordered array of cell IDs
   * @param {Object} layoutSpec - Original layout specification
   * @returns {Object} React style object
   */
  static getCellStyleByIndex(cellIndex, cellIds, layoutSpec) {
    if (!cellIds || cellIndex >= cellIds.length) {
      return this.getDefaultStyle(layoutSpec);
    }

    const cellId = cellIds[cellIndex];
    return this.getCellStyle(cellId, layoutSpec);
  }

  /**
   * Get default style from layout spec
   * @param {Object} layoutSpec - Original layout specification
   * @returns {Object} React style object
   */
  static getDefaultStyle(layoutSpec) {
    if (!layoutSpec) return {};

    const defaultStyle = layoutSpec.defaultStyle || layoutSpec.params?.defaultStyle || null;
    return this._convertStyleObject(defaultStyle);
  }

  /**
   * Convert style object from spec format to React style format
   * @param {Object} styleObject - Style object from spec
   * @returns {Object} React-compatible style object
   * @private
   */
  static _convertStyleObject(styleObject) {
    if (!styleObject) return {};

    const reactStyle = {};

    // Handle backgroundColor (supports ARGB int or hex string)
    if (styleObject.backgroundColor !== undefined) {
      reactStyle.backgroundColor = this._parseColor(styleObject.backgroundColor);
    }

    // Handle cornerRadius
    if (styleObject.cornerRadius !== undefined) {
      reactStyle.borderRadius = `${styleObject.cornerRadius}px`;
    }

    // Handle borderWidth
    if (styleObject.borderWidth !== undefined) {
      reactStyle.borderWidth = `${styleObject.borderWidth}px`;
    }

    // Handle borderColor
    if (styleObject.borderColor !== undefined) {
      reactStyle.borderColor = this._parseColor(styleObject.borderColor);
    }

    // Handle padding (can be number or array)
    if (styleObject.padding !== undefined) {
      reactStyle.padding = this._parseSpacing(styleObject.padding);
    }

    // Handle margin (can be number or array)
    if (styleObject.margin !== undefined) {
      reactStyle.margin = this._parseSpacing(styleObject.margin);
    }

    return reactStyle;
  }

  /**
   * Parse color value (supports ARGB int, hex string, rgba string)
   * @param {number|string} color - Color value
   * @returns {string} CSS color string
   * @private
   */
  static _parseColor(color) {
    if (typeof color === 'number') {
      // ARGB int to hex string
      const alpha = (color >> 24) & 0xFF;
      const red = (color >> 16) & 0xFF;
      const green = (color >> 8) & 0xFF;
      const blue = color & 0xFF;

      if (alpha === 255) {
        // Opaque, use RGB hex
        return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
      }

      // Has alpha, use rgba
      return `rgba(${red}, ${green}, ${blue}, ${(alpha / 255).toFixed(2)})`;
    }

    if (typeof color === 'string') {
      // Already a string, return as-is
      return color;
    }

    return 'transparent';
  }

  /**
   * Parse spacing value (can be number or array)
   * @param {number|Array} spacing - Spacing value
   * @returns {string} CSS spacing value
   * @private
   */
  static _parseSpacing(spacing) {
    if (typeof spacing === 'number') {
      return `${spacing}px`;
    }

    if (Array.isArray(spacing)) {
      if (spacing.length === 1) {
        return `${spacing[0]}px`;
      } else if (spacing.length === 2) {
        return `${spacing[0]}px ${spacing[1]}px`;
      } else if (spacing.length === 4) {
        return `${spacing[0]}px ${spacing[1]}px ${spacing[2]}px ${spacing[3]}px`;
      }
    }

    return '0px';
  }

  /**
   * Extract cell IDs in rendering order from parsed layout
   * @param {Object} parsedLayout - Parsed layout structure
   * @returns {Array<string>} Ordered cell IDs
   */
  static extractCellIds(parsedLayout) {
    if (parsedLayout.format === 'STANDARD') {
      // Standard format: cells are already ordered by row/col
      const cells = parsedLayout.cells || [];
      const sorted = [...cells].sort((a, b) => {
        if (a.row !== b.row) return a.row - b.row;
        return a.col - b.col;
      });
      return sorted.map(cell => cell.id);
    }

    if (parsedLayout.format === 'GRID_TEMPLATE') {
      // Grid Template: need to traverse and extract leaf cells in order
      return this._extractLeafCellIdsFromRegion(parsedLayout.rootRegion);
    }

    return [];
  }

  /**
   * Extract leaf cell IDs from a GridRegion in order
   * @param {Object} region - Parsed region
   * @returns {Array<string>} Ordered leaf cell IDs
   * @private
   */
  static _extractLeafCellIdsFromRegion(region) {
    const { cells, grids, dimensions } = region;
    const leafIds = [];

    // Traverse grid positions in reading order
    for (let r = 0; r < dimensions.rows; r++) {
      for (let c = 0; c < dimensions.cols; c++) {
        // Find cell at this position
        const cell = cells.cells.find(cell =>
          r >= cell.row && r < cell.row + cell.rowSpan &&
          c >= cell.col && c < cell.col + cell.colSpan
        );

        if (cell) {
          const isNestedGrid = grids && grids[cell.id];

          if (isNestedGrid) {
            // Recursively extract from nested grid
            const nestedIds = this._extractLeafCellIdsFromRegion(grids[cell.id]);
            leafIds.push(...nestedIds);
          } else {
            // Leaf cell
            leafIds.push(cell.id);
          }
        }
      }
    }

    return leafIds;
  }

  /**
   * Create a wrapper style that applies both cell styles and base wrapper styles
   * @param {string} cellId - Cell identifier
   * @param {Object} layoutSpec - Layout specification
   * @param {Object} baseWrapperStyles - Base wrapper styles (e.g., width, height)
   * @returns {Object} Combined style object
   */
  static createWrapperStyle(cellId, layoutSpec, baseWrapperStyles = {}) {
    const cellStyle = this.getCellStyle(cellId, layoutSpec);

    return {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden',
      ...cellStyle,
      ...baseWrapperStyles
    };
  }

  /**
   * Check if a cell has fullscreen button enabled
   * @param {string} cellId - Cell identifier
   * @param {Object} layoutSpec - Layout specification
   * @returns {boolean} true if fullscreen button should show
   */
  static showFullscreenButton(cellId, layoutSpec) {
    const cellStyle = layoutSpec?.cellStyles?.[cellId] || {};
    if (cellStyle.showFullscreenButton !== undefined) {
      return cellStyle.showFullscreenButton;
    }
    return layoutSpec?.defaultStyle?.showFullscreenButton || false;
  }

  /**
   * Check if a cell has selection border enabled
   * @param {string} cellId - Cell identifier
   * @param {Object} layoutSpec - Layout specification
   * @returns {boolean} true if selection border should show
   */
  static showSelectionBorder(cellId, layoutSpec) {
    const cellStyle = layoutSpec?.cellStyles?.[cellId] || {};
    if (cellStyle.showSelectionBorder !== undefined) {
      return cellStyle.showSelectionBorder;
    }
    return layoutSpec?.defaultStyle?.showSelectionBorder || false;
  }
}

export default StyleApplier;
