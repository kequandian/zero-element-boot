import React from 'react';
import Butter from "../../presenter/default/Butter";
import NamedCart from "../../components/NamedCart";
import Binding from "../../components/gateway/Binding";
export default function TestNamedCart(props) {
  const data = {
    color: "#F2D388",
    reg: "RGB(242,211,136)"
  };
  return /*#__PURE__*/React.createElement(NamedCart, {
    xname: "ItemCart"
  }, /*#__PURE__*/React.createElement(Binding, data, /*#__PURE__*/React.createElement(Butter, null)));
}