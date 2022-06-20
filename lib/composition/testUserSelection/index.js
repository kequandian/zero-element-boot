function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import { ChakraProvider, Flex, Box, VStack, Spacer, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, // 文本框
Stack, // 布局组件 设置子元素坚决
FormControl, // 未表单元素添加动态效果 如校验 禁用等
FormLabel, // label
FormErrorMessage } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { AutoLayout } from "../../components";
import layout from "./layout";
import UserItem from "./UserItem";
export default function Index(props) {
  const {
    data = [],
    newUser
  } = props;
  const [listData, setListData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();
  useEffect(() => {
    if (data && data.length > 0) {
      if (newUser) {
        const nData = data;
        nData.push(JSON.parse(newUser));
        setListData(nData);
      } else {
        setListData(data);
      }
    }
  }, [data, newUser]);
  const initialRef = React.useRef();
  const finalRef = React.useRef();
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
  };

  const onUserItemClick = item => {
    const id = item.id;
    console.log('id = ', id);
    alert(`选择的用户id为: ${id}`);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onOk = data => {
    setIsOpen(false);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  function validateData(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        //alert(JSON.stringify(values, null, 2))
        values.id = listData.length + 1;
        values.avatar = 'https://avatars1.githubusercontent.com/u/37545?s=460&v=4';
        listData.push(values);
        setListData(listData);
        resolve();
        setIsOpen(false);
      }, 3000);
    });
  }

  return /*#__PURE__*/React.createElement(ChakraProvider, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '450px'
    }
  }, /*#__PURE__*/React.createElement(VStack, {
    align: "stretch",
    spacing: "-2"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onUserItemClick
  }), /*#__PURE__*/React.createElement(UserItem, null))))), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, "\u6DFB\u52A0\u7528\u6237"), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(validateData)
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: "2"
  }, /*#__PURE__*/React.createElement(FormControl, {
    isInvalid: errors.account
  }, /*#__PURE__*/React.createElement(FormLabel, {
    htmlFor: "account"
  }, "\u7528\u6237\u540D"), /*#__PURE__*/React.createElement(Input, _extends({
    bgColor: "gray.50",
    placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
    id: "account"
  }, register('account', {
    required: '请输入用户名',
    minLength: {
      value: 4,
      message: '最小长度应为4'
    }
  }))), /*#__PURE__*/React.createElement(FormErrorMessage, null, errors.account && errors.account.message)), /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    spacing: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "solid",
    isLoading: isSubmitting,
    type: "submit"
  }, "\u4FDD\u5B58"), /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "outline",
    onClick: onClose
  }, "\u53D6\u6D88"))))))));
}