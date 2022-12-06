function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { ChakraProvider, Flex, Center, Box, Stack, Spacer, VStack, Container, Button, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { AutoLayout } from "../../components";
import Loading from "../../components/loading";

const promiseAjax = require("../../components/utils/request");

import layout from "./layout";
import JsonTree from "../../components/presenter/tree/JsonTree/Sandbox";
export default function Index(props) {
  const {
    data = [],
    method = ''
  } = props;
  const [listData, setListData] = useState(data);
  const [isShowList, setIsShowList] = useState(true);
  const [isShowData, setIsShowData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showApiDetail, setApi] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isShowBackBtn, setIsShowBackBtn] = useState(false);
  const [currentItemApi, setCurrentItemApi] = useState('');
  const [currentItemOldApi, setCurrentItemOldApi] = useState('');
  const [isShowCurrentItemApiStatus, setIsShowCurrentItemApiStatus] = useState(false);
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
    items: listData.length > 0 ? listData : [],
    layout: layoutData
  };

  const onApiItemClick = item => {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    // console.log('item == ', item)
    const apiStr = `/openapi/crud/lc_low_auto_apis/lowAutoApis/lowAutoApises/${item.id}`;
    setCurrentItemApi(item.api);
    setCurrentItemOldApi(apiStr);
    setApi(apiStr);
    setIsShowData(true);
    setIsShowList(false);
    setIsShowBackBtn(true);
  }; //返回首页


  function goHome() {
    setIsShowList(true);
    setIsShowData(false);
    setSearchValue('');
    searchApiList('');
    setIsShowBackBtn(false);
  }

  function goBack() {
    if (isShowCurrentItemApiStatus) {
      setApi(currentItemOldApi);
      setIsShowList(false);
      setIsShowData(true);
      setIsShowCurrentItemApiStatus(false);
    } else {
      setIsShowList(true);
      setIsShowData(false);
    }
  } //提交搜索栏信息


  const handleSearchClick = e => {
    searchApiList(searchValue);
  }; //保存搜索栏信息


  const handleSearchValue = e => {
    setSearchValue(e.target.value);
  }; //搜索


  function searchApiList(searchValue) {
    //通过apiName获取API路径
    const api = `/openapi/crud/lc_low_auto_apis/lowAutoApis/lowAutoApises`;
    const queryData = {
      pageNum: 1,
      pageSize: 1000,
      apiMethod: method,
      search: searchValue
    };
    promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        setIsShowBackBtn(resp.data.records.length > 0 && true);
        setListData([{
          items: resp.data.records
        }]);
      } else {
        console.error("获取 api 列表失败");
      }
    }).finally(_ => {});
  } //查看API


  function getApiDetail() {
    setApi(currentItemApi);
    setIsShowCurrentItemApiStatus(true);
    setIsShowData(true);
    setIsShowList(false);
  }

  return /*#__PURE__*/React.createElement(ChakraProvider, null, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(VStack, {
    spacing: "3px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '500px',
      width: '100%',
      height: '60px',
      lineHeight: '60px',
      backgroundColor: '#ffffff',
      padding: '20px 10px 10px 25px'
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    direction: ['row'],
    w: "500px",
    h: "40px",
    spacing: "10px",
    align: "center"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      widht: '100px',
      height: '40px'
    }
  }, /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement(Button, {
    w: "100px",
    h: "40px",
    colorScheme: "blue",
    onClick: () => goHome()
  }, "Home"))), isShowList && /*#__PURE__*/React.createElement(InputGroup, {
    size: "md"
  }, /*#__PURE__*/React.createElement(Input, {
    pr: "4.5rem",
    type: "text",
    value: searchValue,
    placeholder: "Please Enter",
    onChange: handleSearchValue
  }), /*#__PURE__*/React.createElement(InputRightElement, {
    width: "4.5rem"
  }, /*#__PURE__*/React.createElement(Button, {
    h: "1.75rem",
    size: "sm",
    onClick: handleSearchClick
  }, "Search"))), !isShowList && isShowBackBtn && listData.length > 0 && /*#__PURE__*/React.createElement(Button, {
    w: "100px",
    h: "40px",
    colorScheme: "blue",
    onClick: () => goBack()
  }, "Back"), isShowData && showApiDetail && /*#__PURE__*/React.createElement(Button, {
    w: "100px",
    h: "40px",
    colorScheme: "blue",
    onClick: () => getApiDetail()
  }, "\u67E5\u770BAPI"))), isShowList ? /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onApiItemClick
  })) : /*#__PURE__*/React.createElement(React.Fragment, null), isLoading ? /*#__PURE__*/React.createElement(Loading, {
    styles: {
      marginTop: '60px'
    }
  }) : isShowData && showApiDetail ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      paddingLeft: '25px'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    flex: "1"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#ffffff',
      width: '100%',
      paddingTop: '15px'
    }
  }, /*#__PURE__*/React.createElement(JsonTree, {
    api: showApiDetail
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null)))));
}