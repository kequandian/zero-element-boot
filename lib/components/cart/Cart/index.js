import React, { useImperativeHandle, forwardRef, useState } from 'react';
require("./index.less");

/**
 * 
 * @param {color} fill 背景
 * @param {color} fillHover 悬停背景
 * @param {borderRadius} corner 圆角
 * @param {borderStyle} stroke 边框
 * @param {borderWidth} linewidth 边框线框
 * @param {margin} margin 边距
 * @param {padding} padding 内距
 * 
 * @returns 
 */
export default function Cart(props) {
  /**
   * fill         背景色
   * fillHover    鼠标悬停背景色
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
    fill = '',
    fillHover = '',
    corner = '4px',
    stroke = 'solid',
    linewidth = '1px',
    margin = '6px',
    padding = '10px',
    shadow = '',
    lineColor = '#d0cdcd',
    isOnHover = false
  } = props;
  const [onHover, setOnHover] = useState(false);

  // useImperativeHandle(ref, () => ({
  //   getClassName: () => {
  //     return `c-Cart`;
  //   }
  // }));

  const toggleHover = () => {
    if (!isOnHover) {
      return;
    }
    const result = !onHover;
    setOnHover(result);
  };
  let bgColor = `${fill}`;
  if (onHover) {
    bgColor = `${fillHover}`;
  } else {
    bgColor = `${fill}`;
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