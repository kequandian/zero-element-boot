import React from 'react';

require("./index.less");

export default function (props) {
  //
  const {
    imgUrl
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "image-animation"
  }, /*#__PURE__*/React.createElement("img", {
    src: imgUrl,
    alt: "Image"
  }));
}