import React, { useState, useEffect } from 'react';

const AutoX = require("../../AutoX");

const presenter = require("../../components/presenter");
/**
 * 样式参考
 * https://codepen.io/dianachoi/pen/NaqebB 
 */


export default function PresenterDemo(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AutoX, {
    allComponents: presenter
  }));
}