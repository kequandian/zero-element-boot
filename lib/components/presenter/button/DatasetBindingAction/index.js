function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useRef } from "react";
import { Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { LowCodeDatasetManageList } from "../../../list";
import { LS } from 'zero-element/lib/utils/storage';
import BindingApiParamsAction from "../BindingApiParamsAction";
export default function DatasetBindingAction(props) {
  const {
    layoutName = LS.get('commonData'),
    onActionCompleted
  } = props;
  const _layoutName = typeof layoutName === 'object' ? LS.get('commonData').layoutName : layoutName;
  const initialRef = useRef();
  const finalRef = useRef();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [modalTitle, setModalTitle] = useState('');
  const treeInitialRef = useRef();
  const treeFinalRef = useRef();
  const {
    isOpen: isTreeOpen,
    onOpen: onTreeOpen,
    onClose: onTreeClose
  } = useDisclosure();
  const [treeModalTitle, setTreeModalTitle] = useState('Binding Params');
  const [datasetName, setDatasetName] = useState('');
  const config = {
    listApi: "/openapi/crud/lc_low_auto_module_dataset/module_dataset/dataset-name-list"
  };
  const onBtnClick = () => {
    onOpen();
  };
  const handleActionCompleted = () => {
    if (onActionCompleted) {
      onActionCompleted({
        moduleName: _layoutName
      });
    }
    onClose();
  };
  const datasetItemClick = item => {
    setDatasetName(item.datasetName);
    setTimeout(_ => {
      onTreeOpen();
    }, 100);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onBtnClick
  }, "DatasetBinding"), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: handleActionCompleted,
    size: "full"
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modalTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.createElement(LowCodeDatasetManageList, _extends({}, config, {
    onItemClick: datasetItemClick
  }))))), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: treeInitialRef,
    finalFocusRef: treeFinalRef,
    isOpen: isTreeOpen,
    onClose: onTreeClose,
    size: "2xl"
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, treeModalTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.createElement(BindingApiParamsAction, {
    datasetName: datasetName,
    moduleName: _layoutName
  })))));
}