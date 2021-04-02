function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ImageAnimation from "./presenter/ImageAnimation";
import layout from "./layout";
export default function NewDemoItem(props) {
  const allComponents = {
    ImageAnimation
  };
  const config = {
    layout,
    ...props
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}