import React, { useImperativeHandle, forwardRef, useState } from 'react';
import checkOff from "../../../../assets/check_off.svg";
import checkOn from "../../../../assets/check_on.svg";

require("./index.less");
/**
 */


export default /*#__PURE__*/forwardRef(function Index(props, ref) {
  const {
    children,
    indicate
  } = props;
  const styles = {
    backgroundColor: '#f1f1f1',
    borderColor: 'transparent',
    boxShadow: '0 0px 6px rgba(255, 255, 255, 1)'
  };
  useImperativeHandle(ref, () => ({
    getSelectStyles: () => {
      return styles;
    }
  }));
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", null, indicate ? /*#__PURE__*/React.createElement("div", {
      className: "right_icon_on"
    }, /*#__PURE__*/React.createElement("img", {
      src: checkOn
    })) : /*#__PURE__*/React.createElement("div", {
      className: "right_icon_off"
    }, /*#__PURE__*/React.createElement("img", {
      src: checkOff
    })), child);
  });
});