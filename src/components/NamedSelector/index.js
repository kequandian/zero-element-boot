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
 * @param {Boolean} isSelected          是否选中状态，由父组件传递此参数
 * @param {Boolean} selected            是否响应Click事件切换选中状态
 * @param {Boolean} overlay           hoverIndicator之cart组件效果是否叠加
 * @returns 
 */
 export default function NamedSelector( { children, defaultIndicator, defaultIndicatorProps = {},
                                    hoverIndicator, hoverIndicatorProps = {}, overlay=false,
                                    selectedIndicator, selectedIndicatorProps={}, isSelected=false, selected=false}) {

const [hoverRef, { getHoverStyles }] = useLayout();
const [selectRef, { getSelectStyles }] = useLayout();

const [onHover, setOnHover] = useState(false);
const [onSelected, setSelected] = useState(false);

const toggleHover = () => {
    const result = !onHover;
    setOnHover(result)
}

const toggleSelected = () => {
  const result = !onSelected;
  setSelected(result)
}

const _isSelected = selected ? onSelected : isSelected

// 选中状态无需 default indicator, means cart
const DefaultIndicator =  (defaultIndicator===undefined || _isSelected || overlay==false) ? NextIndicator : defaultIndicator

// 没有传入 selectedIndicator, 或 isSelected==false, 相当于没有效果
const SelectedIndicator = (selectedIndicator===undefined || _isSelected == false )? NextIndicator : selectedIndicator

// default, hover, selected style
const HoverIndicator =  ( hoverIndicator===undefined || onHover==false || _isSelected ) ? NextIndicator : hoverIndicator

return React.Children.map(children, child => {
  return (
    <div style={{flex: 1}} onClick={()=>toggleSelected()} onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}>
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
