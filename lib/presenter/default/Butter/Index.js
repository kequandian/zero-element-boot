import React from 'react';

require("./index.less");

export default function Butter(props) {
  return /*#__PURE__*/React.createElement("section", {
    className: "color",
    id: "butter"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "name"
  }, "Butter"), /*#__PURE__*/React.createElement("ul", {
    className: "details"
  }, /*#__PURE__*/React.createElement("li", null, props.color), /*#__PURE__*/React.createElement("li", null, props.reg)));
}