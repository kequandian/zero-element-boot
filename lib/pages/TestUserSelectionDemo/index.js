import React from 'react';
import TestUserSelection from "./TestUserSelection";
import { OffsetCart } from "../../components/cart";
export default function index(props) {
  const onItemClickHandle = () => {
    console.log('event to dismiss the component');
  };

  return /*#__PURE__*/React.createElement(OffsetCart, {
    margin: "40px"
  }, /*#__PURE__*/React.createElement(TestUserSelection, {
    onItemClickHandle: onItemClickHandle
  }));
}