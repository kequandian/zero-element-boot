/**
 * Standard Format Parser for Layout Specifications
 * Parses the Standard format with params containing bounds, spacing, weights, and cells
 */

/**
 * Parses standard format layout specification
 * Handles params with bounds, spacing, rowWeights, colWeights, cells
 */
export class StandardFormatParser {
  /**
   * Parse standard format spec
   * @param {Object} spec - Layout specification with params
   * @returns {ParsedLayout} Normalized layout structure
   */
  parse(spec) {
    const { params, defaultStyle, cellStyles } = spec;

    // Validate required fields
    if (!params) {
      throw new Error('Standard format requires params field');
    }
    if (!params.bounds) {
      throw new Error('Standard format requires params.bounds');
    }
    if (!params.cells || !Array.isArray(params.cells)) {
      throw new Error('Standard format requires params.cells array');
    }

    return {
      format: 'STANDARD',
      metadata: {
        layoutId: spec.layoutId,
        name: spec.name,
        version: spec.version || 1,
        timestamp: spec.timestamp,
        source: spec.source || 'ASSETS'
      },
      bounds: params.bounds,
      spacing: params.spacing || 0,
      margin: params.margin || 0,
      rowWeights: params.rowWeights,
      colWeights: params.colWeights,
      rowMinHeights: params.rowMinHeights,
      colMinWidths: params.colMinWidths,
      cells: this._parseCells(params.cells),
      styles: {
        default: defaultStyle || null,
        byCellId: cellStyles || {}
      }
    };
  }

  /**
   * Parse cells array
   * @param {Array} cells - Array of CellParams objects
   * @returns {Array} Parsed cell definitions
   * @private
   */
  _parseCells(cells) {
    return cells.map(cell => ({
      id: cell.cellId,
      row: cell.row,
      col: cell.col,
      rowSpan: cell.rowSpan || 1,
      colSpan: cell.colSpan || 1
    }));
  }
}

export default StandardFormatParser;
