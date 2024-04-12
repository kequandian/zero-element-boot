import React, { useState } from 'react';
require("./index.less");

/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'LabelIndicator',
    props:{
    },
   },
   binding:{
    apiField:'label'
   },
   container:{}
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数, apiField 为api字段
 */

export default function LabelIndicator(props) {
  const {
    children,
    indicatorData = {
      label: ""
    },
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "labelIndicatorContainer"
  }, React.Children.map(children, child => child), /*#__PURE__*/React.createElement("div", {
    className: "labelContent"
  }, indicatorData.label || ''));
}