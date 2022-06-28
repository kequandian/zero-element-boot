import React from 'react';

require("./index.less");

export default function (props) {
  const {
    TextValue
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "description",
    style: {
      marginLeft: '6px'
    }
  }, TextValue);
}