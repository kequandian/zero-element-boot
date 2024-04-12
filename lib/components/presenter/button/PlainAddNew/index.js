import React from 'react';
require("./index.less");

/**
 * 
 * 
 */

export default function PlainAddNew(props) {
  const {
    onAddNew
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "plainAddNewContainer",
    onClick: onAddNew
  }, /*#__PURE__*/React.createElement("div", {
    className: "plainAddNewBtn"
  }));
}