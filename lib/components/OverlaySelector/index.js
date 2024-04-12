function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
// import useLayout from '@/components/hooks/useLayout';

// 无效果，仅传递数据
import NextIndicator from "../NextIndicator";

/**
 * @param {Component} defaultIndicator   默认的Cart
 * @param {Object} defaultIndicatorProps defaultIndicator 参数
 * @param {Component} selectedIndicator  选中状态下的Cart, 替换默认的 Cart
 * @param {Object} selectedIndicatorProps   selectedIndicator 参数
 * @param {Component} hoverIndicator     鼠标Hover状态下的Cart, 叠加效果, 可传可不传, 可由defaultIndicator 实现hover效果
 * @param {Object} hoverIndicatorProps   hoverIndicator 参数
 * @param {Boolean} isSelected          是否选中状态，由父组件传递此参数
 * @param {Boolean} selected            是否响应Click事件切换选中状态
 * @param {Boolean} overlay             如果有传入hoverIndicator, selected是否叠加hover效果, 没有配置为不叠加
 * @returns 
 */
export default function OverlaySelector({
  children,
  defaultIndicator,
  defaultIndicatorProps = {},
  selectedIndicator,
  selectedIndicatorProps = {},
  hoverIndicator,
  hoverIndicatorProps = {},
  // 响应 hover
  indicatorData = {},
  isSelected = false,
  selected = false,
  overlay = false
}) {
  /**
   * 用于返回React内原生组件的属性集合, 通过ref引用
   */
  // const [defaultRef, { getClassName }] = useLayout();
  // const [selectRef, { getSelectStyles }] = useLayout();
  // const [hoverRef, { getHoverStyles }] = useLayout();

  const [onHover, setOnHover] = useState(false);
  const [onSelected, setSelected] = useState(false);
  const toggleHover = () => {
    const result = !onHover;
    setOnHover(result);
  };
  const toggleSelected = () => {
    const result = !onSelected;
    setSelected(result);
  };
  const _isSelected = selected ? onSelected : isSelected;

  // 选中状态无需 default indicator,  两者相互切换,  默认状态可以不配置
  const DefaultIndicator = defaultIndicator === undefined || _isSelected ? NextIndicator : defaultIndicator;

  // 没有传入 selectedIndicator, 或 isSelected==false, 相当于没有效果
  const SelectedIndicator = selectedIndicator === undefined || !_isSelected ? NextIndicator : selectedIndicator;

  // 选中状态，以及没有配置 overlay, hover 没有效果, overlay配置, 叠加 hover 效果
  const HoverIndicator = hoverIndicator === undefined || onHover == false || _isSelected && !overlay ? NextIndicator : hoverIndicator;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      },
      onClick: () => toggleSelected(),
      onMouseEnter: () => toggleHover(),
      onMouseLeave: () => toggleHover()
    }, /*#__PURE__*/React.createElement(HoverIndicator, _extends({}, hoverIndicatorProps, {
      indicatorData: indicatorData
    }), /*#__PURE__*/React.createElement(DefaultIndicator, defaultIndicatorProps, /*#__PURE__*/React.createElement(SelectedIndicator, selectedIndicatorProps, child))));
  });
}