import React from 'react';
require("./index.less");

/**
 * 
 * @param {color} color 
 * @returns 
 */
export default function Clear({
  color = '#FFB6C1'
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "color",
    id: "clear"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "name"
  }, "Clear"), /*#__PURE__*/React.createElement("ul", {
    className: "details"
  }, /*#__PURE__*/React.createElement("li", null, color), /*#__PURE__*/React.createElement("li", null, "RGB(255,182,193)")));
}