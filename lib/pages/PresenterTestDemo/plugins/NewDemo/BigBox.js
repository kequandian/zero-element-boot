import React from 'react';
import ImageAnimation from "./ImageAnimation";
import TextContent from "./TextContent";
import FootContent from "./FootContent";

require("./Example_two.less");

export default function BigBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "BigBox"
  }, /*#__PURE__*/React.createElement(ImageAnimation, {
    imgUrl: props.data.imgUrl
  }), /*#__PURE__*/React.createElement(TextContent, {
    text: props.data
  }), /*#__PURE__*/React.createElement(FootContent, {
    time: props.data
  }));
}