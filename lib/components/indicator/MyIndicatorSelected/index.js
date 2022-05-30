import React, { useImperativeHandle, forwardRef, useState } from 'react';
import selectedIcon from "../../../assets/selected2-icon.svg";

require("./index.less");
/**
 */


export default /*#__PURE__*/forwardRef(function MyIndicatorSelected(props, ref) {
  const {
    children,
    indicate,
    defaultSelectedStyles = {}
  } = props;
  const styles = {
    backgroundColor: 'transparent',
    borderColor: '#aab1dc',
    boxShadow: '0 0px 6px rgba(170, 177, 220, 1)',
    ...defaultSelectedStyles
  };
  useImperativeHandle(ref, () => ({
    getSelectStyles: () => {
      return styles;
    }
  }));
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, indicate ? /*#__PURE__*/React.createElement("div", {
      className: "upperRightIcon2"
    }, /*#__PURE__*/React.createElement("img", {
      src: selectedIcon
    })) : /*#__PURE__*/React.createElement(React.Fragment, null), child));
  });
});