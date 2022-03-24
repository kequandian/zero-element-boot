import React from 'react';

require("./index.less");

export default function ImageAnimation({
  url
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "HeadPortrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: url
  }));
}