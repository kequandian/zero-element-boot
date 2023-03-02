import React from 'react';
import checkOff from "../../../assets/check_off.svg";
import checkOn from "../../../assets/pinkSelected.svg";

require("./index.less");
/**
 */


export default function Index(props) {
  const {
    children,
    defaultStyles = {},
    state = 'unselect'
  } = props;
  const color = state == "selected" ? "#d84465" : "#333333";
  const borderColor = state == "selected" ? "#d84465" : "transparent";
  const styles = {
    position: 'relative',
    // margin: '1px 6px 1px 6px',
    padding: '5px',
    fontWeight: "bold",
    color: `${color}`,
    backgroundColor: 'transparent',
    // borderRadius: '8px',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: `${borderColor}`,
    boxShadow: '0 0px 6px rgba(255, 255, 255, 1)',
    ...defaultStyles
  };
  console.log('state =', state);
  return /*#__PURE__*/React.createElement("div", {
    style: styles
  }, /*#__PURE__*/React.createElement("div", {
    className: 'right_icon_off'
  }, state == "selected" ? /*#__PURE__*/React.createElement("img", {
    src: checkOn
  }) : /*#__PURE__*/React.createElement(React.Fragment, null)), React.Children.map(children, child => {
    return child;
  }));
}