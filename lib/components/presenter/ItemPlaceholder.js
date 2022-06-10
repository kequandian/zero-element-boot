import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Rectangle from "./Rectangle";
import Cart from "../cart/Cart";
/**
 * 
 * @param {color} fill 圆、矩形背景色
 * @param {color} bg 背景色
 * @param {数字} size 圆和矩形的尺寸
 * 
 */

export default function ItemPlaceholder(props) {
  const {
    fill = '#e0e4e4',
    bg = '',
    size = 150
  } = props;
  console.log(size, '===size');
  return /*#__PURE__*/React.createElement(Cart, {
    fill: bg,
    paddin: "0",
    linewidth: "0",
    margin: "0"
  }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Rectangle, {
    margin: `${0.042 * size}px`,
    width: `${0.4 * size}px`,
    height: `${0.4 * size}px`,
    fill: fill,
    corner: "50%"
  }), /*#__PURE__*/React.createElement(Box, {
    width: `${size}px`,
    height: `${0.28 * size}px`
  }, /*#__PURE__*/React.createElement(Rectangle, {
    margin: `${0.05 * size}px`,
    width: `${0.85 * size}px`,
    height: `${0.1 * size}px`,
    fill: fill
  }), /*#__PURE__*/React.createElement(Rectangle, {
    margin: `${0.05 * size}px`,
    width: `${0.4 * size}px`,
    height: `${0.08 * size}px`,
    fill: fill
  }), /*#__PURE__*/React.createElement(Rectangle, {
    margin: `${0.05 * size}px`,
    width: `${0.4 * size}px`,
    height: `${0.08 * size}px`,
    fill: fill
  }))));
}