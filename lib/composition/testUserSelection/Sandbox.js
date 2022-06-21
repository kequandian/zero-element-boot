function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import TestUserSelection from "./index";
import useTokenRequest from "../../components/hooks/useTokenRequest";
import bindFiles from "./gateway.json";
export default function (props) {
  const {
    newUser
  } = props;
  let api = '';

  if (process.env.NODE_ENV === 'development') {
    api = '/x/api/users';
  } else {
    api = '/x/api/users.json';
  }

  const [data] = useTokenRequest({
    api
  }); // console.log('data111111111 = ', data)

  return data ? /*#__PURE__*/React.createElement(TestUserSelection, _extends({}, props, {
    data: data,
    newUser: newUser
  })) : /*#__PURE__*/React.createElement("div", null);
}