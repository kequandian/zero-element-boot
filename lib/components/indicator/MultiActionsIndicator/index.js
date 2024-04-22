function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect, useState } from 'react';
import PlacementIndicator from "../PlacementIndicator";
import { HStack, VStack, Box } from '@chakra-ui/react';
import { get as NamedPresenterGet } from "../../config/NamedPresenterConfig";
export default function MultiActionsIndicator(props) {
  const {
    children,
    Actions = [],
    actions = [],
    alignment,
    offset = 5,
    ...rest
  } = props;
  const _presenters = NamedPresenterGet();
  const _actions = actions;
  const allObject = (list, i = -1) => {
    return /*#__PURE__*/React.createElement(HStack, {
      key: i,
      flexFlow: 'wrap',
      spacing: 0
    }, list.map((item, index) => {
      const {
        xname,
        props: itemProps
      } = item;
      const _Indicator = xname ? _presenters[xname] : /*#__PURE__*/React.createElement(React.Fragment, null);
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        style: {
          marginBottom: '8px',
          marginRight: '8px'
        }
      }, /*#__PURE__*/React.createElement(_Indicator, _extends({}, itemProps, rest)));
    }));
  };
  const allArray = list => {
    return /*#__PURE__*/React.createElement(VStack, {
      spacing: 0,
      alignItems: 'start'
    }, list.map((itemData, i) => {
      if (Array.isArray(itemData)) {
        return allObject(itemData, i);
      } else if (typeof itemData === "object") {
        const {
          xname,
          props: itemProps
        } = itemData;
        const _Indicator = xname ? _presenters[xname] : /*#__PURE__*/React.createElement(React.Fragment, null);
        return /*#__PURE__*/React.createElement("div", {
          key: i,
          style: {
            marginBottom: '8px',
            marginRight: '8px'
          }
        }, /*#__PURE__*/React.createElement(_Indicator, _extends({}, itemProps, rest)));
      }
    }));
  };
  const indicatorList = () => {
    if (!_actions || !Array.isArray(_actions) || _actions.length === 0) {
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    }
    return checkData(_actions);
  };
  function checkData(data) {
    let hasArrays = false;
    let hasObjects = false;
    for (let i = 0; i < data.length; i++) {
      if (Array.isArray(data[i])) {
        hasArrays = true;
      } else if (typeof data[i] === "object" && data[i] !== null) {
        hasObjects = true;
      }
    }
    if (hasArrays && hasObjects) {
      return allArray(data);
    } else if (hasArrays) {
      return allArray(data);
    } else if (hasObjects) {
      return allObject(data);
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null);
    }
  }
  return /*#__PURE__*/React.createElement(PlacementIndicator, _extends({
    Indicator: indicatorList,
    alignment: alignment,
    offset: offset
  }, rest), children);
}