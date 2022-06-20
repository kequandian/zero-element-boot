function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import AdList from "./index";
import { APIContainer } from "../../components";
import useTokenRequest from "../../components/hooks/useTokenRequest";
import bindFiles from "./gateway.json";
export default function (props) {
  const api = '/api/adList';

  function onItemClickHandle(data) {// console.log('data = ', data)
  }

  const [data] = useTokenRequest({
    api,
    bindFiles
  }); // return (
  //     <APIContainer API={api} extend={false}>
  //         <AdList {...props} />
  //     </APIContainer>
  // )

  return /*#__PURE__*/React.createElement(AdList, _extends({}, props, {
    data: data
  }));
}