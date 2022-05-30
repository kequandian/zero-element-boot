import React, { useImperativeHandle, forwardRef, useState } from 'react';
import checkOff from "../../../../assets/check_off.svg";
import checkOn from "../../../../assets/check_on.svg";

require("./index.less");
/**
 */


export default /*#__PURE__*/forwardRef(function Index(props, ref) {
  const {
    children,
    indicate,
    defaultSelectedStyles = {}
  } = props;
  const styles = {
    backgroundColor: '#f1f1f1',
    borderColor: 'transparent',
    boxShadow: '0 0px 6px rgba(255, 255, 255, 1)',
    ...defaultSelectedStyles
  };
  useImperativeHandle(ref, () => ({
    getSelectStyles: () => {
      return styles;
    }
  }));
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: indicate ? 'right_icon_on' : 'right_icon_off'
    }, /*#__PURE__*/React.createElement("img", {
      src: indicate ? checkOn : checkOff
    })), child);
  });
});