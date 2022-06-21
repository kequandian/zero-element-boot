function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import StandaloneContainer from "./index";
import useTokenRequest from "../../components/hooks/useTokenRequest";
export default function (props) {
  // let api = '/dev/dependency/decompile/json';
  let api = '/dev/dependency/json';

  if (process.env.NODE_ENV === 'development') {
    api = `http://192.168.3.12:8000${api}`;
  }

  const [data] = useTokenRequest({
    api
  });
  const newData = [];
  data.map((item, index) => {
    // if(item.indexOf('.jar') > -1){
    const newItem = {};
    newItem.id = index + 1;
    newItem.value = item;
    newData.push(newItem); // }
  });
  const dataX = [];
  dataX.push({
    items: newData
  });
  return data.length > 0 ? /*#__PURE__*/React.createElement(StandaloneContainer, _extends({}, props, {
    data: dataX
  })) : /*#__PURE__*/React.createElement(React.Fragment, null);
}