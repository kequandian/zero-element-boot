function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../components/AutoComponent");

const {
  ImageAnimation
} = require("../../presenter/demo");

const {
  TextContent,
  FootContent
} = require("./components");

import layout from "./_layout";
export default function AdItem(props) {
  const {
    onAdItemClick
  } = props;
  const allComponents = {
    ImageAnimation,
    TextContent,
    FootContent
  };
  const config = {
    layout,
    ...props
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents,
    onItemClick: onAdItemClick
  })));
}