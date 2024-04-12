import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Rectangle from "../shape/Rectangle";
import Cart from "../../cart/Cart";

/**
 * 
 * @param {color} fill 圆、矩形背景色
 * @param {color} bg 背景色
 * @param {数字} size 圆和矩形的尺寸
 * @param {链接} url 图像链接
 * 
 * 
 */

export default function ItemPlaceholder(props) {
  const {
    fill = '#f1f4f4',
    bg = '',
    size = 150,
    url
  } = props;

  // url='https://inews.gtimg.com/newsapp_bt/0/14982779315/1000'
  // console.log(size, '===size');

  return /*#__PURE__*/React.createElement(Cart, {
    fill: bg,
    paddin: "0",
    linewidth: "0",
    margin: "0"
  }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `${0.042 * size}px`,
      width: `${0.4 * size}px`,
      height: `${0.4 * size}px`,
      backgroundColor: `${fill}`,
      backgroundImage: `url(${url})`,
      borderRadius: '50%',
      backgroundSize: '100% 100%'
    }
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