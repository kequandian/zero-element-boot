import React, { useState, useEffect } from 'react';
import { TabContainer } from "../../components";
import layout from "./layout";
import { AutoLayout } from "../../components";
export default function (props) {
  const {
    items
  } = props;
  const config = {
    items: items,
    layout: layout
  };
  return items.length > 0 ? /*#__PURE__*/React.createElement(TabContainer, null, /*#__PURE__*/React.createElement(AutoLayout, config)) : /*#__PURE__*/React.createElement(React.Fragment, null);
}