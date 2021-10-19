import React from 'react';
import { Butter, Clean, Pink } from "../../components/presenter/default";
import Flexbox from "../../components/layout/Flexbox";
import PageCart from "../../components/cart/PageCart";
export default function TestPageCart(props) {
  return /*#__PURE__*/React.createElement(PageCart, null, /*#__PURE__*/React.createElement(Flexbox, {
    align: "around",
    justify: "center"
  }, /*#__PURE__*/React.createElement(Butter, null), /*#__PURE__*/React.createElement(Clean, null), /*#__PURE__*/React.createElement(Pink, null)));
}