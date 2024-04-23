import React, { useState } from 'react';
import { useToast, Button, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import promiseAjax from "../../../utils/request";
import SelectAction from "../SelectAction";
import { LS } from 'zero-element/lib/utils/storage';
export default function NoPresenterAction(props) {
  const {
    selection,
    layoutName = LS.get('commonData'),
    onActionCompleted
  } = props;
  const _layoutName = typeof layoutName === 'object' ? LS.get('commonData').layoutName : layoutName;
  const presenterListApi = `/openapi/lc/module/childModuleList?componentOption=presenter&moduleName=${_layoutName}`;
  const toast = useToast();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [isLoading, setLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const itemClick = item => {
    setCurrentItem(item);
    onOpen();
  };
  const submitData = () => {
    delPresenter();
  };

  //新增组件
  const delPresenter = () => {
    setLoading(true);
    const api = '/openapi/lc/module/remove-child-module-of-presenter-option';
    const query = {
      "mainModuleName": _layoutName,
      "removeModuleId": currentItem.id
    };
    return promiseAjax(api, query, {
      method: 'DELETE'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('删除成功');
        if (onActionCompleted) {
          onActionCompleted(resp.data);
        }
      } else {
        toastTips('删除失败', 'error');
      }
    }).finally(_ => {
      setCurrentItem({});
      setLoading(false);
    });
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectAction, {
    selection: selection,
    onItemClick: itemClick,
    api: presenterListApi
  }), /*#__PURE__*/React.createElement(Modal, {
    isOpen: isOpen,
    onClose: onClose,
    closeOnOverlayClick: false
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, "\u63D0\u793A"), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement("div", null, "\u786E\u5B9A ", currentItem.moduleName, " \u5220\u9664\u5417?")), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    spacing: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    isLoading: isLoading,
    variant: "ghost",
    onClick: onClose
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    isLoading: isLoading,
    colorScheme: "blue",
    mr: 3,
    onClick: () => submitData()
  }, "\u786E\u5B9A"))))));
}