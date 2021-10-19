import React from 'react';
import { Clear, Butter } from "../../components/presenter/default";
import DefaultHoverIndicator from "../../components/indicator/DefaultHoverIndicator";
import Selector from "../../components/selector/Selector";
export default function TestSelector(props) {
  return /*#__PURE__*/React.createElement(Selector, {
    hoverIndicator: DefaultHoverIndicator
  }, /*#__PURE__*/React.createElement(Clear, null));
}