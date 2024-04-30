import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Stack, FormControl, FormLabel, FormErrorMessage, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
export default function AddNewModal(props) {
  const {
    children,
    isModalOpen,
    defaultData,
    ...rest
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
    ...rest,
    ...defaultData
  }) : /*#__PURE__*/React.createElement(Child, defaultData))));
}