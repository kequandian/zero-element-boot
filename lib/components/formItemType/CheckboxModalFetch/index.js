import React, { useState, useEffect, useRef } from 'react';
import { Spinner, CheckboxGroup, Checkbox, Stack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, SimpleGrid } from "@chakra-ui/react";
import { useForceUpdate } from "../../hooks/lifeCycle";

const promiseAjax = require("../../utils/request");

export default function CheckboxFetch(props) {
  const {
    field,
    defaultValue,
    options,
    saveData,
    onChange,
    props: optProps,
    rules
  } = props;
  const {
    api: optionAPI,
    label,
    value,
    itemField,
    modalTitle: mTitle
  } = options;
  const [selectedData, setSelectedData] = useState([]);
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modelTitle, setModelTitle] = useState(mTitle);
  const [btnTxt, setBtnTxt] = useState(mTitle);
  const [showDefaultValue, setShowDefaultValue] = useState([]);
  const forceUpdate = useForceUpdate();
  const initialRef = useRef();
  const finalRef = useRef();
  useEffect(_ => {
    getList();
  }, []);
  useEffect(_ => {
    if (Array.isArray(defaultValue) && defaultValue.length > 0) {
      const defaultSelected = [];
      defaultValue.map(item => {
        let defaultSelectedItem = itemField ? item[itemField].toString() : item;
        defaultSelected.push(defaultSelectedItem);
      });
      handleBtnTxt(defaultSelected);
      setSelectedData(defaultSelected);
    }
  }, [defaultValue]); //获取复选框数据

  function getList() {
    const api = `${optionAPI}`;
    const queryData = {};
    setLoading(true);
    promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        setListData(resp.data.records); // if(onChange){
        //     onChange(resp.data.records)
        // }
      } else {
        console.error("select 获取数据失败");
      }
    }).finally(_ => {
      setLoading(false);
      forceUpdate();
    });
  }

  const handleChange = data => {
    const items = [];

    if (Array.isArray(data) && data.length > 0) {
      data.map(item => {
        if (itemField) {
          const i = {};
          i[itemField] = item;
          items.push(i);
        } else {
          items.push(item);
        }
      });
      setSelectedData(items);
    }
  };

  const onOk = () => {
    const subData = {};
    subData[field] = selectedData;
    handleBtnTxt(selectedData);
    onChange({ ...subData
    });
    setIsOpen(false);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleBtnTxt = () => {
    if (Array.isArray(selectedData) && selectedData.length > 0) {
      let txt = '';
      selectedData.map(item => {
        if (itemField) {
          const i = {};
          txt += item[itemField];
        } else {
          txt += item;
        }
      });
      setBtnTxt(txt);
    }
  }; //处理回显数据


  const showSelectedData = dataList => {
    const showList = [];
    dataList.map(item => {
      const i = itemField ? item[itemField] : item;
      showList.push(i);
    });
    return showList;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    colorScheme: "teal",
    variant: "outline",
    size: "sm",
    onClick: () => setIsOpen(true)
  }, btnTxt), /*#__PURE__*/React.createElement(Modal, {
    initialFocusRef: initialRef,
    finalFocusRef: finalRef,
    isOpen: isOpen,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(ModalOverlay, null), /*#__PURE__*/React.createElement(ModalContent, null, /*#__PURE__*/React.createElement(ModalHeader, null, modelTitle), /*#__PURE__*/React.createElement(ModalCloseButton, null), /*#__PURE__*/React.createElement(ModalBody, {
    pb: 6
  }, loading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(Stack, {
    spacing: "6"
  }, /*#__PURE__*/React.createElement(CheckboxGroup, {
    colorScheme: "gray.50",
    defaultValue: selectedData ? showSelectedData(selectedData) : [],
    onChange: handleChange
  }, /*#__PURE__*/React.createElement(SimpleGrid, {
    columns: 3,
    spacingX: "20px",
    spacingY: "20px"
  }, listData && listData.length > 0 && listData.map((item, index) => /*#__PURE__*/React.createElement(Checkbox, {
    value: item[value],
    key: `${index}_checkbox`
  }, item[label])))), /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    spacing: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "solid",
    isLoading: loading,
    size: "sm",
    onClick: onOk
  }, "\u4FDD\u5B58"), /*#__PURE__*/React.createElement(Button, {
    width: "100px",
    colorScheme: "teal",
    variant: "outline",
    onClick: onClose,
    size: "sm"
  }, "\u53D6\u6D88")))))));
}