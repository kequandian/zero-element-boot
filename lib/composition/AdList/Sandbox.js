function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import AdList from "./index";

const promiseAjax = require("../../utils/request");

export default function (props) {
  const api = '/api/adList';
  const [data, setData] = useState([]);

  function handleQuery(API, queryData) {
    return promiseAjax(API, queryData).then(response => {
      if (response && response.code === 200) {
        setData(response.data);
      }
    });
  }

  useEffect(_ => {
    handleQuery(api);
  }, []);
  return /*#__PURE__*/React.createElement(AdList, _extends({
    data: data
  }, props));
}