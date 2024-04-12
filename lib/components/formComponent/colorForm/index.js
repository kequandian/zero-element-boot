function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Stack, FormControl, FormLabel, FormErrorMessage, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
export default function ColorFrom(props) {
  const {
    isModalOpen,
    defaultData,
    onFormAddNew,
    onFormSaved
  } = props;
  const initialRef = useRef();
  const finalRef = useRef();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [modalTitle, setModalTitle] = useState('');
  const [requestType, setRequestType] = useState('');
  const {
    handleSubmit,
    register,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();
  useEffect(() => {
    if (isModalOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [isModalOpen]);
  useEffect(() => {
    if (defaultData && JSON.stringify(defaultData) !== '{}') {
      setModalTitle('编辑');
      setRequestType('edit');
    } else {
      setModalTitle('新增');
      setRequestType('add');
    }
  }, [defaultData]);
  function validateData(values) {
    console.log('validateData', values);
    if (values.color.indexOf('#') === -1) {
      values.color = '#' + values.color;
    }
    if (requestType === 'add') {
      if (onFormAddNew) {
        onFormAddNew(values);
      }
    } else if (requestType === 'edit') {
      if (onFormSaved) {
        onFormSaved(values);
      }
    }
    reset();

    // return new Promise((resolve) => {
    //     setTimeout(() => {

    //         resolve()
    //     }, 2000)
    // })
  }
  function handleColorValue(value) {
    if (value && value.indexOf('#') != -1) {
      value = value.replace('#', '');
    }
    return value;
  }
  return /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: onClose,
    size: "xl"
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modalTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(validateData),
    noValidate: true
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: "2"
  }, /*#__PURE__*/React.createElement(FormControl, {
    isInvalid: errors.paletteName
  }, /*#__PURE__*/React.createElement(FormLabel, {
    htmlFor: "paletteName"
  }, "Hex #"), /*#__PURE__*/React.createElement(Input, _extends({
    bgColor: "gray.50",
    placeholder: "\u8272\u677F\u540D",
    id: "paletteName",
    defaultValue: defaultData ? handleColorValue(defaultData.paletteName) : ''
  }, register('paletteName', {
    required: '请输入色板名称'
  }))), /*#__PURE__*/React.createElement(FormErrorMessage, null, errors.paletteName && errors.paletteName.message)), /*#__PURE__*/React.createElement(FormControl, {
    isInvalid: errors.color
  }, /*#__PURE__*/React.createElement(FormLabel, {
    htmlFor: "color"
  }, "Hex #"), /*#__PURE__*/React.createElement(Input, _extends({
    bgColor: "gray.50",
    placeholder: "1E1E1E",
    id: "color",
    defaultValue: defaultData ? handleColorValue(defaultData.color) : ''
  }, register('color', {
    required: '请输入颜色值'
  }))), /*#__PURE__*/React.createElement(FormErrorMessage, null, errors.color && errors.color.message)), /*#__PURE__*/React.createElement(FormControl, {
    isInvalid: errors.name
  }, /*#__PURE__*/React.createElement(FormLabel, {
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/React.createElement(Input, _extends({
    bgColor: "gray.50",
    placeholder: "\u540D\u79F0",
    id: "name",
    defaultValue: defaultData ? defaultData.name : ''
  }, register('name', {
    // required: '请输入颜色名',
  }))), /*#__PURE__*/React.createElement(FormErrorMessage, null, errors.name && errors.name.message)), /*#__PURE__*/React.createElement(Stack, {
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
    onClick: onClose,
    size: "sm"
  }, "\u53D6\u6D88")))))));
}