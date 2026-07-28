/**
 * Weight Calculator for Layout Specifications
 * Handles weight calculation following LayoutDescriptionSpec rules (2026-07-27 修订):
 * - w < 0: fixed pixel value (absolute value)
 * - 0 < w <= 24: proportional allocation
 * - w == 0 or w > 24: invalid (旧的 w >= 20 正数固定像素规则已废弃)
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

      if (w < 0) {
        fixed.push({ index: i, value: Math.abs(w) });
      } else if (w >= 1 && w <= 24) {
        proportional.push(w);
        proportionalIndices.push(i);
      } else {
        // w === 0 or w > 24：非法，回退为 1 比例
        console.warn(`Invalid weight ${w} (spec §2.3: 1-24 比例 / <0 负数固定)；按 1fr 处理`);
        proportional.push(1);
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
      if (w < 0) {
        // 固定像素（绝对值）
        return Math.abs(w);
      }
      if (w >= 1 && w <= 24) {
        // 比例 → fr 值
        return w;
      }
      // w > 24：非法，回退 1
      console.warn(`Invalid weight ${w} (>24)；按 1fr 处理`);
      return 1;
    });
  }

  /**
   * Determine if a weight represents a fixed size
   * @param {number} weight - Weight value
   * @returns {boolean} true if fixed size
   */
  static isFixedWeight(weight) {
    return weight < 0;
  }

  /**
   * Get the fixed pixel value from a weight
   * @param {number} weight - Weight value
   * @returns {number} Pixel value
   */
  static getFixedValue(weight) {
    if (weight < 0) return Math.abs(weight);
    return 0;
  }

  /**
   * Generate CSS grid template string from weights
   * 规范 §2.3（2026-07-27 修订）：
   *   - 1-24 → 比例（Nfr）
   *   - <0   → 固定像素（绝对值 + px）
   *   - 0 / >24 → 非法（提示 + 回退 1fr）
   * @param {number[]} weights - Weight values
   * @returns {string} CSS grid template string
   */
  static toGridTemplate(weights) {
    if (!weights || weights.length === 0) return '';

    return weights.map(w => {
      if (w < 0) {
        // 固定像素（绝对值）— 必须最先判断
        return `${Math.abs(w)}px`;
      }
      if (w === 0 || w > 24) {
        // 非法 → 提示 + 回退 1fr
        console.warn(`Invalid weight ${w} (spec §2.3: 比例 1-24 / 固定 <0)；按 1fr 处理`);
        return '1fr';
      }
      // 1-24 比例
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
      if (w === 0) return 1; // 非法 → 1fr
      if (w < 0) {
        // 固定像素保留（grid template 中处理为 Npx）
        return w;
      }
      if (w > 24) {
        console.warn(`Invalid weight ${w} (>24)；按 1fr 处理`);
        return 1;
      }
      return w;
    });
  }
}

export default WeightCalculator;
