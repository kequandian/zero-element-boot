function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect, useRef } from 'react';
import { Box, Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { LS } from 'zero-element/lib/utils/storage';
import { AutoLayout } from "../../..";
export default function BindingAction(props) {
  const {
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
  const moduleName = LS.get('commonData').layoutName || '';
  const config = {
    layout: {
      children: [{
        xname: 'PreviewAutoLayout',
        props: {
          layoutName: "BindingManageList"
        }
      }, {
        xname: 'PreviewAutoLayout',
        props: {
          layoutName: "ParentParameterListAutoLayout"
        }
      }],
      xname: 'HStack',
      props: {
        flexFlow: "no-wrap",
        spacing: 8,
        align: "center"
      },
      container: "DataFlowContainer"
    },
    converter: {}
  };
  const onBtnClick = () => {
    onOpen();
  };
  const handleModalClose = () => {
    onClose();
    if (onActionCompleted) {
      const data = {
        moduleName: moduleName
      };
      onActionCompleted(data);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onBtnClick
  }, "Binding"), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: handleModalClose,
    size: "full"
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modalTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.createElement(AutoLayout, _extends({
    moduleName: moduleName
  }, config))))));
}