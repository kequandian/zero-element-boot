import React from 'react';

require("./index.less");

export default function (props) {
  const {
    AuthorValue
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "author",
    style: {
      marginLeft: '6px'
    }
  }, AuthorValue);
}