import React from 'react';
export default function TheText(props) {
  // console.log(props)
  const {
    theText
  } = props; // console.log(theText)

  return /*#__PURE__*/React.createElement("div", {
    className: "ExampleText"
  }, theText);
}