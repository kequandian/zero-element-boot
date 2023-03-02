import React, { useState, useContext } from 'react';
import { Stack, Button, Menu, MenuButton, MenuList, MenuItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useToast } from '@chakra-ui/react';
import { MoreIcon, UpdateIcon, DelIcon } from "./icons";
import { formatParams } from "../../utils/tools";
import { getEndpoint } from "../../config/common";
import ContainerContext from "../../AutoX/ContainerContext";

const promiseAjax = require("../../utils/request");

require("./index.less");
/**
 * 使用例子
 * cart:{},
   indicator:{
    xname:'DownloadIndicator',
    props:{
      action: '/dev/logs/down/log?fileName=(fieldName)'
    },
    binding: {
      "value":"fieldName"
    }
   },
   container:{}
 * 
 * @param { object } indicatorData 为上述 binding 处理的参数
 * @param { function } onItemAdded 新增
 * @param { function } onItemChanged 修改
 * @param { function } onItemDeleted 删除
 * @param { function } onItemIndicated 自定义传参, 例子： onItemIndicated("indicator": 'MangeMenuList', id: 'deleted',  data{})
 * @param { object } action 传访问API 参数为： createAPI, getAPI, updateAPI, deleteAPI
 * 
 */


export default function Index(props) {
  const {
    children,
    action = {},
    indicatorData,
    onItemDeleted,
    onItemAdded,
    onItemChanged,
    onItemIndicated,
    ...rest
  } = props;
  const {
    createAPI,
    getAPI,
    updateAPI,
    deleteAPI
  } = action;
  const toast = useToast();
  const endpoint = getEndpoint();
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const {
    clickAction,
    showEditModal
  } = useContext(ContainerContext);

  function updateAction() {
    if (showEditModal) {
      showEditModal();
    }
  }

  function showDelModel() {
    setIsDelOpen(true);
  } //删除


  function delAction() {
    setLoading(true);
    const api = formatParams(deleteAPI, indicatorData);
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
    className: "menu_indicator_container",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => clickAction(indicatorData, 'itemClick')
  }, React.Children.map(children, child => child)), /*#__PURE__*/React.createElement("div", {
    className: "menu_icon_container",
    style: { ...rest
    }
  }, /*#__PURE__*/React.createElement(Menu, {
    offset: [1, 1]
  }, /*#__PURE__*/React.createElement(MenuButton, {
    onClick: () => clickAction(indicatorData, 'menuClick')
  }, /*#__PURE__*/React.createElement("div", {
    className: "menu_icon"
  }, /*#__PURE__*/React.createElement(MoreIcon, null))), /*#__PURE__*/React.createElement(MenuList, {
    minWidth: 120
  }, /*#__PURE__*/React.createElement(MenuItem, {
    icon: /*#__PURE__*/React.createElement(UpdateIcon, null),
    onClick: () => updateAction()
  }, "\u7F16\u8F91"), /*#__PURE__*/React.createElement(MenuItem, {
    icon: /*#__PURE__*/React.createElement(DelIcon, null),
    onClick: () => showDelModel()
  }, "\u5220\u9664")))), /*#__PURE__*/React.createElement(Modal, {
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