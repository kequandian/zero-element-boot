import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import PageCart from "../cart/PageCart"; // import Cart from 'zero-element-boot/lib/components/cart/Cart';

import Rectangle from "./Rectangle";
/**
 * 
 * @param {color} fill 圆、矩形背景色
 * @param {color} bg 背景色
 * @param {width} width 宽度
 * @param {height} height 高度
 * 
 * 
 */

export default function ItemPlaceholder(props) {
  const {
    width = '90px',
    height = '90px',
    fill = '#edf0fd',
    bg = '#ffffff'
  } = props; // console.log('w,h,b ==', width, height, fill)

  return /*#__PURE__*/React.createElement(PageCart, {
    backgroundColor: "#dadde1",
    width: "800px",
    height: "400px",
    bg: ""
  }, /*#__PURE__*/React.createElement(Center, {
    w: "300px",
    h: "140px",
    bg: bg
  }, /*#__PURE__*/React.createElement(Rectangle, {
    margin: "10px",
    width: width,
    height: height,
    fill: fill,
    corner: "50%"
  }), /*#__PURE__*/React.createElement(Box, {
    as: "span",
    fontWeight: "bold",
    fontSize: "lg",
    width: "70%",
    height: "96%"
  }, /*#__PURE__*/React.createElement(Rectangle, {
    margin: "8%",
    width: "80%",
    height: "20%",
    fill: fill
  }), /*#__PURE__*/React.createElement(Rectangle, {
    margin: "8%",
    width: "70%",
    height: "10%",
    fill: fill
  }), /*#__PURE__*/React.createElement(Rectangle, {
    margin: "8%",
    width: "70%",
    height: "10%",
    fill: fill
  }))));
}