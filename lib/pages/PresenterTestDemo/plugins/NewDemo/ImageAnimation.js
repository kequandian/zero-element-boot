import React from 'react';
export default function ImageAnimation(props) {
  // console.log(props)
  const {
    imgUrl
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "ExampleImage"
  }, /*#__PURE__*/React.createElement("img", {
    className: "theImage",
    src: imgUrl
  }));
}