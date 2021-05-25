import React from 'react';
import Container from "../../container/Container";
import Flexbox from "../Flexbox";
export default function Wrap(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Flexbox, {
    align: "start",
    direction: "row"
  }, children)));
}