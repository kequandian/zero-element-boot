/**
 * Grid Reference Resolver for Grid Template Format
 * Resolves grid references in Grid Template format
 * Transforms flat JSON structure into nested hierarchy
 */

/**
 * Resolves grid references in Grid Template format
 * Transforms flat JSON structure into nested hierarchy
 */
export class GridReferenceResolver {
  /**
   * Resolve grid references and build nested structure
   * @param {Object} parsedLayout - Parsed Grid Template layout
   * @returns {Object} Nested grid structure ready for conversion
   */
  static resolve(parsedLayout) {
    const { rootRegion } = parsedLayout;
    return this._resolveRegion(rootRegion, parsedLayout);
  }

  /**
   * Resolve a region's grid references
   * @param {Object} region - Parsed region
   * @param {Object} context - Full parsed layout context
   * @returns {Object} Resolved region with nested grids
   * @private
   */
  static _resolveRegion(region, context) {
    const { cells, grids, weights, gap, padding } = region;

    // Determine which cells are leaves and which are nested grids
    const resolvedCells = cells.cells.map(cell => {
      const cellKey = cell.id;

      if (grids && grids[cellKey]) {
        // This cell contains a nested grid
        return {
          ...cell,
          isLeaf: false,
          nestedGrid: this._resolveRegion(grids[cellKey], context)
        };
      }

      // Leaf cell
      return {
        ...cell,
        isLeaf: true
      };
    });

    return {
      dimensions: cells.dimensions,
      cells: resolvedCells,
      weights,
      gap,
      padding
    };
  }

  /**
   * Flatten nested structure into MultiViewport's gridConfig format
   * MultiViewport uses recursive children arrays for nested grids
   * @param {Object} resolvedRegion - Resolved region with nested grids
   * @param {number} parentAspectRatio - Parent aspect ratio for long edge calculation
   * @returns {Object} MultiViewport-compatible gridConfig
   */
  static toGridConfigHierarchy(resolvedRegion, parentAspectRatio = null) {
    const { dimensions, cells, weights, gap } = resolvedRegion;

    // Build rowWeights and colWeights from weights
    let rowWeights, colWeights;

    if (weights.isLongEdge && weights.longEdgeWeights) {
      // Long edge: determine direction based on aspect ratio or dimensions
      const isLandscape = parentAspectRatio === null
        ? dimensions.cols >= dimensions.rows
        : parentAspectRatio >= 1;

      if (isLandscape) {
        // Landscape: weights apply to columns
        colWeights = weights.longEdgeWeights;
        rowWeights = Array(dimensions.rows).fill(1);
      } else {
        // Portrait: weights apply to rows
        rowWeights = weights.longEdgeWeights;
        colWeights = Array(dimensions.cols).fill(1);
      }
    } else {
      // Explicit row and column weights
      rowWeights = weights.rows || Array(dimensions.rows).fill(1);
      colWeights = weights.cols || Array(dimensions.cols).fill(1);

      // Validate lengths
      if (rowWeights.length !== dimensions.rows) {
        console.warn(
          `Row weights length (${rowWeights.length}) does not match rows (${dimensions.rows}). ` +
          `Padding or truncating to fit.`
        );
        // Adjust to match
        if (rowWeights.length < dimensions.rows) {
          rowWeights = [...rowWeights, ...Array(dimensions.rows - rowWeights.length).fill(1)];
        } else {
          rowWeights = rowWeights.slice(0, dimensions.rows);
        }
      }

      if (colWeights.length !== dimensions.cols) {
        console.warn(
          `Column weights length (${colWeights.length}) does not match columns (${dimensions.cols}). ` +
          `Padding or truncating to fit.`
        );
        if (colWeights.length < dimensions.cols) {
          colWeights = [...colWeights, ...Array(dimensions.cols - colWeights.length).fill(1)];
        } else {
          colWeights = colWeights.slice(0, dimensions.cols);
        }
      }
    }

    // Separate nested grids for children array
    // We need to find which grid positions contain nested grids
    const nestedGridConfigs = [];
    /** 名称 → 嵌套 grid 配置；供 MultiViewport 用 gridArea 命名放置 */
    const nestedGridsByName = {};

    // Sort cells by position (row then col) to ensure correct order
    const sortedCells = [...cells].sort((a, b) => {
      if (a.row !== b.row) return a.row - b.row;
      return a.col - b.col;
    });

    // Track which positions have nested grids
    const nestedGridPositions = new Set();

    sortedCells.forEach(cell => {
      if (!cell.isLeaf) {
        // Calculate position index for MultiViewport
        const positionIndex = cell.row * dimensions.cols + cell.col;
        nestedGridPositions.add(positionIndex);

        // Recursively convert nested grid
        const childConfig = this.toGridConfigHierarchy(
          cell.nestedGrid,
          dimensions.cols / dimensions.rows
        );
        nestedGridConfigs.push({ positionIndex, config: childConfig });
        // 同时按名字建索引（spec §3.4 cellsLayout 里此名字占多格 → 一个 name 对应一个嵌套）
        nestedGridsByName[cell.id] = childConfig;
      }
    });

    // Create children array in the correct order
    // MultiViewport expects children array where each child corresponds to
    // a cell position in reading order (left-to-right, top-to-bottom)
    const children = [];
    const totalCells = dimensions.rows * dimensions.cols;

    for (let i = 0; i < totalCells; i++) {
      const nestedGrid = nestedGridConfigs.find(ng => ng.positionIndex === i);
      if (nestedGrid) {
        children.push(nestedGrid.config);
      }
    }

    // 修复：构造 cellsLayout（2D 名字数组），让 MultiViewport 用 gridTemplateAreas 显式 span
    // 解决 bug：cells = [["ticker","ticker"]] 的 colSpan=2 之前被当成 2 个 slot，
    // 第 2 个 slot 留空导致右下角缺失
    const cellsLayout = [];
    for (let r = 0; r < dimensions.rows; r++) {
      const row = [];
      for (let c = 0; c < dimensions.cols; c++) {
        const cell = sortedCells.find(cell =>
          r >= cell.row && r < cell.row + cell.rowSpan &&
          c >= cell.col && c < cell.col + cell.colSpan
        );
        row.push(cell ? cell.id : '.');
      }
      cellsLayout.push(row);
    }

    // Format gap for MultiViewport
    // 修复：当源 gap 为默认 {row:0, col:0}（即 _parseGap 的 fallback）时，
    // 不写入 gridConfig.gap —— 让 MultiViewport.traverseGrid 的 inheritedGap 机制生效。
    // 否则 '0px' 会被当成"显式指定 0 间距"而阻断继承。
    let formattedGap;
    if (gap && typeof gap === 'object') {
      const isDefault = gap.row === 0 && gap.col === 0;
      if (isDefault) {
        formattedGap = undefined;  // 让子级继承父级
      } else if (gap.row === gap.col) {
        formattedGap = `${gap.row}px`;
      } else {
        formattedGap = `${gap.row}px ${gap.col}px`;
      }
    } else if (typeof gap === 'number' && gap > 0) {
      formattedGap = `${gap}px`;
    } else {
      formattedGap = undefined;  // 没指定 → 让 MultiViewport 继承
    }

    return {
      horizontalWeights: colWeights,
      verticalWeights: rowWeights,
      gap: formattedGap,
      cellsLayout,                // 新增：2D 名字数组，供 MultiViewport 显式 span
      nestedGridsByName,          // 新增：嵌套 grid 按名字索引
      children: children
    };
  }

  /**
   * Get cell ID at a specific position in the resolved region
   * Useful for mapping rendered cells back to spec
   * @param {Object} resolvedRegion - Resolved region
   * @param {number} row - Row index
   * @param {number} col - Column index
   * @returns {string|null} Cell ID or null if empty
   */
  static getCellIdAtPosition(resolvedRegion, row, col) {
    const { cells } = resolvedRegion;

    for (const cell of cells) {
      // Check if position falls within this cell's span
      if (row >= cell.row && row < cell.row + cell.rowSpan &&
          col >= cell.col && col < cell.col + cell.colSpan) {
        return cell.id;
      }
    }

    return null;
  }

  /**
   * Get all leaf cell IDs in order
   * @param {Object} resolvedRegion - Resolved region
   * @returns {Array<string>} Ordered leaf cell IDs
   */
  static getLeafCellIds(resolvedRegion) {
    const { cells } = resolvedRegion;
    const leafCells = cells.filter(cell => cell.isLeaf);

    // Sort by position
    leafCells.sort((a, b) => {
      if (a.row !== b.row) return a.row - b.row;
      return a.col - b.col;
    });

    return leafCells.map(cell => cell.id);
  }

  /**
   * Count total leaf cells (including those in nested grids)
   * @param {Object} resolvedRegion - Resolved region
   * @returns {number} Total leaf cell count
   */
  static countTotalLeafCells(resolvedRegion) {
    let count = 0;

    resolvedRegion.cells.forEach(cell => {
      if (cell.isLeaf) {
        count++;
      } else {
        count += this.countTotalLeafCells(cell.nestedGrid);
      }
    });

    return count;
  }
}

export default GridReferenceResolver;
