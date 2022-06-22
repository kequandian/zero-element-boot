import React, { useState } from 'react';

require("./index.less");
/**
 * 
 * @param {color} fill 背景
 * @param {borderRadius} corner 圆角
 * @param {borderStyle} stroke 边框
 * @param {borderWidth} linewidth 边框线框
 * @param {margin} margin 边距
 * @param {padding} padding 内距
 * 
 * @returns 
 */


export default function EffectCart(props) {
  /**
   * fill         背景
   * corner       圆角
   * stroke       边框
   * linewidth    边框线框
   * margin       边距
   * padding      内距
   * 
   * shadow       0 2px 8px rgba(0, 0, 0, 0.15)
   */
  const {
    children,
    styleCon = {},
    isOnHover = true,
    isSelected = false
  } = props;
  const {
    fill = '#ffffff',
    corner = '4px',
    stroke = 'solid',
    linewidth = '1px',
    margin = '6px',
    padding = '10px',
    shadow = '',
    lineColor = '#d0cdcd'
  } = styleCon;
  const [onHover, setOnHover] = useState(false);

  const toggleHover = () => {
    if (!isOnHover) {
      return;
    }

    const result = !onHover;
    setOnHover(result);
  };

  let bgColor = `${fill}`;

  if (onHover) {
    bgColor = `${fill}80`;
  } else {
    bgColor = `${fill}ff`;
  }

  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: "c-cart-item",
      style: {
        margin: `${margin}`,
        padding: `${padding}`,
        borderRadius: `${corner}`,
        background: `${bgColor}`,
        borderStyle: `${stroke}`,
        boxShadow: `${shadow}`,
        borderWidth: `${linewidth}`,
        borderColor: `${lineColor}`
      },
      onMouseEnter: () => toggleHover(),
      onMouseLeave: () => toggleHover()
    }, child);
  });
}