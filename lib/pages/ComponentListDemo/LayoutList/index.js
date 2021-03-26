function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AutoLayout } from "../../../export";
import layout from "./layout";
import ListItem from "./ListItem";

require("./index.less");

export default function Index(props) {
  const {
    componentName,
    records
  } = props; //Cart HoverShadowCart

  const config = {
    items: records.length > 0 ? records : [],
    layout
  };

  const onClick = item => {};

  const onChildItemClick = item => {
    console.log(' III onChildItemClick name = ', item.name);
    console.log(' III onChildItemClick pathUrl = ', item.pathUrl);
    console.log(' III onChildItemClick imageUrl = ', item.imageUrl);
  };

  function onChange(componentName) {
    console.log("componentName = ", componentName);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, componentName), /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onClick
  }), /*#__PURE__*/React.createElement(ListItem, {
    onItemClick: onChildItemClick
  })), /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bt",
    onClick: () => onChange(componentName)
  }, "\u5207\u6362")));
}