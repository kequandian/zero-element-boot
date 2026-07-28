import React, { useState, useEffect, useMemo } from 'react';

// Import parser and converter modules
import { detectFormat } from './parsers/formatDetector';
import { StandardFormatParser } from './parsers/standardFormatParser';
import { GridTemplateParser } from './parsers/gridTemplateParser';
import { GridConfigConverter } from './converters/gridConfigConverter';
import { WeightCalculator } from './converters/weightCalculator';
import { StyleApplier } from './utils/styleApplier';

/**
 * 视窗容器组件
 * @param {Object} [gridConfig] - 网格布局配置对象（向后兼容）
 * @param {number[]} [gridConfig.horizontalWeights] - 水平方向权重数组
 * @param {number[]} [gridConfig.verticalWeights] - 垂直方向权重数组
 * @param {string} [gridConfig.gap] - 网格间距, e.g., '10px' or '10px 20px'.
 * @param {string} [gridConfig.cellBorderRadius] - 单元格的圆角, e.g., '12px'.
 * @param {Object[]} [gridConfig.children] - 嵌套子容器配置（递归结构）
 * @param {Object} [layoutSpec] - LayoutDescription 规范形态（推荐用法）
 * @param {('landscape'|'portrait')} [layoutSpec.orientation] - 屏幕方向
 * @param {Object} [layoutSpec.layout] - GridRegion（cells/grid/weights/gap/padding）
 * @param {Object} [layoutSpec.params] - 标准格式 params（bounds + cells）
 * @param {Object} [layoutSpec.defaultStyle] - 默认 StyleObject
 * @param {Object} [layoutSpec.cellStyles] - 按 cellId 覆盖样式
 * @param {React.ReactNode} [children] - 渲染到每个叶子 cell 的子元素
 * @param {string} [background='#000'] - 容器背景色
 * @param {string} [padding] - 容器 padding
 */
export default function MultiViewport({
  children,
  background = '#000',
  padding,
  gridConfig,      // EXISTING: backward compatible
  layoutSpec       // NEW: accepts layout specification (Standard or Grid Template format)
}) {
  // --- NEW: Parse layout spec if provided ---
  const [effectiveGridConfig, setEffectiveGridConfig] = useState(null);
  const [cellIds, setCellIds] = useState([]);

  // Parse and convert layoutSpec to gridConfig
  useEffect(() => {
    if (gridConfig) {
      // Use provided gridConfig directly (existing behavior)
      setEffectiveGridConfig(gridConfig);
      setCellIds([]);
      return;
    }

    if (layoutSpec) {
      try {
        // Detect format
        const format = detectFormat(layoutSpec);

        if (format === 'UNKNOWN') {
          console.error('Unknown layout specification format:', layoutSpec);
          return;
        }

        // Parse based on format
        let parsed;
        if (format === 'STANDARD') {
          const parser = new StandardFormatParser();
          parsed = parser.parse(layoutSpec);
        } else if (format === 'GRID_TEMPLATE') {
          const parser = new GridTemplateParser();
          parsed = parser.parse(layoutSpec);
        }

        // Convert to gridConfig
        const converted = GridConfigConverter.convert(parsed);

        // Extract cell IDs for style application
        const extractedIds = StyleApplier.extractCellIds(parsed);

        setEffectiveGridConfig(converted);
        setCellIds(extractedIds);
      } catch (error) {
        console.error('Error parsing layout specification:', error);
      }
    }
  }, [layoutSpec, gridConfig]);

  // Memoize the layoutSpec for style application
  const memoizedLayoutSpec = useMemo(() => layoutSpec, [JSON.stringify(layoutSpec)]);

  const validateWeights = (weights) => {
    if (!weights || !Array.isArray(weights) || weights.length==0 || weights.some(w => typeof w !== 'number') || weights.reduce((a, b) => a + b, 0) <= 0) {
      console.error('Invalid weights array');
      return false;
    }
    return true;
  };

  const traverseGrid = (config, cellCount={value:0}, parentPath = 'root', depth = 0, index = 0, inheritedGap, inheritedBorderRadius) => {
    // const dimensions = useSize();

    const currentPath = depth==0? `${parentPath}` : `${parentPath}-${depth}_${index}`;
    
    // 继承父级权重配置逻辑
    config.horizontalWeights = validateWeights(config.horizontalWeights) 
      ? config.horizontalWeights : [1]
    
    config.verticalWeights = validateWeights(config.verticalWeights)
      ? config.verticalWeights : [1]

    // 计算有效单元格数量
    const baseCells = config.horizontalWeights.length * config.verticalWeights.length;
    cellCount.value += baseCells;

    // 处理嵌套子配置（过滤空对象）
    const validChildren = (config.children || []).filter(child => 
      Object.keys(child).length > 0 && 
      (child.horizontalWeights || child.verticalWeights)
    );

    // 更新单元格计数（减去有效子配置数量）
    cellCount.value -= validChildren.length;

    // --- 新增：处理gap的继承逻辑 ---
    // 如果当前配置明确定义了gap，则使用它。否则，使用从父级继承而来的gap。
    const effectiveGap = config.gap !== undefined ? config.gap : inheritedGap;

    // 优先使用当前配置自身的 cellBorderRadius，否则使用从父级继承的值。
    const effectiveBorderRadius = config.cellBorderRadius !== undefined ? config.cellBorderRadius : inheritedBorderRadius;


    return {
      ...config,
      gap: effectiveGap, // 在处理后的配置中设置最终生效的gap值
      cellBorderRadius: effectiveBorderRadius, // 在处理后的配置中设置最终生效的圆角值
      gridPath: currentPath,
      // 修复：nestedGridsByName 也需递归处理 gap/cellBorderRadius 继承
      // （新 span-aware 渲染路径会读 nestedGridsByName，不读 children）
      nestedGridsByName: Object.fromEntries(
        Object.entries(config.nestedGridsByName || {}).map(([name, sub]) => [
          name,
          traverseGrid(sub, cellCount, currentPath, depth + 1, 0, effectiveGap, effectiveBorderRadius),
        ])
      ),
      children: validChildren.map((child, i) => {
        // // 空对象配置继承父级权重
        // if (Object.keys(child).length === 0) {
        //   return {
        //     horizontalWeights: config.horizontalWeights,
        //     verticalWeights: config.verticalWeights,
        //   };
        // }
        return traverseGrid(child, cellCount, currentPath, depth + 1, i, effectiveGap, effectiveBorderRadius);
      })
    };
  };

  const gridCellCount = {value:0}  // 全于递归全局counter,计算grid可容纳的children数量
  const processedConfig = effectiveGridConfig ? traverseGrid(effectiveGridConfig, gridCellCount) : null;
  // console.log('processedConfig=', processedConfig)

  // // 计算水平方向划分
  // const calculateHorizontalLayout = () => {
  //   if (!horizontalWeights || horizontalWeights.length === 0) return null;
  //   const totalWeight = horizontalWeights.reduce((sum, weight) => sum + weight, 0);
  //   return horizontalWeights.map(weight => `${(weight / totalWeight) * 100}%`);
  // };

  // // 计算垂直方向划分
  // const calculateVerticalLayout = () => {
  //   if (!verticalWeights || verticalWeights.length === 0) return null;
  //   const totalWeight = verticalWeights.reduce((sum, weight) => sum + weight, 0);
  //   return verticalWeights.map(weight => `${(weight / totalWeight) * 100}%`);
  // };

  // const horizontalSizes = calculateHorizontalLayout();
  // const verticalSizes = calculateVerticalLayout();

  const renderNestedGrid = (config, parentPath, currentIndex = {value:0}, parentIndex = 0, layoutSpec = null, cellIds = []) => {
    const {
      horizontalWeights,
      verticalWeights,
      children: configChildren = [],
      gridPath,
      gap,
      cellBorderRadius,
      cellsLayout,           // 新增：2D 名字数组（spec cells）
      nestedGridsByName = {},// 新增：name → 嵌套 grid 配置
    } = config;
    
    // 用 WeightCalculator 处理：1-24 → Nfr，<0 → Npx，0/>24 → 1fr fallback
    const gridTemplateColumns = WeightCalculator.toGridTemplate(horizontalWeights);
    const gridTemplateRows = WeightCalculator.toGridTemplate(verticalWeights);

    // const totalWeight = horizontalWeights.reduce((a, b) => a + b, 0);
    // const gridTemplateColumns = `${horizontalWeights.map(w => (w / totalWeight) * 100 + '%').join(' ')}`;

    // const totalVerticalWeight = verticalWeights.reduce((a, b) => a + b, 0);
    // const gridTemplateRows = `${verticalWeights.map(h => (h / totalVerticalWeight) * 100 + '%').join(' ')}`;
    // --- 修改结束 ---

    // 修复：当 cellsLayout 存在时，用 gridTemplateAreas + gridArea 显式 span
    // 解决 colSpan>1 的 cell 被当成多个独立 slot 的 bug（右下角缺失）
    const hasTemplateAreas = cellsLayout && cellsLayout.length > 0;
    const gridTemplateAreas = hasTemplateAreas
      ? cellsLayout.map(row => `"${row.join(' ')}"`).join(' ')
      : null;

    // 收集按渲染顺序的唯一名字（保持首次出现顺序）
    const uniqueNames = hasTemplateAreas
      ? Array.from(new Set(cellsLayout.flat().filter(n => n !== '.')))
      : [];

    // 向后兼容：无 cellsLayout 时走旧路径
    const cellCount = horizontalWeights.length * verticalWeights.length - configChildren.length;

    return (
      <div
        key={gridPath}
        style={{
          display: 'grid',
          gridTemplateColumns: gridTemplateColumns,
          gridTemplateRows: gridTemplateRows,
          ...(gridTemplateAreas ? { gridTemplateAreas } : {}),
          gap: gap || 0,
          height: '100%',
          width: '100%'
        }}
      >
        {hasTemplateAreas ? (
          // ─── span-aware 渲染路径 ───
          uniqueNames.map((name) => {
            // 嵌套 grid：用 gridArea 占位，内部递归
            if (nestedGridsByName[name]) {
              return (
                <div
                  key={`${gridPath}-${name}-wrapper`}
                  style={{
                    gridArea: name,
                    width: '100%',
                    height: '100%',
                    borderRadius: cellBorderRadius || 0,
                    overflow: 'hidden',
                  }}
                >
                  {renderNestedGrid(
                    { ...nestedGridsByName[name], gridPath: `${gridPath}-${name}` },
                    `${gridPath}-${name}`,
                    currentIndex,
                    0,
                    layoutSpec,
                    cellIds,
                  )}
                </div>
              );
            }
            // 叶子 cell：从 children 队列按顺序消费
            const componentIndex = currentIndex.value++;
            const child = React.Children.toArray(children)[componentIndex];
            const cellStyle = layoutSpec && name
              ? StyleApplier.getCellStyle(name, layoutSpec)
              : {};
            return (
              <div
                key={`${gridPath}-${name}-wrapper`}
                style={{
                  gridArea: name,
                  width: '100%',
                  height: '100%',
                  borderRadius: cellBorderRadius || 0,
                  overflow: 'hidden',
                  ...cellStyle,
                }}
              >
                {child || <></>}
              </div>
            );
          })
        ) : (
          // ─── 向后兼容路径（无 cellsLayout）───
          <>
            {configChildren.map((childConfig, index) => {
              const childPath = `${parentPath}-${parentIndex}_${index}`;
              return renderNestedGrid(childConfig, childPath, currentIndex, index, layoutSpec, cellIds);
            })}
            {Array.from({length: cellCount}).map((_, index) => {
              const componentIndex = currentIndex.value++;
              if (componentIndex < React.Children.count(children)) {
                const child = React.Children.toArray(children)[componentIndex];
                const cellId = cellIds[componentIndex];
                const cellStyle = layoutSpec && cellId
                  ? StyleApplier.getCellStyle(cellId, layoutSpec)
                  : {};
                return (
                  <div
                    key={`${gridPath}-cell-wrapper-${index}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: cellBorderRadius || 0,
                      overflow: 'hidden',
                      ...cellStyle,
                    }}
                  >
                    {child}
                  </div>
                );
              }
              return <React.Fragment key={`${gridPath}-cell-empty-${index}`}></React.Fragment>;
            })}
          </>
        )}
      </div>
    );
  };

  return (
    <div style={{
      // width: `${dimensions.width}px`,
      // height: `${dimensions.height}px`,
      width: "100%",
      height: "100%",
      background: `${background}`,
      padding: padding || 0,
      overflow: 'hidden'
    }}>
      {processedConfig && renderNestedGrid(processedConfig, 'root', { value: 0 }, 0, memoizedLayoutSpec, cellIds)}
    </div>
  );
}
