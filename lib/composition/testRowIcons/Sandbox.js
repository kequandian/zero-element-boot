function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import TestRowIcons from "./index";
import useTokenRequest from "../../components/hooks/useTokenRequest";
export default function (props) {
  const api = '/api/rowIconData';

  function onItemClickHandle(data) {// console.log('data = ', data)
  }

  const [data] = useTokenRequest({
    api
  });
  return /*#__PURE__*/React.createElement(TestRowIcons, _extends({}, props, {
    data: data
  }));
}