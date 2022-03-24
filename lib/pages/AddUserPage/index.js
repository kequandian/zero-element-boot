function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { history } from 'umi';
import { ChakraProvider, Button, Input // 文本框
, Stack // 布局组件 设置子元素坚决
, FormControl // 未表单元素添加动态效果 如校验 禁用等
, FormLabel // label
, FormErrorMessage } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
export default function Index(props) {
  const {
    handleSubmit,
    register,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();

  function validateData(values) {
    values.id = values.length;
    values.avatar = 'https://avatars1.githubusercontent.com/u/37545?s=460&v=4';
    history.push({
      pathname: '/TestUserListDemo',
      query: {
        data: JSON.stringify(values, null, 2)
      }
    });
  }

  const onCancel = () => {
    history.push({
      pathname: '/TestUserListDemo',
      query: {}
    });
  };

  return /*#__PURE__*/React.createElement(ChakraProvider, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '300px',
      background: '#ffffff',
      padding: '12px'
    }
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
  }, "\u63D0\u4EA4"), /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "outline",
    onClick: onCancel
  }, "\u8FD4\u56DE"))))));
}