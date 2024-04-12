import React from 'react';

/**
 * 
 * @param {size} size 尺寸
 * @param {url} url 图片链接
 * 
 */

export default function Index(props) {
  const {
    size = '50',
    url = ''
  } = props;

  // url='https://inews.gtimg.com/newsapp_bt/0/14982779315/1000'

  const baseStyle = {
    textAlign: 'center',
    backgroundColor: '',
    width: `${size}px`,
    height: `${size}px`,
    margin: '0 0 auto 0',
    padding: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // border: '1px #ff0000 solid',
    backgroundImage: `url(${url})`,
    borderRadius: '50%',
    backgroundSize: '100% 100%'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: baseStyle
  }, url ? /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "transparent",
    className: "bi bi-person-circle",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
  })) : /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "#d8d8d8",
    className: "bi bi-person-circle",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
  })));
}