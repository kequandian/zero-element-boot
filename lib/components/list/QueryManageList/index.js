function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect, useRef } from 'react';
import { Button, useToast, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Stack,
// 布局组件 设置子元素坚决
FormControl,
// 未表单元素添加动态效果 如校验 禁用等
FormLabel,
// label
FormErrorMessage, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { APIContainer, NamedLayout } from "../..";
import promiseAjax from "../../utils/request";
import SelectList from "../SelectList";
import PlainAddNew from "../../presenter/button/PlainAddNew";
import { formatParams } from "../../utils/tools";

/**
 * @param {*} props 
 * @param {string}} listApi 列表api
 * @param {object}} converter listApi绑定数据
 * @param {string}} addApi 新增api
 * @param {object}} addApiBody 新增api提交数据
 * @param {string}} addApi 编辑api
 * @param {object}} addApiBody 编辑api提交数据
 */

export default function QueryManageList(props) {
  const {
    children,
    listApi = '',
    converter = {},
    addApi = '',
    addApiBody = {},
    editApi = '',
    editApiBody = {},
    onItemClick,
    ...rest
  } = props;

  //表单填写项
  const formFields = [{
    label: '键',
    field: 'newKey'
  }, {
    label: '值',
    field: 'newValue'
  }];
  const [lsApi, setLsApi] = useState(listApi);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [onRefresh, setOnRefresh] = useState(false);
  const [selectData, setSelectData] = useState({});
  const {
    handleSubmit,
    register,
    reset,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm();
  const initialRef = useRef();
  const finalRef = useRef();
  const toast = useToast();
  useEffect(_ => {
    if (onRefresh) {
      setOnRefresh(false);
      setLsApi(listApi);
    }
  }, [onRefresh]);

  // //新增
  const onAddNewClick = () => {
    showModal(true);
  };
  function showModal() {
    setIsOpen(true);
  }

  //关闭模态框
  function onClose() {
    reset();
    setIsOpen(false);
  }
  function onConfirmClose() {
    reset();
    setIsConfirmOpen(false);
  }
  function validateData(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        createData(values);
        resolve();
      }, 100);
    });
  }

  //新增数据
  function createData(values) {
    if (!addApi) {
      toastTips('未设置 addApi ', 'warning');
      return;
    }
    const queryData = {
      ...addApiBody
    };
    promiseAjax(addApi, queryData, {
      method: 'POST'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('新增成功');
        setLsApi('');
        setOnRefresh(true);
        setIsOpen(false);
        // 重置表单
        reset();
      } else {
        console.error("新增失败 === ", resp);
        toastTips(resp.message, 'error');
      }
    });
  }

  //变更数据
  const editData = () => {
    if (!editApi) {
      toastTips('未设置 editApi ', 'warning');
      return;
    }
    const convertBodyData = formatParams(editApiBody, selectData);
    const queryData = {
      ...convertBodyData
    };
    promiseAjax(editApi, queryData, {
      method: 'POST'
    }).then(resp => {
      if (resp && resp.code === 200) {
        toastTips('操作成功');
        setLsApi('');
        setOnRefresh(true);
        setIsConfirmOpen(false);
      } else {
        console.error("操作失败 === ", resp);
        toastTips(resp.message, 'error');
      }
    }).finally(_ => {
      reset();
      setSelectData({});
    });
  };
  const KVMItemClick = item => {
    setSelectData(item);
    //
    setIsConfirmOpen(true);
  };

  // 删除事件
  const itemDeleted = status => {
    if (status) {
      setLsApi('');
      setOnRefresh(true);
    }
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(APIContainer, _extends({
    api: lsApi,
    converter: converter
  }, rest), /*#__PURE__*/React.createElement(NamedLayout, {
    xname: "VStack"
  }, /*#__PURE__*/React.createElement(SelectList, {
    onItemDeleted: itemDeleted,
    onItemClick: KVMItemClick
  }, children), addApi ? /*#__PURE__*/React.createElement(PlainAddNew, {
    onAddNew: onAddNewClick
  }) : /*#__PURE__*/React.createElement(React.Fragment, null))), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: onClose,
    size: "xl"
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, "\u65B0\u589E"), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(validateData),
    noValidate: true
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: "2"
  }, formFields.map((item, index) => /*#__PURE__*/React.createElement(FormControl, {
    key: `form_${index}`,
    isInvalid: errors.account
  }, /*#__PURE__*/React.createElement(FormLabel, {
    htmlFor: item.field
  }, item.label), /*#__PURE__*/React.createElement(Input, _extends({
    bgColor: "gray.50",
    placeholder: item.label,
    id: item.field
  }, register(item.field, {
    required: item.label
  }))), /*#__PURE__*/React.createElement(FormErrorMessage, null, errors.account && errors.account.message))), /*#__PURE__*/React.createElement(Stack, {
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
  }, "\u53D6\u6D88"))))))), /*#__PURE__*/React.createElement(Modal, {
    isOpen: isConfirmOpen,
    onClose: onConfirmClose
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, "\u63D0\u793A"), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, null, /*#__PURE__*/React.createElement(Text, {
    fontWeight: "bold",
    mb: "1rem"
  }, "\u786E\u8BA4\u7ED1\u5B9A\u53C2\u6570\u5417\uFF1F")), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Button, {
    colorScheme: "blue",
    mr: 3,
    onClick: onConfirmClose
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: editData
  }, "\u786E\u8BA4")))));
}