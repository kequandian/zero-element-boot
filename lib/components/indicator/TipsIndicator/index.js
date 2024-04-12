import React, { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow } from '@chakra-ui/react';
require("./index.less");

/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'TipsIndicator',
    props:{
    },
    binding: {
      apiField:"title",
      apiField:"content",
    }
   },
   container:{}
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数, apiField 为api字段
 * 
 */

export default function TipsIndicator(props) {
  const {
    children,
    indicatorData = {
      title: "",
      content: ""
    },
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "tipsIndicatorContainer"
  }, /*#__PURE__*/React.createElement(Popover, {
    trigger: "hover",
    placement: "right"
  }, /*#__PURE__*/React.createElement(PopoverTrigger, null, /*#__PURE__*/React.createElement("div", null, React.Children.map(children, child => child))), /*#__PURE__*/React.createElement(PopoverContent, {
    bg: '#F7F7FA',
    maxWidth: 220
  }, /*#__PURE__*/React.createElement(PopoverArrow, null), /*#__PURE__*/React.createElement(PopoverHeader, {
    fontWeight: 'bold'
  }, indicatorData.title || 'Title'), /*#__PURE__*/React.createElement(PopoverBody, null, indicatorData.content || "Content"))));
}