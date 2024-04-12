function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import PreviewAutoLayout from "../../../PreviewAutoLayout";
export default function SelectAction(props) {
  const {
    Selection,
    selection
  } = props;
  const initialRef = useRef();
  const finalRef = useRef();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [modalTitle, setModalTitle] = useState('');
  const _selectionName = Selection ? '' : typeof selection === 'string' ? selection : selection.xname;

  // const _Selection = Selection || <PreviewAutoLayout layoutName={_selectionName} {..._selectionProps} />;
  const _selectionProps = typeof selection === 'object' && selection.props ? {
    ...selection.props
  } : {};
  const onActionCompleted = item => {};
  const onBtnClick = () => {
    onOpen();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onBtnClick
  }, selection.content), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: onClose,
    size: "full"
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modalTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.createElement(PreviewAutoLayout, _extends({
    layoutName: _selectionName
  }, _selectionProps))))));
}