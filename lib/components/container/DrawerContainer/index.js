function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect, useRef } from 'react';
import { Button, useToast, Input, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { APIContainer, NamedLayout, NamedContainer, NamedCart } from "../..";
import promiseAjax from "../../utils/request";
import { bindingConvert } from "../../gateway/Binding";
import doFilter from "../../gateway/doFilter.mjs";
import PreviewAutoLayout from "../../PreviewAutoLayout";

/**
 * @param {*} props 
 * @param {object}} converter 绑定Drawer加载参数
 * @param {string}} layoutName tab列表layoutMame
 */

export default function DrawerContainer(props) {
  const {
    children,
    layoutName = '',
    converter,
    postApiBody,
    moduleId,
    ...rest
  } = props;
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [currentNavItem, setCurrentNavItem] = useState('');
  const [currentDrawerItem, setCurrentDrawerItem] = useState('');
  const [onRefresh, setOnRefresh] = useState(false);
  const Child = children && React.Children.only(children);
  const toast = useToast();
  useEffect(_ => {
    if (onRefresh) {
      setOnRefresh(false);
    }
  }, [onRefresh]);
  const handleChangeData = () => {
    promiseAjax(addApi, queryData, {
      method: 'POST'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('操作成功');
        setLsApi('');
        setOnRefresh(true);
        onClose();
      } else {
        console.error("操作失败 === ", resp);
        toastTips('操作失败', 'error');
      }
    });
  };
  const onNavItemClick = item => {
    // console.log('onNavItemClick item = ', item)   
    if (item.isSelected) {
      const convertData = bindingConvert(converter, item);
      const filterData = doFilter(converter, convertData);
      console.log('convertData = ', converter, item, convertData);
      console.log('filterData = ', filterData);
      setCurrentNavItem(filterData);
      onOpen(true);
    }
  };
  const onDrawerItemClick = item => {
    console.log('onDrawerItemClick = ', item);
    if (item.isSelected) {
      setCurrentDrawerItem(item);
    }
  };
  const onDrawerOk = () => {
    handleChangeData();
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NamedLayout, _extends({
    xname: "VStack"
  }, rest), layoutName ? /*#__PURE__*/React.createElement(PreviewAutoLayout, {
    layoutName: layoutName,
    moduleId: moduleId,
    onItemClick: onNavItemClick
  }) : /*#__PURE__*/React.createElement(React.Fragment, null)), /*#__PURE__*/React.createElement(Drawer, {
    size: "xl",
    isOpen: isOpen,
    placement: "right",
    onClose: onClose,
    closeOnOverlayClick: false,
    onCloseComplete: loadedDrawerData
  }, /*#__PURE__*/React.createElement(DrawerOverlay, null), /*#__PURE__*/React.createElement(DrawerContent, null, /*#__PURE__*/React.createElement(DrawerCloseButton, null), /*#__PURE__*/React.createElement(DrawerHeader, null, "\u5207\u6362\u7EC4\u4EF6"), /*#__PURE__*/React.createElement(DrawerBody, null, /*#__PURE__*/React.createElement(PreviewAutoLayout, _extends({}, currentNavItem, {
    moduleId: moduleId,
    onItemClick: onDrawerItemClick
  }))), /*#__PURE__*/React.createElement(DrawerFooter, null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    mr: 3,
    onClick: onClose
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    colorScheme: "blue",
    onClick: onDrawerOk
  }, "\u786E\u5B9A")))));
}