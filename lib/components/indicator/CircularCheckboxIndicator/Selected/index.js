import React from 'react';
import checkOn from "../../../../assets/check_on.svg";

require("../index.less");

export default function Index(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: 'right_icon_on'
  }, /*#__PURE__*/React.createElement("img", {
    src: checkOn
  })), React.Children.map(children, child => child));
}