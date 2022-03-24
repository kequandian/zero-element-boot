import React, { useState, useEffect } from 'react';
import { history, connect } from 'umi';
import qs from 'qs';
import { ChakraProvider, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Stack, Text, ButtonGroup } from "@chakra-ui/react";
import UserRadioDemo from "../UserRadioDemo/Sandbox";

function Index(props) {
  const {
    radioDataModel,
    dispatch,
    location
  } = props; // const { list=[] } = qs.parse(location.search.replace('?', ''));
  // const { list } = radioDataModel;

  const {
    list = []
  } = location.query;
  console.log('RadioMoadlDemo location = ', location);
  let selectData = '';
  const [isOpen, setIsOpen] = useState(false);
  const [showData, setShowData] = useState([]);
  const [onShow, setOnShow] = useState(false);

  function onOpen() {
    setIsOpen(true);
    setOnShow(false);
  }

  function onClose() {
    setIsOpen(false);
    setOnShow(false);
    selectData = [];
    setShowData([]);
  }

  function onOk() {
    setIsOpen(false);
    setOnShow(true);

    if (selectData && JSON.stringify(selectData) != '{}') {
      setShowData(selectData);
    }
  }

  function onItemClickHandle(data) {
    console.log('data111111 = ', data);
    selectData = data;
  } //跳转页面


  function goToCheckboxPage() {
    history.push({
      pathname: '/CheckboxPageDemo',
      query: {}
    });
  } //修改modal 数据


  function editValew() {
    dispatch({
      type: "radioDataModel/changeData",
      payload: {
        title: "修改123456"
      }
    });
  }

  return /*#__PURE__*/React.createElement(ChakraProvider, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '200px',
      minHeight: '100px',
      background: '#ffffff',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: "6"
  }, /*#__PURE__*/React.createElement(Button, {
    colorScheme: "teal",
    onClick: onOpen
  }, "\u5355\u9009\u6846"), /*#__PURE__*/React.createElement(Button, {
    colorScheme: "teal",
    onClick: goToCheckboxPage
  }, "\u8DF3\u8F6C\u591A\u9009\u9875\u9762")), onShow ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      marginBottom: '10px'
    }
  }, "\u9009\u4E2D\u5185\u5BB9"), /*#__PURE__*/React.createElement(Stack, {
    spacing: 3
  }, /*#__PURE__*/React.createElement(Text, {
    fontSize: "sm"
  }, showData.name))) : /*#__PURE__*/React.createElement(React.Fragment, null), list && list.length > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      marginBottom: '10px'
    }
  }, "\u591A\u9009\u6846\u9009\u4E2D\u5185\u5BB9"), /*#__PURE__*/React.createElement(Stack, {
    spacing: 3
  }, list && list.length > 0 && list.map((item, index) => {
    return /*#__PURE__*/React.createElement(Text, {
      fontSize: "sm",
      key: index
    }, item.name);
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null)), /*#__PURE__*/React.createElement(Modal, {
    blockScrollOnMount: false,
    isOpen: isOpen,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, "\u5355\u9009\u6846"), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement(UserRadioDemo, {
    onItemClick: data => onItemClickHandle(data)
  })), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "\u5173\u95ED"), /*#__PURE__*/React.createElement(Button, {
    colorScheme: "blue",
    mr: 3,
    onClick: onOk
  }, " \u786E\u5B9A ")))));
} // 这里的 pageModel 是对应 model 的 namespace


const mapStateToProps = ({
  radioDataModel
}) => {
  return {
    radioDataModel
  };
};

export default connect(mapStateToProps)(Index);