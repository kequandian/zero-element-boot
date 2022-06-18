function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Flexbox from "../Flexbox";
import Container from "../../container/Container";
export default function Round(props) {
  /**
   * 
   * @param {对齐方式: [start, center, end, around, between, start-with-last-end, align-content-center] } align
   * @param {子项对齐方式: start, center, end, [full, half, quad]: for item width } justify
   *
   */
  const {
    children,
    justify = 'end',
    align = 'start',
    ...data
  } = props;
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Flexbox, _extends({
    justify: justify,
    align: align,
    direction: "column"
  }, data), children));
}