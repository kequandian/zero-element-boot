import React from 'react';
import Container from "../../container/Container";
import Flexbox from "../Flexbox";
/**
 * @param {间隔} spacing
 */

export default function Wrap(props) {
  const {
    children,
    spacing = 8
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Flexbox, {
    align: "start",
    direction: "row",
    flexFlow: "no-wrap",
    spacing: spacing
  }, children)));
}