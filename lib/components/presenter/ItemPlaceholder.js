import React from 'react';
import { Box, Tabs, Center, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Butter, Clean, Pink } from 'zero-element-boot/lib/components/presenter';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import PageCart from 'zero-element-boot/lib/components/cart/PageCart';
import Circle from 'zero-element-boot/lib/components/cart/Circle'; // import Cart from 'zero-element-boot/lib/components/cart/Cart';

import Rectangle from 'zero-element-boot/lib/components/presenter/Rectangle';
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
    fill = '#e0e4e4',
    bg = ''
  } = props;
  console.log('w,h,b ==', width, height, fill);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Center, {
    w: "100%"
  }, /*#__PURE__*/React.createElement(Center, {
    w: "350px",
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
    margin: "20px",
    width: "192px",
    height: "20%",
    fill: fill
  }), /*#__PURE__*/React.createElement(Rectangle, {
    margin: "20px",
    width: "96px",
    height: "10%",
    fill: fill
  }), /*#__PURE__*/React.createElement(Rectangle, {
    margin: "20px",
    width: "96px",
    height: "10%",
    fill: fill
  })))));
}