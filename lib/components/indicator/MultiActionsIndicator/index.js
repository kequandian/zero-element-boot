function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useState } from 'react';
import PlacementIndicator from "../PlacementIndicator";
import { HStack } from '@chakra-ui/react';
import { get as NamedPresenterGet } from "../../config/NamedPresenterConfig";
export default function MultiActionsIndicator(props) {
  const {
    children,
    Actions = [],
    actions = [],
    alignment,
    offset = 5,
    indicatorData,
    onActionCompleted,
    ...rest
  } = props;
  const _presenters = NamedPresenterGet();
  const _actions = actions;
  function indicatorList() {
    if (!_actions || !Array.isArray(_actions) || _actions.length === 0) {
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    }
    return /*#__PURE__*/React.createElement(HStack, {
      spacing: 3
    }, _actions.map((item, index) => {
      const {
        xname,
        props: itemProps,
        ...rest
      } = item;
      const _Indicator = xname ? _presenters[xname] : /*#__PURE__*/React.createElement(React.Fragment, null);
      return /*#__PURE__*/React.createElement(_Indicator, _extends({
        key: index
      }, itemProps, {
        onActionCompleted: onActionCompleted,
        indicatorData: indicatorData
      }, rest));
    }));
  }
  return /*#__PURE__*/React.createElement(PlacementIndicator, _extends({
    Indicator: indicatorList,
    alignment: alignment,
    offset: offset
  }, rest), children);
}