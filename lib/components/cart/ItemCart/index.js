function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useImperativeHandle, forwardRef } from 'react';
import Cart from "../Cart";
export default /*#__PURE__*/forwardRef(function ItemCart(props, ref) {
  /**
   * fill       背景色
   * stroke     线框色
   * lineWidth  线框粗
   * outline    边界线类型
   */
  const {
    children,
    padding = '10px',
    margin = '10px',
    stroke = 'solid'
  } = props;
  let config = {
    padding,
    margin,
    stroke
  }; // useImperativeHandle(ref, () => ({
  //   getClassName: () => {
  //     return `c-cart-item`;
  //   }
  // }));

  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(Cart, _extends({
      corner: ""
    }, config), child);
  });
});