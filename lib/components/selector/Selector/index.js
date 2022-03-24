import React, { useState } from 'react';
import useLayout from "../../hooks/useLayout";
/**
 * 
 * @param {Object} defaultIndicator 默认样式 ( type of Cart)
 * @param {Object} hoverIndicator 响应Hover事件的Indicator ( type of Cart)
 * @param {Object} hoverIndicator 响应Selected事件的Indicator (type of Cart)
 * @returns 
 */

export default function Selector(props) {
  const {
    children,
    hoverIndicator = {},
    selectedIndicator = {},
    defaultIndicator = {},
    isSelected = false
  } = props;
  const [hoverRef, {
    getHoverStyles
  }] = useLayout();
  const [selectRef, {
    getSelectStyles
  }] = useLayout(); // TODO
  // 判断 hoverIndicator 是否有 hoverIndicator.props 属性
  // 1. 有则获取 hoverIndicator.indicator, hoverIndicator.props
  // 2. 否则直接获取 hoverIndicator 作为 indicator

  const [onHover, setOnHover] = useState(false);
  return React.Children.map(children, child => {
    const toggleHover = () => {
      const result = !onHover;
      setOnHover(result);
    };

    const HoverIndicator = hoverIndicator;
    const SelectedIndicator = selectedIndicator;
    const DefaultIndicator = defaultIndicator;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      },
      onMouseEnter: () => toggleHover(),
      onMouseLeave: () => toggleHover()
    }, /*#__PURE__*/React.createElement(DefaultIndicator, {
      onHover: onHover,
      isSelected: isSelected,
      getHoverStyles: getHoverStyles,
      getSelectStyles: getSelectStyles
    }, /*#__PURE__*/React.createElement(HoverIndicator, {
      indicate: onHover,
      ref: hoverRef
    }, /*#__PURE__*/React.createElement(SelectedIndicator, {
      indicate: isSelected,
      ref: selectRef
    }, child))));
  });
}