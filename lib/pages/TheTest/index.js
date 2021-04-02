function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Butter from "../../presenter/default/Butter";
import NamedCart from "../../components/NamedCart";
import NamedGateway from "../../components/NamedGateway";
export default function TestNamedCart(props) {
  const data = {
    color: "#F2D388",
    reg: "RGB(242,211,136)"
  };
  return /*#__PURE__*/React.createElement(NamedCart, {
    xname: "ItemCart"
  }, /*#__PURE__*/React.createElement(NamedGateway, _extends({
    xname: "Binding"
  }, data), /*#__PURE__*/React.createElement(Butter, null)));
}