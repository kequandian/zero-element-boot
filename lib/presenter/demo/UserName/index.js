import React from 'react';

require("./index.less");
/**
 * @param {String} body 内容
 */


export default function (props) {
  const {
    body
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "user_name"
  }, body);
}