import React, { useState } from 'react';
import { useToast, Button, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { bindingConvert } from "../../../gateway/Binding";
import doFilter from "../../../gateway/doFilter.mjs";
import promiseAjax from "../../../utils/request";
import { LS } from 'zero-element/lib/utils/storage';
import { formatParams } from "../../../utils/tools";

/**
 * 
 * @param {string} api 提交api
 * @param {object} converter 转换提交的body 
 * @param {function} onActionCompleted 访问完成后回调事件
 * 
 */

export default function DeleteAction(props) {
  const {
    label = 'Delete',
    api,
    apiBody,
    converter,
    onActionCompleted
  } = props;
  const toast = useToast();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [isLoading, setLoading] = useState(false);

  //新增组件
  const submitData = item => {
    setLoading(true);
    if (!api) {
      toastTips('未设置api', 'error');
      return;
    }
    const _api = api;
    const getStrogeData = LS.get('commonData') || {};
    let _convertData = {};
    if (converter && JSON.stringify(converter) != '{}') {
      const bindingData = bindingConvert(converter, {
        ...item,
        ...getStrogeData
      });
      _convertData = doFilter(converter, bindingData);
    }
    let _apiBody = {};
    if (apiBody && JSON.stringify(apiBody) != '{}') {
      _apiBody = formatParams(apiBody, {
        ...item,
        ...getStrogeData
      });
    }
    let query = {
      ..._convertData,
      ..._apiBody
    };
    return promiseAjax(_api, query, {
      method: 'DELETE'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips(`移除成功`);
        if (onActionCompleted) {
          onActionCompleted(resp.data);
        }
      } else {
        toastTips(`移除失败, ${resp.message}`, 'error');
      }
    }).finally(_ => {
      setLoading(false);
    });
  };
  const onBtnClick = () => {
    onOpen();
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onBtnClick
  }, label), /*#__PURE__*/React.createElement(Modal, {
    isOpen: isOpen,
    onClose: onClose,
    closeOnOverlayClick: false
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, "\u63D0\u793A"), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement("div", null, "\u786E\u5B9A\u5220\u9664\u5417?")), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Stack, {
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