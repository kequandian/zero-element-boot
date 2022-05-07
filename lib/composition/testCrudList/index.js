function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { AutoLayout } from "../../components";

const promiseAjax = require("../../components/utils/request");

import layout from "./layout";

require("./index.less");

export default function Index(props) {
  const {} = props;
  const [listData, setListData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [switchStatus, setSwitchStatus] = useState(false);
  let api = '/api/c/navigation/navigations';
  useEffect(() => {
    console.log('首次加载');
    const queryData = {};
    fetchData(api, queryData);
  }, []);
  useEffect(() => {}, []);
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
    items: listData,
    layout: layoutData
  }; //获取列表信息

  const fetchData = (api, queryData) => {
    setLoading(true);
    return promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        const list = resp.data.records;
        setListData(list);
        setLoading(false);
      } else {
        console.error('获取列表数据失败 ==', resp);
      }
    });
  };

  const onUserItemClick = item => {
    const id = item.id;
    console.log('id = ', id);
    alert(`选择的用户id为: ${id}`);
  }; //回调函数


  const callback = value => {
    console.log('item1111111 = ', value);

    if (value) {
      fetchData(api, {});
    }
  };

  const handleChange = () => {
    const status = !switchStatus;
    setSwitchStatus(status);
  };

  return /*#__PURE__*/React.createElement(ChakraProvider, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '600px'
    }
  }, /*#__PURE__*/React.createElement(VStack, {
    align: "stretch",
    spacing: "-2"
  }, /*#__PURE__*/React.createElement(Box, {
    style: {
      margin: '10px 10px 30px 10px',
      paddingLeft: '8px'
    }
  }, /*#__PURE__*/React.createElement(FormControl, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(FormLabel, {
    htmlFor: "email-alerts",
    mb: "0"
  }, "\u7F16\u8F91\u5F00\u5173\uFF1A"), /*#__PURE__*/React.createElement(Switch, {
    isFocusable: true,
    size: "lg",
    onChange: () => handleChange(),
    isChecked: switchStatus
  }))), isLoading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onUserItemClick,
    cb: callback,
    isSwtich: switchStatus
  }))))));
}