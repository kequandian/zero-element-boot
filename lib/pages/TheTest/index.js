import React from 'react';
import Butter from "../../presenter/default/Butter";
import Clean from "../../presenter/default/Clean";
import Pink from "../../presenter/default/Pink";
import Flexbox from "../../components/layout/Flexbox";
import Container from "../../components/container/Container";
import PageCart from "../../components/cart/PageCart";
export default function TestCart(props) {
  return /*#__PURE__*/React.createElement(PageCart, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Flexbox, {
    align: "around",
    justify: "center"
  }, /*#__PURE__*/React.createElement(Butter, null), /*#__PURE__*/React.createElement(Clean, null), /*#__PURE__*/React.createElement(Pink, null))));
}