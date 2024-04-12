function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect, useRef } from 'react';
import { VStack, Spinner, CheckboxGroup, Checkbox, Stack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, SimpleGrid, Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, FormControl,
// 未表单元素添加动态效果 如校验 禁用等
FormLabel,
// label
FormErrorMessage, useToast } from "@chakra-ui/react";
import { useForceUpdate } from "../../hooks/lifeCycle";
import { useForm } from 'react-hook-form';
const promiseAjax = require("../../utils/request");
const formItemTypeMap = require("../../config/formItemTypeConfig").get();
export default function OneMany(props) {
  const {
    field,
    defaultValue,
    props: optProps,
    onChange
  } = props;
  const {
    actions = [],
    fields = [],
    operation = []
  } = optProps;
  const [currentId, setCurrentId] = useState('');
  const [currentData, setCurrentData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modelTitle, setModelTitle] = useState('标题');
  const [formData, setFormData] = useState({});
  const [localListData, setLocalListData] = useState([]);
  const forceUpdate = useForceUpdate();
  const initialRef = useRef();
  const finalRef = useRef();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();
  function validateData(values) {
    localListData.push(values);
    setLocalListData(localListData);
    console.log('localListData === ', localListData);
    setIsOpen(false);
    // onChange(localListData)
  }

  //处理额外提交的字段和值
  function handleFormData(data) {
    const newFormData = {
      ...formData,
      ...data
    };
    // console.log('newFormData === ', JSON.stringify(newFormData))
    setFormData(newFormData);
  }

  //根据type 加载表单组件
  function handleFormItem(list) {
    const fieldList = list;
    return fieldList.map((item, index) => {
      const {
        label,
        field,
        type,
        rules = {
          isRequired: false
        },
        defaultValue
      } = item;
      const C = formItemTypeMap[type];
      return /*#__PURE__*/React.createElement(FormControl, {
        isRequired: rules.isRequired,
        isInvalid: rules.isRequired && errors[field],
        key: `${index}_i`
      }, /*#__PURE__*/React.createElement(FormLabel, {
        htmlFor: field
      }, label), /*#__PURE__*/React.createElement(C, _extends({}, item, {
        register: register,
        errors: errors,
        currentData: currentData,
        defaultValue: currentData[field] || defaultValue,
        onChange: handleFormData
      })), /*#__PURE__*/React.createElement(FormErrorMessage, null, errors[field] && errors[field].message));
    });
  }

  //新增数据
  const postData = () => {};

  //编辑
  const putData = () => {};

  //关闭模态框
  const onClose = () => {
    setIsOpen(false);
  };

  // tips
  function toastTips(text, status = 'success') {
    toast({
      title: text,
      description: "",
      status: status,
      duration: 3000,
      isClosable: true,
      position: 'top'
    });
  }
  return /*#__PURE__*/React.createElement(VStack, {
    alignItems: 'left',
    marginBottom: '10px'
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Button, {
    colorScheme: "teal",
    variant: "outline",
    size: "sm",
    onClick: () => setIsOpen(true)
  }, "\u6DFB\u52A0")), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(TableContainer, null, /*#__PURE__*/React.createElement(Table, {
    variant: "simple"
  }, /*#__PURE__*/React.createElement(Thead, null, /*#__PURE__*/React.createElement(Tr, null, fields && fields.map((item, index) => /*#__PURE__*/React.createElement(Th, {
    key: `${index}_th`
  }, item.label)), /*#__PURE__*/React.createElement(Th, null, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement(Tbody, null, localListData && localListData.map((item, index) => /*#__PURE__*/React.createElement(Tr, {
    key: `${index}_tr`
  }, fields && fields.map((fieldItem, fieldIndex) => /*#__PURE__*/React.createElement(Td, {
    key: `${fieldIndex}_td`
  }, item[fieldItem.field])), /*#__PURE__*/React.createElement(Td, null, "\u7F16\u8F91 \u5220\u9664"))))))), /*#__PURE__*/React.createElement(Modal, {
    isOpen: isOpen,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modelTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(validateData),
    noValidate: true
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: "6"
  }, handleFormItem(actions[0].options.items), /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    spacing: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "solid",
    type: "submit",
    size: "sm"
  }, "\u4FDD\u5B58"), /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "outline",
    onClick: onClose,
    size: "sm"
  }, "\u53D6\u6D88"))))))));
}