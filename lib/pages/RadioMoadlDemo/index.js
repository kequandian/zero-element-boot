import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { ChakraProvider, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Stack, Text, ButtonGroup } from "@chakra-ui/react";
import UserRadioDemo from "../UserRadioDemo/Sandbox";
export default function Index(props) {
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
  }

  function goToCheckboxPage() {
    history.push('/CheckBoxMoadlDemo');
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
  }, "\u5355\u9009\u6846")), onShow ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px',
      marginBottom: '10px'
    }
  }, "\u9009\u4E2D\u5185\u5BB9"), /*#__PURE__*/React.createElement(Stack, {
    spacing: 3
  }, /*#__PURE__*/React.createElement(Text, {
    fontSize: "sm"
  }, showData.name))) : /*#__PURE__*/React.createElement(React.Fragment, null)), /*#__PURE__*/React.createElement(Modal, {
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
}