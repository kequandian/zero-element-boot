function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Flexbox from "../Flexbox";
import Container from "../../container/Container";
/**
 * 
 * @param spacing 间隔
 * 
 */

export default function VStack(props) {
  const {
    children,
    spacing,
    ...data
  } = props;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Flexbox, _extends({
    direction: "column",
    spacing: spacing
  }, data), children));
}