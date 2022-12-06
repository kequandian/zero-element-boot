import React from 'react';

require("./index.less");
/**
 * @param {String} titleText 内容
 */


export default function (props) {
  const {
    titleText
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, titleText);
}