function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import StatisticsContainer from "./index";
import useTokenRequest from "../../components/hooks/useTokenRequest";
import bindFiles from "./gateway.json";
export default function (props) {
  let api = '';

  if (process.env.NODE_ENV === 'development') {
    api = '/x/api/statistics';
  } else {
    api = '/x/api/statistics.json';
  }

  function onItemClickHandle(data) {// console.log('data = ', data)
  }

  const [data] = useTokenRequest({
    api,
    bindFiles
  }); // console.log('data111111111 = ', data)

  return data ? /*#__PURE__*/React.createElement(StatisticsContainer, _extends({}, props, {
    data: data
  })) : /*#__PURE__*/React.createElement("div", null);
}