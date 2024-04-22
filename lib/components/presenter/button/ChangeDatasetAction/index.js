function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useRef } from "react";
import { Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { ConfirmContainer } from "../../../container";
import { LowCodeDatasetManageList } from "../../../list";
import { LS } from 'zero-element/lib/utils/storage';
export default function NewDatasetAction(props) {
  const {
    layoutName = LS.get('commonData'),
    onActionCompleted
  } = props;
  const initialRef = useRef();
  const finalRef = useRef();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [modalTitle, setModalTitle] = useState('');
  const config = {
    listApi: "/openapi/crud/lc_low_auto_module_dataset/module_dataset/dataset-name-list",
    isScroll: true,
    saveApi: '/openapi/lc/module/add-dataset',
    saveApiBody: {
      mainModuleName: typeof layoutName === 'object' ? LS.get('commonData').layoutName : '(layoutName)',
      datasetName: '(datasetName)'
    }
  };
  const onBtnClick = () => {
    onOpen();
  };
  const handleActionCompleted = data => {
    if (onActionCompleted) {
      onActionCompleted(data);
    }
    onClose();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onBtnClick
  }, "ChangeDataset"), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: onClose,
    size: "full"
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modalTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.createElement(ConfirmContainer, _extends({}, config, {
    layoutName: layoutName,
    onActionCompleted: handleActionCompleted
  }), /*#__PURE__*/React.createElement(LowCodeDatasetManageList, null))))));
}