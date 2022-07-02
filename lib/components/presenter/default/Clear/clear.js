import React from 'react';

require("./index.less");

export default function Clear(props) {
  return /*#__PURE__*/React.createElement("section", {
    className: "color",
    id: "clear"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "name"
  }, "Clear"), /*#__PURE__*/React.createElement("ul", {
    className: "details"
  }, /*#__PURE__*/React.createElement("li", null, "#ffb6c1"), /*#__PURE__*/React.createElement("li", null, "RGB(255,182,193)")));
}