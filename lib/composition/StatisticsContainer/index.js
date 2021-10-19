function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AutoLayout } from "../../components";
import layout from "./layout";
import StatisticsBody from "./StatisticsBody";
export default function Index(props) {
  const {
    data = []
  } = props;
  let layoutData = '';
  const layoutJsonPath = '';
  const localLayoutJson = layout;

  if (layoutJsonPath) {
    layoutData = {
      path: layoutJsonPath
    };
  } else {
    layoutData = localLayoutJson;
  }

  const config = {
    items: data.length > 0 ? data : [],
    layout: layoutData
  };

  const onAdItemClick = value => {
    console.log("value = ", value); // onItemClickHandle();
  };

  return /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: null
  }), /*#__PURE__*/React.createElement(StatisticsBody, null));
}