function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import useLayout from "../hooks/useLayout"; // 无效果，仅传递数据

import NextIndicator from "../indicator/NextIndicator";
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

export default function NamedSelector({
  children,
  defaultIndicator,
  defaultIndicatorProps = {},
  hoverIndicator,
  hoverIndicatorProps = {},
  overlay = false,
  selectedIndicator,
  selectedIndicatorProps = {},
  isSelected = false,
  selected = false
}) {
  const [hoverRef, {
    getHoverStyles
  }] = useLayout();
  const [selectRef, {
    getSelectStyles
  }] = useLayout();
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

  const _isSelected = selected ? onSelected : isSelected; // 选中状态无需 default indicator, means cart


  const DefaultIndicator = defaultIndicator === undefined || _isSelected || overlay == false ? NextIndicator : defaultIndicator; // 没有传入 selectedIndicator, 或 isSelected==false, 相当于没有效果

  const SelectedIndicator = selectedIndicator === undefined || _isSelected == false ? NextIndicator : selectedIndicator; // default, hover, selected style

  const HoverIndicator = hoverIndicator === undefined || onHover == false || _isSelected ? NextIndicator : hoverIndicator;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      },
      onClick: () => toggleSelected(),
      onMouseEnter: () => toggleHover(),
      onMouseLeave: () => toggleHover()
    }, /*#__PURE__*/React.createElement(DefaultIndicator, _extends({
      getHoverStyles: getHoverStyles,
      getSelectStyles: getSelectStyles
    }, defaultIndicatorProps), /*#__PURE__*/React.createElement(HoverIndicator, _extends({
      ref: hoverRef
    }, hoverIndicatorProps), /*#__PURE__*/React.createElement(SelectedIndicator, _extends({
      ref: selectRef
    }, selectedIndicatorProps), child))));
  });
}