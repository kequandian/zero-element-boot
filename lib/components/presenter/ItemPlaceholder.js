import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Rectangle from "./Rectangle";
import Cart from "../cart/Cart";
/**
 * 
 * @param {color} fill 圆、矩形背景色
 * @param {color} bg 背景色
 * @param {width/height} size 圆和矩形的尺寸
 * 
 */

export default function ItemPlaceholder(props) {
  const {
    fill = '#e0e4e4',
    bg = '#ffffff',
    size = '90px'
  } = props;
  return /*#__PURE__*/React.createElement(Cart, {
    fill: bg,
    paddin: "0",
    linewidth: "0",
    margin: "0"
  }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Rectangle, {
    margin: "2px",
    width: size,
    height: size,
    fill: fill,
    corner: "50%"
  }), /*#__PURE__*/React.createElement(Box, {
    as: "span",
    fontWeight: "bold",
    fontSize: "lg",
    width: size,
    height: size,
    p: 4
  }, /*#__PURE__*/React.createElement(Rectangle, {
    margin: "7px",
    width: "240%",
    height: "30%",
    fill: fill
  }), /*#__PURE__*/React.createElement(Rectangle, {
    margin: "10px 7px",
    width: "130%",
    height: "15%",
    fill: fill
  }), /*#__PURE__*/React.createElement(Rectangle, {
    margin: "10px 7px",
    width: "130%",
    height: "15%",
    fill: fill
  }))));
}