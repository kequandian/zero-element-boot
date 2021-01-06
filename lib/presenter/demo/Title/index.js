import React from 'react';

require("./index.less");

export default function (props) {
  const {
    TitleText
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, TitleText);
}