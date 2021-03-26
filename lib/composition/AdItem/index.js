function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../components/AutoComponent");

const {
  ImageAnimation
} = require("../../presenter/demo");

const {
  TextContent,
  FootContent
} = require("./components");

import layout from "./layout";
export default function AdItem(props) {
  const allComponents = {
    ImageAnimation,
    TextContent,
    FootContent
  };
  const config = {
    layout,
    ...props
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}