import React, { useState, useEffect } from 'react';
import useSize from '@/components/hooks/useSize';

/**
 * 视窗容器组件
 * @param {Object} gridConfig - 网格布局配置对象
 * @param {number[]} gridConfig.horizontalWeights - 水平方向权重数组（必须为数值数组且总和>0）
 * @param {number[]} gridConfig.verticalWeights - 垂直方向权重数组（必须为数值数组且总和>0）
 * @param {Object[]} [gridConfig.children] - 嵌套子容器配置（支持递归结构）
 * @example
 * // 基本配置示例
 * {
 *   horizontalWeights: [2, 3, 1],
 *   verticalWeights: [4, 1],
 *   children: [
 *     {
 *       horizontalWeights: [1, 2],
 *       verticalWeights: [3]
 *     }
 *   ]
 * }
 */
export default function MultiViewport({ children, background = '#000', gridConfig }) {
  const validateWeights = (weights) => {
    if (!weights || !Array.isArray(weights) || weights.length==0 || weights.some(w => typeof w !== 'number') || weights.reduce((a, b) => a + b, 0) <= 0) {
      console.error('Invalid weights array');
      return false;
    }
    return true;
  };

  const traverseGrid = (config, cellCount={value:0}, parentPath = 'root', depth = 0, index = 0) => {
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

    return {
      ...config,
      gridPath: currentPath,
      children: validChildren.map((child, i) => {
        // // 空对象配置继承父级权重
        // if (Object.keys(child).length === 0) {
        //   return {
        //     horizontalWeights: config.horizontalWeights,
        //     verticalWeights: config.verticalWeights,
        //   };
        // }
        return traverseGrid(child, cellCount, currentPath, depth + 1, i);
      })
    };
  };

  const gridCellCount = {value:0}  // 全于递归全局counter,计算grid可容纳的children数量
  const processedConfig = traverseGrid(gridConfig, gridCellCount);
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

  const renderNestedGrid = (config, parentPath, currentIndex = {value:0}, parentIndex = 0) => {
    const { horizontalWeights, verticalWeights, children : configChildren = [],  gridPath } = config;
    
    const totalWeight = horizontalWeights.reduce((a, b) => a + b, 0);
    const gridTemplateColumns = `${horizontalWeights.map(w => (w / totalWeight) * 100 + '%').join(' ')}`;
    // const gridTemplateColumnsFr = `${horizontalWeights.join('fr ')}fr`;

    const totalVerticalWeight = verticalWeights.reduce((a, b) => a + b, 0);
    const gridTemplateRows = `${verticalWeights.map(h => (h / totalVerticalWeight) * 100 + '%').join(' ')}`;
    // const gridTemplateRowsFr = `${verticalWeights.join('fr ')}fr`;

    // bugfix: skip the component to be rendered.
    // const cellCount = horizontalWeights.length * verticalWeights.length;
    const cellCount = horizontalWeights.length * verticalWeights.length - configChildren.length;

    return (
      <div 
        key={gridPath}
        style={{
          display: 'grid',
          gridTemplateColumns: 'var(--grid-cols, ' + gridTemplateColumns + ')',
          gridTemplateRows: 'var(--grid-rows, ' + gridTemplateRows + ')',
          // '--grid-cols-fr': gridTemplateColumnsFr,
          // '--grid-rows-fr': gridTemplateRowsFr,
          height: '100%',
          width: '100%'
        }}
      >
        {
            configChildren.map((childConfig, index) => {
              const childPath = `${parentPath}-${parentIndex}_${index}`;
              return renderNestedGrid(childConfig, childPath, currentIndex, index);
          })
        }
        
        {/**for each cellCount */}
        {Array.from({length: cellCount}).map((_, index) => {
          const componentIndex = currentIndex.value++
          // console.log('renderNestedGrid.componentIndex=', componentIndex, ', gridPath=', `${gridPath}-cell-${index}`)

          return (componentIndex < React.Children.count(children)?
            React.cloneElement(children[componentIndex], {
              key: `${gridPath}-cell-${index}`,
              gridPath: `${gridPath}-cell-${index}`,
              style: {
                ...children[componentIndex].props.style,
                width: '100%',
                height: '100%'
              }
            }):(<></>)
          )
        })}
      </div>
    );
  };

  return (
    <div style={{
      // width: `${dimensions.width}px`,
      // height: `${dimensions.height}px`,
      width: "100vw",
      height: "100vh",
      background: `${background}`,
      overflow: 'hidden'
    }}>
      {renderNestedGrid(processedConfig, 'root')}
    </div>
  );
}
