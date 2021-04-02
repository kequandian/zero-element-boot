function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AutoComponent } from "../../../../../components";
import ImageAnimation from "../ImageAnimation";
import TextContent from "../TextContent";
import FootContent from "../FootContent";
import layout from "./layout";
export default function ExampleTwo(props) {
  // console.log(props)
  const allComponents = {
    ImageAnimation,
    TextContent,
    FootContent
  };
  const config = {
    layout,
    ...props
  };
  console.log(config);
  console.log(allComponents);
  return /*#__PURE__*/React.createElement("div", {
    className: "BigBox"
  }, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}