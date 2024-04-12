function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { Flex, Box, Stack, VStack, Container, Button, Input } from "@chakra-ui/react";
import { AutoLayout } from "../../components";
import Loading from "../../components/loading";
const promiseAjax = require("../../components/utils/request");
import JarItem from "./Sandbox/JarItem";
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
  const [searchLogContent, setSearchLogContent] = useState('');
  const [searchLogCount, setSearchLogCount] = useState('');
  let layoutData = '';
  const layoutJsonPath = '';
  const localLayoutJson = layout;
  let api = '/dev/logs/json';
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
    console.log(item, ' === item');
    let name = item.value;
    if (name.indexOf('@') > -1) {
      const list = name.split('@');
      name = list[0];
    }
    setDetail([]);
    getDetailFetch(name, 1);
  };

  //
  const getDetailFetch = async (name, num) => {
    setSearchLogContent('');
    setSearchLogCount('');
    if (num == 1) {
      setCurrentItemName(name);
    }
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
  // console.log(statenum);
  // var searchData = ''
  // var upDown =''
  //搜索输入框
  const setSearchContent = async e => {
    // searchData = e
    setSearchLogContent(e);
  };

  // var upDown = ''
  const setupDown = N => {
    // upDown = N
    setSearchLogCount(N);
  };

  //搜索按钮--获取返回的数据
  function anniu(body) {
    let url = '/dev/logs/json';
    promiseAjax(url, {
      ...body,
      sign
    }).then(responseData => {
      {
        if (responseData && responseData.code === 200) {
          let respData = responseData.data;
          setDetail(respData);
          setIsShowData(true);
        } else {
          setIsShowList(true);
          setIsShowData(false);
        }
        setIsLoading(false);
      }
    });
  }

  //搜索方法
  function seach() {
    if (!currentItemName) {
      alert('请选择日志文件');
      return;
    }
    if (!searchLogContent) {
      alert('请输入日志内容');
      return;
    }
    const body = {
      pattern: currentItemName,
      filter: searchLogContent,
      n: searchLogCount
    };
    anniu(body);
  }
  //select//获取value值
  // function getvalue () {
  //   var valuenum = document.getElementById('valueid').value;
  //   alert(valuenum)
  // }

  //
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
    setSearchLogContent('');
    setSearchLogCount('');
  }
  return /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(VStack, {
    spacing: "3px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '800px',
      width: '100%',
      height: '20px',
      lineHeight: '60px',
      backgroundColor: '#ffffff',
      padding: '20px 10px 10px 25px'
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
  }, currentItemName) : /*#__PURE__*/React.createElement(React.Fragment, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '800px',
      width: '100%',
      lineHeight: '60px',
      backgroundColor: '#ffffff',
      padding: '20px 10px 10px 25px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      left: '60%',
      width: '200px',
      top: '100px',
      height: '40px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8F93\u5165\u4E0A\u4E0B\u6587\u6570\u91CF",
    value: searchLogCount,
    onChange: N => setupDown(N.target.value),
    width: "150px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '180px',
      top: '54px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8BF7\u8F93\u5165\u60A8\u60F3\u8981\u7684\u65E5\u5FD7\u5185\u5BB9",
    value: searchLogContent,
    onChange: e => setSearchContent(e.target.value),
    width: "300px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '486px',
      top: '52px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    colorScheme: "teal",
    onClick: () => seach()
  }, "\u641C\u7D22"))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '800px',
      marginTop: '15px'
    }
  }, "   ", isShowList ? /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onJarItemClick
  })) : /*#__PURE__*/React.createElement(React.Fragment, null)), isLoading ? /*#__PURE__*/React.createElement(Loading, {
    styles: {
      marginTop: '100px'
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