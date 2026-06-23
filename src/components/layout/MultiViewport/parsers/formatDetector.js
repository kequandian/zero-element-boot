/**
 * Format Detection Module for Layout Specifications
 * Detects whether a layout specification is in Standard or Grid Template format
 */

/**
 * Detects the format type of a layout specification
 * @param {Object} spec - The raw specification object
 * @returns {string} 'STANDARD' | 'GRID_TEMPLATE' | 'UNKNOWN'
 */
export function detectFormat(spec) {
  if (!spec || typeof spec !== 'object') return 'UNKNOWN';

  // Grid Template: has layout.cells as 2D string array
  if (spec.layout?.cells && Array.isArray(spec.layout.cells) &&
      spec.layout.cells.length > 0 &&
      Array.isArray(spec.layout.cells[0]) &&
      typeof spec.layout.cells[0][0] === 'string') {
    return 'GRID_TEMPLATE';
  }

  // Standard: has params with bounds and cells array
  if (spec.params?.bounds && spec.params?.cells &&
      Array.isArray(spec.params.cells)) {
    return 'STANDARD';
  }

  return 'UNKNOWN';
}

/**
 * Validates if a spec is in a known format
 * @param {Object} spec - The raw specification object
 * @returns {boolean} true if spec is valid, false otherwise
 */
export function isValidSpec(spec) {
  return detectFormat(spec) !== 'UNKNOWN';
}
