import React from 'react';
import NamedCart from "../../components/NamedCart";
export default function NamedCartTest(props) {
  const config = {
    data: {
      name: 'Bob',
      age: 20
    },
    cart: {
      name: 'ItemCart',
      props: {
        padding: '20px'
      }
    }
  };
  return /*#__PURE__*/React.createElement(NamedCart, config.cart, /*#__PURE__*/React.createElement("div", null, "test NamedCart ..."));
}