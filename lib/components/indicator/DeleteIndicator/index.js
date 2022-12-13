import React, { useState } from 'react';
import { Stack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useToast } from '@chakra-ui/react';
import { formatParams } from "../../utils/tools";

const promiseAjax = require("../../utils/request");

require("./index.less");
/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'DeleteIndicator',
    props:{
      action: '/openapi/lc/apis/(id)',
      op: 'edit'
    },
    binding: {
      "id":"id",
    }
   },
   container:{}
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数
 * @param { function } onItemDeleted 删除
 * @param { object } action 删除API  
 * 
 */


export default function Index(props) {
  const {
    children,
    action,
    indicatorData,
    onItemDeleted,
    isDisabled,
    ...rest
  } = props;
  const toast = useToast();
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  function showDelModel() {
    setIsDelOpen(true);
  } //删除


  function delAction() {
    // setLoading(true) 
    const api = formatParams(action, indicatorData);
    const queryData = {};
    promiseAjax(api, queryData, {
      method: 'DELETE'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('删除成功');
        setIsDelOpen(false);

        if (onItemDeleted) {
          onItemDeleted(true);
        }
      } else {
        console.error("删除失败 == ", resp);

        if (onItemDeleted) {
          onItemDeleted(false);
        }

        toastTips('删除失败', 'error');
      }
    }).finally(_ => {
      setLoading(false);
    });
  } // tips


  function toastTips(text, status = 'success') {
    toast({
      title: text,
      description: "",
      status: status,
      duration: 2500,
      isClosable: true,
      position: 'top'
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "del_indicator_container",
    style: {
      width: '100%'
    }
  }, React.Children.map(children, child => child), isDisabled ? /*#__PURE__*/React.createElement("div", {
    className: "del_icon_container",
    style: { ...rest
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "del_icon",
    onClick: () => showDelModel()
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "#5E6267",
    className: "bi bi-trash3",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(Modal, {
    isOpen: isDelOpen,
    onClose: () => setIsDelOpen(false)
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, "\u63D0\u793A"), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement("div", null, "\u786E\u5B9A\u5220\u9664\u5417?")), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    spacing: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    isLoading: isLoading,
    variant: "ghost",
    onClick: () => setIsDelOpen(false)
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    isLoading: isLoading,
    colorScheme: "blue",
    mr: 3,
    onClick: () => delAction()
  }, "\u786E\u5B9A"))))));
}