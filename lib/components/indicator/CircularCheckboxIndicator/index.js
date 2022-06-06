import React from 'react';
import checkOff from "../../../assets/check_off.svg";

require("./index.less");
/**
 * CircularCheckboxIndicator 右侧圆形Checkbox的选择框
 * @param {*} props 
 * @returns 
 */


export default function CircularCheckboxIndicator(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: 'right_icon_off'
  }, /*#__PURE__*/React.createElement("img", {
    src: checkOff
  })), React.Children.map(children, child => {
    return child;
  }));
}