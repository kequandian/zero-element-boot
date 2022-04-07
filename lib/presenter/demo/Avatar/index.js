import React from 'react';

require("./index.less");
/**
 * @param {String} url image src url
 */


export default function (props) {
  const {
    url
  } = props;
  console.log('url == ', url);
  return url ? /*#__PURE__*/React.createElement("img", {
    src: url,
    className: "avatar"
  }) : /*#__PURE__*/React.createElement("img", {
    src: "",
    className: `avatar default`
  });
}