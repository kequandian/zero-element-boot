import React from 'react';
export default function FootContent(props) {
  const {
    time,
    adType
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "ExampleTime"
  }, /*#__PURE__*/React.createElement("div", {
    className: "theType"
  }, adType), /*#__PURE__*/React.createElement("div", {
    className: "theTime"
  }, time));
}