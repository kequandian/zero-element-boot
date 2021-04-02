import React from 'react';
import Title from "./Title";
import TheText from "./TheText";
export default function TextContent(props) {
  // console.log(props)
  return /*#__PURE__*/React.createElement("div", {
    className: "TextContent"
  }, /*#__PURE__*/React.createElement(Title, {
    title: props.title
  }), /*#__PURE__*/React.createElement(TheText, {
    theText: props.theText
  }));
}