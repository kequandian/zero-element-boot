import React, { useState, useEffect } from 'react'; // const AutoX = require('@/AutoX');

const AutoComponent = require("../../core/AutoComponent");

const presenter = require("../../components/presenter/default");
/**
 * 样式参考
 * https://codepen.io/dianachoi/pen/NaqebB 
 */


export default function PublicLayoutDemo(props) {
  const config = {
    cfgLayout: {
      path: 'PublicLayoutDemo'
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AutoComponent, {
    config: config,
    allComponents: presenter
  }));
}