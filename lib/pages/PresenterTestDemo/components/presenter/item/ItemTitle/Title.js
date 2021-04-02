import React from 'react';

require("./index.less");

export default function Title({
  content
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "Title_text"
  }, content);
}