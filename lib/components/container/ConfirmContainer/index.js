import React, { useState, useEffect, useRef } from 'react';
import { Button, useToast, Input, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogCloseButton, AlertDialogContent, AlertDialogOverlay, useDisclosure } from '@chakra-ui/react';
import promiseAjax from "../../utils/request";
import { formatParams } from "../../utils/tools";
import _ from 'lodash';

/**
 * @param {*} props 
 * @param {object}} converter 绑定加载参数
 */

export default function ConfirmContainer(props) {
  const {
    children,
    converter,
    saveApi,
    saveApiBody,
    ...rest
  } = props;
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [currentItem, setCurrentItem] = useState('');
  const [originSaveBody, setOriginSaveBody] = useState(saveApiBody);
  const [onRefresh, setOnRefresh] = useState(false);
  const Child = children && React.Children.only(children);
  const toast = useToast();
  const cancelRef = useRef();

  // useEffect(_ => {
  //     if (onRefresh) {
  //         setOnRefresh(false)
  //     }
  // }, [onRefresh])

  const handleSaveData = () => {
    if (!saveApi) {
      toastTips('未设置 saveApi ', 'warning');
      return;
    }
    const api = formatParams(saveApi, {
      ...rest,
      ...currentItem
    });
    let data = {};
    if (originSaveBody && JSON.stringify(originSaveBody) != "{}") {
      const cloneOriginSaveBody = _.cloneDeep(originSaveBody);
      data = formatParams(cloneOriginSaveBody, {
        ...rest,
        ...currentItem
      });
    }
    const queryData = {
      ...data
    };
    promiseAjax(api, queryData, {
      method: 'PUT'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('操作成功');
        onClose();
      } else {
        console.error("操作失败 === ", resp);
        toastTips('操作失败', 'error');
      }
    });
  };
  const itemClick = item => {
    // console.log('onNavItemClick item = ', item)   
    if (item.isSelected) {
      setCurrentItem(item);
      onOpen(true);
    }
  };

  //当所有现有节点已完成动画输出时触发
  const loadedDrawerData = () => {

    //TODO
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
  console.log('ConfirmContainer = ', rest);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.isValidElement(Child) ? ( /*#__PURE__*/React.cloneElement(Child, {
    ...rest,
    onItemClick: itemClick
  })) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(AlertDialog, {
    motionPreset: "slideInBottom",
    leastDestructiveRef: cancelRef,
    onClose: onClose,
    isOpen: isOpen,
    isCentered: true
  }, /*#__PURE__*/React.createElement(AlertDialogOverlay, null), /*#__PURE__*/React.createElement(AlertDialogContent, null, /*#__PURE__*/React.createElement(AlertDialogHeader, null, "\u63D0\u793A"), /*#__PURE__*/React.createElement(AlertDialogCloseButton, null), /*#__PURE__*/React.createElement(AlertDialogBody, null, "\u786E\u5B9A\u9009\u62E9\u6B64\u9879\u5417\uFF1F"), /*#__PURE__*/React.createElement(AlertDialogFooter, null, /*#__PURE__*/React.createElement(Button, {
    ref: cancelRef,
    onClick: onClose
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    colorScheme: "blue",
    ml: 3,
    onClick: handleSaveData
  }, "\u786E\u5B9A")))));
}