function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { Flex, Box, Stack, VStack, Container, Button } from "@chakra-ui/react";
import { AutoLayout } from "../../components";
import Loading from "../../components/loading";
const promiseAjax = require("../../components/utils/request");
import JarItem from "./JarItem";
import layout from "./layout";
export default function Index(props) {
  const {
    data = [],
    sign = ''
  } = props;
  const [isShowList, setIsShowList] = useState(true);
  const [isShowData, setIsShowData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetail, setDetail] = useState('');
  const [currentItemName, setCurrentItemName] = useState('');
  let layoutData = '';
  const layoutJsonPath = '';
  const localLayoutJson = layout;
  let api = '/dev/dependency/json';
  if (layoutJsonPath) {
    layoutData = {
      path: layoutJsonPath
    };
  } else {
    layoutData = localLayoutJson;
  }
  const config = {
    items: data.length > 0 ? data : [],
    layout: layoutData
  };
  const onJarItemClick = item => {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    let name = item.value;
    // if(name.indexOf('/') > -1){
    //     const list = name.split('/');
    //     name = list[list.length-1]
    // }
    if (name.indexOf('@') > -1) {
      const list = name.split('@');
      name = list[0];
    }
    console.log('item == ', item);
    setDetail([]);
    getDetailFetch(name, 1);
  };

  //
  const getDetailFetch = async (name, num) => {
    if (num == 1) {
      setCurrentItemName(name);
    }
    // const api = `http://localhost:8080/api/dev/dependency/decompile`;
    setIsShowList(false);
    setIsLoading(true);
    promiseAjax(api, {
      pattern: name,
      sign
    }, {}).then(responseData => {
      if (responseData && responseData.code === 200) {
        let respData = responseData.data;
        setDetail(respData);
        setIsShowData(true);
      } else {
        setIsShowList(true);
        setIsShowData(false);
      }
      setIsLoading(false);
    });
  };

  //处理返回内容
  function handleContent(data) {
    if (typeof data === 'string') {
      return data;
    }
    if (data instanceof Array && data.length > 0) {
      return /*#__PURE__*/React.createElement(Stack, {
        spacing: "3px"
      }, data.map((item, index) => {
        if (item.indexOf("/*") > -1 || item.indexOf("*") > -1) {
          return /*#__PURE__*/React.createElement("div", {
            style: {
              whiteSpace: 'pre-wrap'
            },
            key: `${index}_item`
          }, item);
        } else {
          // return  <Container maxW='container.xl' key={index}>{item}</Container>
          if (item.indexOf("BOOT-INF") > -1) {
            return /*#__PURE__*/React.createElement("div", {
              key: `${index}_item`,
              onClick: () => getDetailFetch(item, 2)
            }, /*#__PURE__*/React.createElement(JarItem, {
              value: item
            }));
          } else {
            return /*#__PURE__*/React.createElement(Container, {
              maxW: "container.xl",
              key: `${index}_item`
            }, item);
          }
        }
      }));
    } else {
      return '';
    }
  }
  function goBack() {
    setIsShowList(true);
    setIsShowData(false);
    setCurrentItemName('');
  }
  return /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(VStack, {
    spacing: "3px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '500px',
      width: '100%',
      height: '60px',
      lineHeight: '60px',
      backgroundColor: '#ffffff',
      padding: '20px 10px 10px 25px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    direction: ['column', 'row'],
    w: "100%",
    spacing: "10px"
  }, /*#__PURE__*/React.createElement(Button, {
    h: "35px",
    colorScheme: "blue",
    onClick: () => goBack()
  }, "Home"), currentItemName ? /*#__PURE__*/React.createElement(Button, {
    h: "35px",
    colorScheme: "blue",
    onClick: () => getDetailFetch(currentItemName, 1)
  }, currentItemName) : /*#__PURE__*/React.createElement(React.Fragment, null))), isShowList ? /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onJarItemClick
  })) : /*#__PURE__*/React.createElement(React.Fragment, null), isLoading ? /*#__PURE__*/React.createElement(Loading, {
    styles: {
      marginTop: '60px'
    }
  }) : isShowData && showDetail ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      paddingLeft: '25px'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    flex: "1"
  }, showDetail && showDetail.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#ffffff',
      width: '100%',
      paddingTop: '10px'
    }
  }, handleContent(showDetail)) : null)) : /*#__PURE__*/React.createElement(React.Fragment, null))));
}