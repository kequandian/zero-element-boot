import React, { useState } from 'react';
// import useLayout from '@/components/hooks/useLayout';
import NextIndicator from '@/components/NextIndicator';

/**
 * @param {Component} DefaultIndicator   默认的Cart
 * @param {Component} HoverIndicator     鼠标Hover状态下的Cart, 叠加效果, 可传可不传, 可由defaultIndicator 实现hover效果
 * @param {Component} SelectedIndicator  选中状态下的Cart, 替换默认的 Cart
 * @param {Boolean} isSelected          是否选中状态，由父组件传递此参数
 * @param {Boolean} selected            是否响应Click事件切换选中状态
 * @param {Boolean} overlay             如果有传入HoverIndicator, selected是否叠加hover效果, 没有配置为不叠加, hover至selected组件时，没响应
 * @returns 
 */
 export default function OverlaySelector( { children, DefaultIndicator, 
                                                      HoverIndicator,
                                                      SelectedIndicator,
                                                      defaultIndicator, defaultIndicatorData = {},
                                                      hoverIndicator, hoverIndicatorData = {}, 
                                                      selectedIndicator, selectedIndicatorData={},
                                                      isSelected=false, selected=false, overlay=false}) {

// const [defaultRef, { getClassName }] = useLayout();
// const [selectRef, { getSelectStyles }] = useLayout();
// const [hoverRef, { getHoverStyles }] = useLayout();

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

// 选中状态无需 default indicator
const __DefaultIndicator = _isSelected? NextIndicator : (DefaultIndicator || getNamedCart(defaultIndicator))

// 没有传入 selectedIndicator, 或 isSelected==false, 相当于没有效果
const __SelectedIndicator = (!_isSelected) ? NextIndicator : (SelectedIndicator || getNamedCart(selectedIndicator))


// 选中状态，以及没有配置 overlay, hover 没有效果, overlay配置, 叠加 hover 效果
const __HoverIndicator = ((_isSelected && !overlay) || !onHover) ? NextIndicator : (HoverIndicator || getNamedCart(hoverIndicator))


return React.Children.map(children, child => {
  return (
    <div style={{flex: 1}} onClick={()=>toggleSelected()} onMouseEnter={() => toggleHover()} onMouseLeave={() => toggleHover()}>
      <__HoverIndicator {...hoverIndicatorData}>
          <__DefaultIndicator {...defaultIndicatorData}>
              <__SelectedIndicator {...selectedIndicatorData}>
                {child}
              </__SelectedIndicator>
          </__DefaultIndicator>
      </__HoverIndicator>
    </div>
    )
  })
}



function getNamedCart(cart) {
  const cartName = cart ? ((typeof cart === 'string') ? cart : cart.xname) : undefined
  return cart ? (DefaultCartSet[cartName] || tips(cartName)) : NextIndicator;
}


function tips(name) {
  return _ => `HoverOverlay::NamedCart ${name} 未定义`;
}

