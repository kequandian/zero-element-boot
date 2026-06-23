/**
 * Grid Template Parser for Layout Specifications
 * Handles Grid Template format with visual 2D arrays and nested grids
 * Supports "flat JSON with infinite depth" through grid references
 */

/**
 * Parses Grid Template format with nested grids
 * Handles flat JSON structure with infinite depth through grid references
 */
export class GridTemplateParser {
  /**
   * Parse Grid Template format spec
   * @param {Object} spec - Layout specification with layout field
   * @returns {ParsedLayout} Normalized layout structure
   */
  parse(spec) {
    const { layout, defaultStyle, cellStyles } = spec;

    // Validate required fields
    if (!layout) {
      throw new Error('Grid Template format requires layout field');
    }
    if (!layout.cells || !Array.isArray(layout.cells)) {
      throw new Error('Grid Template format requires layout.cells array');
    }
    if (layout.cells.length === 0 || !Array.isArray(layout.cells[0])) {
      throw new Error('layout.cells must be a non-empty 2D array');
    }

    return {
      format: 'GRID_TEMPLATE',
      metadata: {
        layoutId: spec.id,
        name: spec.name,
        version: spec.version || 1,
        timestamp: spec.timestamp,
        source: spec.source || 'ASSETS'
      },
      rootRegion: this._parseRegion(layout, 'root'),
      styles: {
        default: defaultStyle || null,
        byCellId: cellStyles || {}
      }
    };
  }

  /**
   * Parse a GridRegion (root or nested)
   * Recursively parses nested grids
   * @param {Object} region - GridRegion definition
   * @param {string} path - Path for debugging
   * @returns {Object} Parsed region
   * @private
   */
  _parseRegion(region, path) {
    const { cells, grid, weights, gap, padding } = region;

    // Parse cells 2D array into cell definitions
    const parsedCells = this._parseCellsArray(cells);

    // Parse nested grids (recursive)
    const parsedGrids = {};
    if (grid && typeof grid === 'object') {
      Object.entries(grid).forEach(([name, subRegion]) => {
        parsedGrids[name] = this._parseRegion(
          subRegion,
          `${path}#${name}`
        );
      });
    }

    return {
      path,
      cells: parsedCells,
      grids: parsedGrids,
      weights: this._parseWeights(weights, parsedCells.dimensions),
      gap: this._parseGap(gap),
      padding: this._parsePadding(padding)
    };
  }

  /**
   * Parse 2D cells array and detect spans
   * Returns cells list and dimensions
   * @param {Array} cellsArray - 2D string array
   * @returns {Object} Object with dimensions and cells array
   * @private
   */
  _parseCellsArray(cellsArray) {
    const rows = cellsArray.length;
    const cols = cellsArray[0].length;
    const cellMap = new Map(); // cellId -> cell definition

    // Validate all rows have same length
    for (let r = 0; r < rows; r++) {
      if (!Array.isArray(cellsArray[r]) || cellsArray[r].length !== cols) {
        throw new Error(`Row ${r} length mismatch. All rows must have equal length.`);
      }
    }

    // First pass: identify all cells and their spans
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cellId = cellsArray[r][c];

        if (!cellId || typeof cellId !== 'string') {
          throw new Error(`Invalid cellId at [${r}][${c}]: must be a non-empty string`);
        }

        if (!cellMap.has(cellId)) {
          // New cell - calculate its span
          const span = this._calculateSpan(cellsArray, r, c, cellId);
          cellMap.set(cellId, {
            id: cellId,
            row: r,
            col: c,
            rowSpan: span.rowSpan,
            colSpan: span.colSpan,
            isLeaf: false // Will be determined later during resolution
          });
        }
      }
    }

    return {
      dimensions: { rows, cols },
      cells: Array.from(cellMap.values())
    };
  }

  /**
   * Calculate span for a cell starting at (row, col)
   * Finds the extent of identical adjacent cellId values
   * @param {Array} cellsArray - 2D string array
   * @param {number} startRow - Starting row
   * @param {number} startCol - Starting column
   * @param {string} cellId - Cell identifier
   * @returns {Object} Object with rowSpan and colSpan
   * @private
   */
  _calculateSpan(cellsArray, startRow, startCol, cellId) {
    const rows = cellsArray.length;
    const cols = cellsArray[0].length;

    let endRow = startRow;
    let endCol = startCol;

    // Find row span (vertical extent)
    while (endRow + 1 < rows && cellsArray[endRow + 1][startCol] === cellId) {
      endRow++;
    }

    // Find col span (horizontal extent) - check all rows in span
    for (let r = startRow; r <= endRow; r++) {
      while (endCol + 1 < cols && cellsArray[r][endCol + 1] === cellId) {
        endCol++;
      }
    }

    // Validate rectangular shape (all cells in span must have same cellId)
    for (let r = startRow; r <= endRow; r++) {
      for (let c = startCol; c <= endCol; c++) {
        if (cellsArray[r][c] !== cellId) {
          throw new Error(
            `Non-rectangular span detected for cell "${cellId}" starting at [${startRow}][${startCol}]. ` +
            `Expected all cells in span to have same cellId, but found "${cellsArray[r][c]}" at [${r}][${c}].`
          );
        }
      }
    }

    return {
      rowSpan: endRow - startRow + 1,
      colSpan: endCol - startCol + 1
    };
  }

  /**
   * Parse weights specification
   * @param {Array|number} weights - Weights array or number
   * @param {Object} dimensions - Grid dimensions
   * @returns {Object} Parsed weights
   * @private
   */
  _parseWeights(weights, dimensions) {
    if (!weights) {
      // Default: equal weights
      return {
        rows: Array(dimensions.rows).fill(1),
        cols: Array(dimensions.cols).fill(1),
        isLongEdge: false
      };
    }

    if (Array.isArray(weights)) {
      if (Array.isArray(weights[0])) {
        // 2D array: [[rowWeights], [colWeights]]
        return {
          rows: weights[0],
          cols: weights[1],
          isLongEdge: false
        };
      }

      // Single array - long edge direction (determined at runtime)
      return {
        rows: null,
        cols: null,
        longEdgeWeights: weights,
        isLongEdge: true
      };
    }

    // Invalid weights format
    console.warn('Invalid weights format, using equal weights');
    return {
      rows: Array(dimensions.rows).fill(1),
      cols: Array(dimensions.cols).fill(1),
      isLongEdge: false
    };
  }

  /**
   * Parse gap specification
   * @param {number|Array} gap - Gap value or array
   * @returns {Object} Gap with row and col properties
   * @private
   */
  _parseGap(gap) {
    if (!gap) return { row: 0, col: 0 };
    if (Array.isArray(gap)) {
      if (gap.length >= 2) {
        return { row: gap[0], col: gap[1] };
      }
      return { row: gap[0], col: gap[0] };
    }
    return { row: gap, col: gap };
  }

  /**
   * Parse padding specification
   * @param {number|Array} padding - Padding value or array
   * @returns {Object} Padding with top, bottom, left, right
   * @private
   */
  _parsePadding(padding) {
    if (!padding) return { top: 0, bottom: 0, left: 0, right: 0 };
    if (Array.isArray(padding)) {
      if (padding.length >= 2) {
        return { top: padding[0], bottom: padding[0], left: padding[1], right: padding[1] };
      }
      const p = padding[0];
      return { top: p, bottom: p, left: p, right: p };
    }
    return { top: padding, bottom: padding, left: padding, right: padding };
  }
}

export default GridTemplateParser;
