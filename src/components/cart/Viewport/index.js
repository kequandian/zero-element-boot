import React, { useState, useEffect } from 'react';
import useSize from '@/components/hooks/useSize';

/**
 * 视窗容器组件
 * @param { ReactNode } children 子组件
 * @param { string } background 背景色
 * @param { number[] } horizontalWeights 水平方向权重数组
 * @param { number[] } verticalWeights 垂直方向权重数组
 */
export default function Viewport({ children, background = '#000', horizontalWeights, verticalWeights }) {
  const dimensions = useSize();

  // 计算水平方向划分
  const calculateHorizontalLayout = () => {
    if (!horizontalWeights || horizontalWeights.length === 0) return null;
    const totalWeight = horizontalWeights.reduce((sum, weight) => sum + weight, 0);
    return horizontalWeights.map(weight => `${(weight / totalWeight) * 100}%`);
  };

  // 计算垂直方向划分
  const calculateVerticalLayout = () => {
    if (!verticalWeights || verticalWeights.length === 0) return null;
    const totalWeight = verticalWeights.reduce((sum, weight) => sum + weight, 0);
    return verticalWeights.map(weight => `${(weight / totalWeight) * 100}%`);
  };

  const horizontalSizes = calculateHorizontalLayout();
  const verticalSizes = calculateVerticalLayout();

  return (
    <div style={{
      width: `${dimensions.width}px`,
      height: `${dimensions.height}px`,
      background: `${background}`,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: horizontalSizes ? horizontalSizes.join(' ') : '1fr',
      gridTemplateRows: verticalSizes ? verticalSizes.join(' ') : '1fr'
    }}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            width: '100%',
            height: '100%'
          }
        });
      })}
    </div>
  );
}

/**
 * test
 * @param {} props 
 * @returns 
 */
function Sandbox (props) {
  return (
      <Viewport 
          horizontalWeights={[2, 2, 1]}
          verticalWeights={[3, 1]}>
          <DefaultPlaceholder>Left</DefaultPlaceholder>
          <DefaultPlaceholder>Top</DefaultPlaceholder>
          <DefaultPlaceholder>Right</DefaultPlaceholder>
          <DefaultPlaceholder/>
          <DefaultPlaceholder/>
          <DefaultPlaceholder/>
          <DefaultPlaceholder/>
          <DefaultPlaceholder/>
          <DefaultPlaceholder/>
        </Viewport>
  )
}
