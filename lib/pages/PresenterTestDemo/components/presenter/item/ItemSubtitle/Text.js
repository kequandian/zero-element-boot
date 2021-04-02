import React from 'react';

require("./index.less");

export default function Text({
  content
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "Text_text"
  }, content);
}