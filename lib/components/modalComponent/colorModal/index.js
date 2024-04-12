function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Stack, FormControl, FormLabel, FormErrorMessage, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
export default function ColorModal(props) {
  const {
    children,
    isModalOpen,
    defaultData
  } = props;
  const initialRef = useRef();
  const finalRef = useRef();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [modalTitle, setModalTitle] = useState('');
  const Child = React.Children.only(children);
  useEffect(() => {
    if (isModalOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [isModalOpen]);
  return /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: onClose,
    size: "full"
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modalTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, {
    ...defaultData
  }) : /*#__PURE__*/React.createElement(Child, _extends({
    key: i
  }, defaultData)))));
}