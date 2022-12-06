function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { history } from 'umi';
import { useSize } from 'ahooks';
import { useForm } from 'react-hook-form';
import useLayout from "../../hooks/useLayout";
import ContainerContext from "../../AutoX/ContainerContext";
import { formatParams } from "../../utils/tools";

const namedPresenterGet = require("../../config/NamedPresenterConfig").get();

import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Stack // 布局组件 设置子元素坚决
, FormControl // 未表单元素添加动态效果 如校验 禁用等
, FormLabel // label
, FormErrorMessage, Spinner, useToast } from "@chakra-ui/react";

const promiseAjax = require("../../utils/request");

const formItemTypeMap = require("../../config/formItemTypeConfig").get();

require("./index.less");
/**
 * @param {*} props 
 * @param {object} layout  布局
 * @param {array} items 数据源
 * 
 * @param { object } navigation path: 跳转页面, model: 弹出模态框
 * @param { object } model delConfirmTips: 是否显示删除确认提示框
 * @param { function } cb 回调方法
 * @param { boolean } isSwitch 切换CRUD开关
 * @param { string } addnew 自定义新增按钮样式
 * 
 */


export default /*#__PURE__*/forwardRef(function ManageList(props) {
  const {
    children,
    layout,
    items,
    dataSource = items,
    currentTabItem,
    navigation,
    addnew,
    onItemClick,
    cb,
    isSwitch = false,
    onItemDeleted,
    onItemAdded,
    onItemChanged,
    onItemIndicated,
    ...rest
  } = props;
  const {
    delConfirmTips,
    api: {
      createAPI,
      getAPI,
      updateAPI,
      deleteAPI
    },
    saveData
  } = navigation.model;
  const [layoutRef, {
    getClassName
  }] = useLayout();
  const [isOpen, setIsOpen] = useState(false); // const [isDelOpen, setIsDelOpen] = useState(false)

  const [currentId, setCurrentId] = useState('');
  const [currentData, setCurrentData] = useState({});
  const [currentItemData, setCurrentItemData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [modelTitle, setModelTitle] = useState('Title');
  const [formData, setFormData] = useState({}); //item click state

  const [clickState, setClickState] = useState('');
  const containerRef = useRef(); //list 容器 宽，高

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
    setCurrentItemData(item);

    if (!clickState) {
      return;
    }

    setClickState('listItemClick');

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
  }

  function showEditModal() {
    const data = currentItemData;
    getData(data);
    setModelTitle('编辑');
    setCurrentId(data.id);
    setIsOpen(true);
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


  function getData(data) {
    const api = formatParams(getAPI, data);
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
    // let rtValue;
    // let formatApi = `${createAPI}`;
    // if(createAPI.indexOf('(') != -1){
    //   rtValue = handleChangeApiParam(createAPI)
    //   formatApi = createAPI.replace(`(${rtValue})`, currentTabItem[rtValue]);
    // }
    // const api = `${formatApi}`;
    const api = `${createAPI}`;
    const queryData = { ...values,
      ...formData
    };
    promiseAjax(api, queryData, {
      method: 'POST'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('新增成功');
        cb(true);
        setIsOpen(false);
      } else {
        console.error("新增失败 === ", resp);
        toastTips('新增失败', 'error');
      }
    });
  } //修改数据


  function putData(values, id) {
    // let rtValue;
    // let formatApi = `${updateAPI}`;
    // if(updateAPI.indexOf('(') != -1){
    //   rtValue = handleChangeApiParam(updateAPI)
    //   formatApi = updateAPI.replace(`(${rtValue})`, currentTabItem[rtValue]);
    // }
    // const api = `${formatApi}`;
    const api = formatParams(updateAPI, {
      id
    }); // const api = `${updateAPI.replace('(id)', id)}`;

    const queryData = { ...values,
      ...formData
    }; // console.log('queryData === ', queryData)

    promiseAjax(api, queryData, {
      method: 'PUT'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('修改成功');
        setIsOpen(false);

        if (onItemChanged) {
          onItemChanged(true);
        }
      } else {
        console.error("修改失败 == ", resp);
        toastTips('修改失败', 'error');
      }
    });
  } //删除确认提示
  // function showDelModel(item) {
  //   if (deleteAPI && item && item.id) {
  //     setCurrentId(item.id)
  //     if (delConfirmTips) {
  //       setIsDelOpen(true)
  //     } else {
  //       delData({}, item.id)
  //     }
  //   } else {
  //     console.log('未设置 deleteAPI 或 item 数据异常')
  //   }
  // }
  //删除数据
  // function delData(values, id) {
  //   const api = `${deleteAPI.replace('(id)', id)}`;
  //   const queryData = { ...values };
  //   promiseAjax(api, queryData, { method: 'DELETE' }).then(resp => {
  //     if (resp && resp.code === 200) {
  //       toastTips('删除成功')
  //       cb(true)
  //       setIsOpen(false)
  //     } else {
  //       console.error("删除失败 == ", resp)
  //       toastTips('删除失败', 'error')
  //     }
  //   });
  // }
  //替换 api 参数值 用小括号包住， 如: /api/(id)
  // function handleChangeApiParam(value) {
  //   var rt = /(.+)?(?:\(|（)(.+)(?=\)|）)/.exec(value);
  //   return rt[2]
  // }
  //处理额外提交的字段和值


  function handleFormData(data) {
    const newFormData = { ...formData,
      ...data
    }; // console.log('newFormData === ', JSON.stringify(newFormData))

    setFormData(newFormData);
  } //根据type 加载表单组件


  function handleFormItem(list) {
    const fieldList = list;
    return fieldList.map((item, index) => {
      const {
        label,
        field,
        type,
        rules = {
          isRequired: false
        },
        defaultValue
      } = item;
      const C = formItemTypeMap[type];
      return /*#__PURE__*/React.createElement(FormControl, {
        isRequired: rules.isRequired,
        isInvalid: rules.isRequired && errors[field],
        key: `${index}_i`
      }, /*#__PURE__*/React.createElement(FormLabel, {
        htmlFor: field
      }, label), /*#__PURE__*/React.createElement(C, _extends({}, item, {
        register: register,
        errors: errors,
        defaultValue: currentData[field] || defaultValue,
        onChange: handleFormData
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
  } //列表添加按钮


  function addNewButton() {
    const btnName = addnew || 'AddNewButton';
    const BC = namedPresenterGet[btnName];
    return /*#__PURE__*/React.createElement(BC, null);
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      position: 'relative',
      // alignItems: 'center'
      minHeight: '200px'
    },
    className: getClassName(),
    ref: containerRef
  }, /*#__PURE__*/React.createElement(ContainerContext.Provider, {
    value: {
      setClickState,
      showEditModal
    }
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
      // layout: layout,
      key: i,
      ref: layoutRef,
      // isLastItem: dataSource.length == (i + 1) ? true : false,
      index: i
    }) : /*#__PURE__*/React.createElement(Child, _extends({}, rest, item, {
      layout: layout,
      ref: layoutRef,
      onItemClick: onItemClick,
      index: i
    }))));
  }), navigation && isSwitch ? /*#__PURE__*/React.createElement("div", {
    className: "footerContent"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => clickAddAction(navigation)
  }, addNewButton())) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modelTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, isLoading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(validateData),
    noValidate: true
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
    type: "submit",
    size: "sm"
  }, "\u4FDD\u5B58"), /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "outline",
    onClick: onClose,
    size: "sm"
  }, "\u53D6\u6D88")))))))));
});

function tips(dataSource) {
  return /*#__PURE__*/React.createElement("div", null, "PlainList \u6570\u636E\u65E0\u6548");
}