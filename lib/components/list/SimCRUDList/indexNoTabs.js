function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useState, useEffect } from 'react';
import { history } from 'umi';
import { useSize } from 'ahooks';
import { useForm } from 'react-hook-form';
import useLayout from "../../hooks/useLayout"; // import ContainerContext from '@/components/AutoX/ContainerContext';

import { ButtonGroup, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input // 文本框
, Stack // 布局组件 设置子元素坚决
, FormControl // 未表单元素添加动态效果 如校验 禁用等
, FormLabel // label
, FormErrorMessage, Spinner, useToast } from "@chakra-ui/react";

const promiseAjax = require("../../utils/request");

import { InputCompx } from "./formItemCompx"; // import InputCompx from './formItemCompx/InputCompx'

require("./index.less");

const formItemMap = {
  input: InputCompx
};
/**
 * 列表属性{template}包括 [布局, Cart, 分隔线, 数据转换 [,子组件] ]
 * 简单列表仅向子组件传递数据源以及 子组件属性
 * @param {*} props 
 * @param {object} layout  布局
 * @param {array}} items,dataSource
 * 
 * @param { path: 跳转页面, model: 弹出模态框 } navigation 
 * @param { 回调方法 } cb 
 * @param { 切换CRUD开关 } isSwtich
 * 
 */

export default function SimCRUDList(props) {
  const {
    children,
    layout,
    items,
    dataSource = items,
    navigation,
    onItemClick,
    cb,
    isSwtich = true,
    ...rest
  } = props;
  const {
    api: {
      createAPI,
      getAPI,
      updateAPI,
      deleteAPI
    }
  } = navigation.model;
  const [layoutRef, {
    getClassName
  }] = useLayout();
  const [isOpen, setIsOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [currentData, setCurrentData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [modelTitle, setModelTitle] = useState('Title');
  const containerRef = useRef();
  const size = useSize(containerRef);
  const initialRef = useRef();
  const finalRef = useRef();
  const toast = useToast();
  const Child = React.Children.only(children); //根据 id 获取数据
  // useEffect(() => {
  //   if (getAPI && currentId && !isDelOpen) {
  //     getData(currentId)
  //   }
  // }, [currentId]);
  // 检查数据是否有效

  if (!(dataSource && Array.isArray(dataSource))) {
    return tips(dataSource);
  } // 列表 item 点击事件


  function clickAction(item) {
    if (navigation) {
      if (navigation.path) {
        const nav = navigation.detail;

        if (nav.indexOf('(id)') === -1) {
          history.push({
            pathname: nav,
            query: {
              itemData: item
            }
          });
        } else if (nav.indexOf('(id)') > -1) {
          const formatNav = nav.replace('(id)', item.id);
          history.push({
            pathname: formatNav,
            query: {}
          });
        }
      } else if (navigation.model && isSwtich) {
        console.log('item === ', item);
        getData(item.id);
        setModelTitle('编辑');
        setCurrentId(item.id);
        setIsOpen(true);
      } else if (onItemClick) {
        onItemClick(item);
      }
    } else if (onItemClick) {
      onItemClick(item);
    }
  } // 新增 点击事件


  function clickAddAction(nav) {
    if (nav.path) {
      history.push({
        pathname: navigation.path,
        query: {}
      });
    } else if (nav.model) {
      setModelTitle('添加');
      setCurrentId('');
      setIsOpen(true);
    }
  } //关闭模态框


  function onClose() {
    reset();
    setCurrentData({});
    setIsOpen(false);
  }

  const {
    handleSubmit,
    register,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();

  function validateData(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (currentId) {
          putData(values, currentId);
        } else {
          postData(values);
        }

        resolve();
      }, 2000);
    });
  } //获取详情数据


  function getData(id) {
    const api = `${getAPI.replace('(id)', id)}`;
    const queryData = {};
    setLoading(true);
    promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        setCurrentData(resp.data);
      } else {
        console.error("获取数据失败");
      }
    }).finally(_ => {
      setLoading(false);
    });
  } //新增数据


  function postData(values) {
    const api = `${createAPI}`;
    const queryData = { ...values
    };
    promiseAjax(api, queryData, {
      method: 'POST'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('修改成功');
        cb(true);
        setIsOpen(false);
      } else {
        console.error("提交失败 === ", resp);
        toastTips('提交失败', 'error');
      }
    });
  } //修改数据


  function putData(values, id) {
    const api = `${updateAPI.replace('(id)', id)}`;
    const queryData = { ...values
    };
    promiseAjax(api, queryData, {
      method: 'PUT'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('修改成功');
        cb(true);
        setIsOpen(false);
      } else {
        console.error("修改失败 == ", resp);
        toastTips('修改失败', 'error');
      }
    });
  } //删除确认提示


  function showDelModel(item) {
    if (deleteAPI && item && item.id) {
      setCurrentId(item.id);
      setIsDelOpen(true);
    } else {
      console.log('未设置 deleteAPI 或 item 数据异常');
    }
  } //删除数据


  function delData(values, id) {
    const api = `${deleteAPI.replace('(id)', id)}`;
    const queryData = { ...values
    };
    promiseAjax(api, queryData, {
      method: 'DELETE'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('删除成功');
        cb(true);
        setIsOpen(false);
      } else {
        console.error("删除失败 == ", resp);
        toastTips('删除失败', 'error');
      }
    });
  } //根据type 加载表单组件


  function handleFormItem(list) {
    const fieldList = list;
    return fieldList.map((item, index) => {
      const {
        label,
        field,
        type
      } = item;
      const C = formItemMap[type];
      return /*#__PURE__*/React.createElement(FormControl, {
        isInvalid: errors[field],
        key: `${index}_i`
      }, /*#__PURE__*/React.createElement(FormLabel, {
        htmlFor: field
      }, label), /*#__PURE__*/React.createElement(C, _extends({}, item, {
        register: register,
        errors: errors,
        defaultValue: currentData[field]
      })), /*#__PURE__*/React.createElement(FormErrorMessage, null, errors[field] && errors[field].message));
    });
  } // tips


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

  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      position: 'relative',
      alignItems: 'center'
    },
    className: getClassName(),
    ref: containerRef
  }, dataSource.map((item, i) => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      },
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => clickAction(item)
    }, /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, { ...rest,
      ...item,
      layout: layout,
      // key: i,
      ref: layoutRef,
      isLastItem: dataSource.length == i + 1 ? true : false,
      index: i
    }) : /*#__PURE__*/React.createElement(Child, _extends({}, rest, item, {
      layout: layout,
      ref: layoutRef,
      onItemClick: onItemClick,
      index: i
    }))), isSwtich ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '26px',
        height: '26px',
        background: '#c3c3c3',
        borderRadius: '50%',
        textAlign: 'center'
      },
      onClick: () => showDelModel(item)
    }, /*#__PURE__*/React.createElement("div", {
      className: `del-btn`
    })) : null);
  }), navigation && isSwtich ? /*#__PURE__*/React.createElement("div", {
    className: "footerContent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footerBtn",
    onClick: () => clickAddAction(navigation)
  }, /*#__PURE__*/React.createElement("div", {
    className: "addBtn"
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modelTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, isLoading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(validateData)
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: "2"
  }, handleFormItem(navigation.model.fields), /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    spacing: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "solid",
    isLoading: isSubmitting,
    type: "submit"
  }, "\u4FDD\u5B58"), /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "outline",
    onClick: onClose
  }, "\u53D6\u6D88"))))))), /*#__PURE__*/React.createElement(Modal, {
    isOpen: isDelOpen,
    onClose: () => setIsDelOpen(false)
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, "\u63D0\u793A"), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement("div", null, "\u786E\u5B9A\u8981\u5220\u9664\u5417?")), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    spacing: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setIsDelOpen(false)
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    colorScheme: "blue",
    mr: 3,
    onClick: () => delData({}, currentId)
  }, "\u786E\u5B9A"))))));
}

function tips(dataSource) {
  return /*#__PURE__*/React.createElement("div", null, "PlainList \u6570\u636E\u65E0\u6548");
}