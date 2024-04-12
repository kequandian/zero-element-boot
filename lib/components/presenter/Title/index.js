import React from 'react';
require("./index.less");

/**
 * @param {String} content 内容
 */
export default function (props) {
  const {
    content
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, content);
}