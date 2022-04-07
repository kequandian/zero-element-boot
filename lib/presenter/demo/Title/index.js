import React from 'react';

require("./index.less");
/**
 * @param {String} TitleText 内容
 */


export default function (props) {
  const {
    titleText
  } = props;
  console.log('titleText == ', titleText);
  return /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, titleText);
}