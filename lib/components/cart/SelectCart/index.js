import React, { useImperativeHandle, forwardRef, useState } from 'react';

require("./index.less");

export default /*#__PURE__*/forwardRef(function SelectCart(props, ref) {
  const {
    children
  } = props;
  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `c-SelectCart`;
    }
  }));
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: "c-selectCart-item"
    }, child);
  });
});