function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import { AutoLayout } from "../../export";

const promiseAjax = require("../../utils/request");

import layout from "./layout";
import ListItem from "./ListItem";
export default function Index(props) {
  const {
    onItemClickHandle
  } = props;
  const api = '/api/componentList';
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
  }, []); //Cart HoverShadowCart

  const config = {
    items: data.length > 0 ? data : [],
    layout
  };

  const onClick = item => {};

  const onChildItemClick = item => {};

  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '1250px'
    }
  }, /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onClick
  }), /*#__PURE__*/React.createElement(ListItem, {
    onItemClick: onChildItemClick
  })));
}