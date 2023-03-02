function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import AutoLayout from "../../../AutoLayout";
import React from 'react';
import layout from "./layout";
/**
 * 头像列表
 */

export default function Index(props) {
  const {
    items,
    dataSource = items,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(AutoLayout, _extends({
    layout: layout,
    items: dataSource
  }, rest));
}