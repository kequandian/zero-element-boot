function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const AutoComponent = require("../../../components/AutoComponent");

const {
  Title,
  Subtitle,
  StatisticsList,
  StatisticalDescription
} = require("../../../presenter/demo");

import ProgressList from "../ProgressList";
import useTokenRequest from "../../../components/hooks/useTokenRequest";
import _layout from "./_layout";
export default function StatisticsBody(props) {
  const allComponents = {
    Title,
    Subtitle,
    StatisticsList,
    StatisticalDescription,
    ProgressList
  }; // const api = '/layout.json';
  // const [ data ] = useTokenRequest({api});

  const config = {
    layout: _layout,
    ...props
  }; //   return (
  //     data && JSON.stringify(data) != '{}' ? (
  //       <AutoComponent {...config} allComponents={allComponents} />
  //     ):<div></div>
  // )

  return /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  }));
}