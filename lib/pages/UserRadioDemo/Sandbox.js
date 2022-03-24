function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import UserRadioContainer from "./index";
import useTokenRequest from "../../components/hooks/useTokenRequest";
import bindFiles from "./gateway.json";
export default function (props) {
  const api = '/api/userData';
  const [data] = useTokenRequest({
    api,
    bindFiles
  });

  if (data) {
    data.map(item => {
      item.checked = false;
      return item;
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement(UserRadioContainer, _extends({}, props, {
    data: data
  }))));
}