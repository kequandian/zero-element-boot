/**
 * Weight Calculator for Layout Specifications
 * Handles weight calculation following LayoutDescriptionSpec rules
 * - weight >= 20: fixed pixel value
 * - weight < 0: fixed pixel value (absolute value)
 * - 0 < weight < 20: proportional allocation
 * - weight == 0: invalid
 */

/**
 * Handles weight calculation following LayoutDescriptionSpec rules
 */
export class WeightCalculator {
  /**
   * Calculate actual sizes from weights
   * @param {number[]} weights - Raw weight values
   * @param {number} availableSpace - Total available space
   * @param {number[]} minConstraints - Minimum size constraints (optional)
   * @returns {number[]} Actual sizes in pixels
   */
  static calculate(weights, availableSpace, minConstraints = null) {
    if (!weights || weights.length === 0) return [];

    // Separate fixed and proportional weights
    const fixed = [];
    const proportional = [];
    const proportionalIndices = [];

    weights.forEach((w, i) => {
      if (w === 0) {
        console.warn('Invalid weight: 0 is not allowed, treating as proportional weight 1');
        proportional.push(1);
        proportionalIndices.push(i);
        return;
      }

      if (w >= 20 || w < 0) {
        fixed.push({ index: i, value: Math.abs(w) });
      } else {
        proportional.push(w);
        proportionalIndices.push(i);
      }
    });

    // Calculate fixed total
    const fixedTotal = fixed.reduce((sum, f) => sum + f.value, 0);

    // Calculate proportional allocation
    const remainingSpace = availableSpace - fixedTotal;
    const proportionalTotal = proportional.reduce((sum, w) => sum + w, 0);

    const sizes = new Array(weights.length);

    // Fill fixed sizes
    fixed.forEach(({ index, value }) => {
      sizes[index] = value;
    });

    // Fill proportional sizes
    if (proportionalTotal > 0 && remainingSpace > 0) {
      proportional.forEach((w, i) => {
        const actualIndex = proportionalIndices[i];
        let size = (w / proportionalTotal) * remainingSpace;

        // Apply min constraints if provided
        if (minConstraints && minConstraints[i] !== undefined && minConstraints[i] !== null) {
          size = Math.max(size, minConstraints[i]);
        }

        sizes[actualIndex] = size;
      });

      // Handle overflow: scale down if min constraints exceed available space
      const actualTotal = sizes.reduce((sum, s) => sum + (s || 0), 0);
      if (actualTotal > availableSpace) {
        const scale = availableSpace / actualTotal;
        proportional.forEach((w, i) => {
          const actualIndex = proportionalIndices[i];
          // Only scale proportional items, not fixed ones
          const isFixed = fixed.some(f => f.index === actualIndex);
          if (!isFixed && sizes[actualIndex] !== undefined) {
            sizes[actualIndex] *= scale;
          }
        });
      }
    } else {
      // Fill remaining indices with minimum or 0
      proportionalIndices.forEach(i => {
        sizes[i] = minConstraints?.[i] || 0;
      });
    }

    return sizes;
  }

  /**
   * Convert weights to fr units for CSS Grid
   * For MultiViewport's existing implementation
   * Fixed weights remain as-is, proportional converted to fr
   * @param {number[]} weights - Raw weight values
   * @returns {Array} Array of fr values or fixed pixel values
   */
  static toFrUnits(weights) {
    if (!weights) return [];
    return weights.map(w => {
      if (w === 0) {
        console.warn('Invalid weight: 0, treating as 1fr');
        return 1;
      }
      if (w >= 20 || w < 0) {
        // Fixed sizes - return as pixel value
        // Will need special handling in CSS grid template
        return Math.abs(w);
      }
      // Proportional weights become fr values
      return w;
    });
  }

  /**
   * Determine if a weight represents a fixed size
   * @param {number} weight - Weight value
   * @returns {boolean} true if fixed size
   */
  static isFixedWeight(weight) {
    return weight >= 20 || weight < 0;
  }

  /**
   * Get the fixed pixel value from a weight
   * @param {number} weight - Weight value
   * @returns {number} Pixel value
   */
  static getFixedValue(weight) {
    if (weight >= 20) return weight;
    if (weight < 0) return Math.abs(weight);
    return 0;
  }

  /**
   * Generate CSS grid template string from weights
   * Handles both fixed and proportional weights
   * @param {number[]} weights - Weight values
   * @returns {string} CSS grid template string
   */
  static toGridTemplate(weights) {
    if (!weights || weights.length === 0) return '';

    return weights.map(w => {
      if (w === 0) {
        return '1fr';
      }
      if (w >= 20 || w < 0) {
        // Fixed size in pixels
        return `${Math.abs(w)}px`;
      }
      // Proportional
      return `${w}fr`;
    }).join(' ');
  }

  /**
   * Normalize weights for MultiViewport format
   * Converts any special values to the format expected by existing code
   * @param {number[]} weights - Raw weights
   * @returns {number[]} Normalized weights for fr units
   */
  static normalizeForFr(weights) {
    if (!weights) return [];
    return weights.map(w => {
      if (w === 0) return 1; // Treat as 1fr
      if (w >= 20 || w < 0) {
        // For fixed sizes in CSS Grid with fr, we need to use minmax or calc
        // For now, return as-is and handle in grid template
        return w;
      }
      return w;
    });
  }
}

export default WeightCalculator;
