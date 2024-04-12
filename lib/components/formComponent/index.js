function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Stack, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
export default function FormComponent(props) {
  const {
    formType,
    onModalClose,
    onFormAddNew,
    onFormSaved
  } = props;
  const {
    handleSubmit,
    register,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();
  console.log('formType', formType);
  function validateData(values) {
    console.log('form data', values);
    if (onFormSaved) {
      onFormSaved(values);
    }

    // return new Promise((resolve) => {
    //     setTimeout(() => {

    //         resolve()
    //     }, 2000)
    // })
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(validateData),
    noValidate: true
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
    isLoading: false,
    type: "submit",
    size: "sm"
  }, "\u4FDD\u5B58"), /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "outline",
    onClick: onModalClose,
    size: "sm"
  }, "\u53D6\u6D88"))));
}