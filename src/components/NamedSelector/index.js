import React, { useState } from 'react';
import useLayout from '@/components/hooks/useLayout';

// 无效果，仅传递数据
import NextIndicator from '@/components/indicator/NextIndicator';

/**
 * 
 * @param {Component} defaultIndicator   默认的Cart
 * @param {Object} defaultIndicatorProps defaultIndicator 参数
 * @param {Component} hoverIndicator     鼠标Hover状态下的Cart, 叠加效果
 * @param {Object} hoverIndicatorProps   hoverIndicator 参数
 * @param {Component} selectedIndicator  选中状态下的Cart, 替换默认的 Cart
 * @param {Object} selectedIndicatorProps   selectedIndicator 参数
 * @returns 
 */
 function NamedSelector( { children, defaultIndicator={}, defaultIndicatorProps = {},
                                    hoverIndicator = {}, hoverIndicatorProps = {},
                                    selectedIndicator={}, selectedIndicatorProps={}, isSelected=false}) {

const [hoverRef, { getHoverStyles }] = useLayout();
const [selectRef, { getSelectStyles }] = useLayout();

const [onHover, setOnHover] = useState(false);

const toggleHover = () => {
const result = !onHover;
setOnHover(result)
}

// 选中状态无需 default indicator, means cart
const DefaultIndicator =  (defaultIndicator===undefined || isSelected) ? NextIndicator : defaultIndicator

// 没有传入 selectedIndicator, 或 isSelected==false, 相当于没有效果
const SelectedIndicator = (selectedIndicator===undefined || isSelected == false )? NextIndicator : selectedIndicator

// default, hover, selected style
const HoverIndicator =  ( hoverIndicator===undefined || onHover==false ) ? NextIndicator : hoverIndicator

return React.Children.map(children, child => {
  return (
    <div style={{flex: 1}} onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}>
      <DefaultIndicator getHoverStyles={getHoverStyles} getSelectStyles={getSelectStyles} {...defaultIndicatorProps}>
          {/* DefaultIndicator/SelectedIndicator 二选一 */}
          <HoverIndicator ref={hoverRef} {...hoverIndicatorProps}>
          <SelectedIndicator ref={selectRef} {...selectedIndicatorProps}>
             {child}
          </SelectedIndicator>
          </HoverIndicator>
      </DefaultIndicator>
    </div>
    )
  })
}
