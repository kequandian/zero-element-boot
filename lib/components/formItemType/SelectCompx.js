function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState, useEffect } from 'react';
import { Spinner, Select } from "@chakra-ui/react";
import { useForceUpdate } from "../hooks/lifeCycle";
export default function SelectFetch(props) {
  const {
    field,
    register,
    currentData,
    defaultValue,
    options,
    saveData,
    onChange,
    props: optProps,
    rules
  } = props;
  const {
    label,
    value,
    option: mapList
  } = options;
  const [data, setData] = useState(mapList);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const forceUpdate = useForceUpdate();

  //处理额外提交的字段和值
  function selectedChange(s) {
    const id = s.target.value;
    let currentSelected;
    setSelectedValue(id);
    data.map(item => {
      if (item.id === id) {
        currentSelected = item;
      }
    });
    if (onChange) {
      if (saveData) {
        const formatData = {};
        Object.keys(saveData).map(key => {
          formatData[key] = currentSelected[saveData[key]];
        });
        // console.log(' formatData == ', formatData)
        onChange(formatData);
      }
    }
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, loading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(Select, _extends({
    bgColor: "gray.50",
    placeholder: optProps.placeholder ? optProps.placeholder : `请选择`,
    id: field,
    value: selectedValue || defaultValue
  }, register(field, rules && rules.isRequired && optProps ? {
    required: optProps.placeholder ? optProps.placeholder : `请选择`
  } : {}), {
    // autoFocus
    onChange: selectedChange
  }), data && data.length > 0 && data.map((item, index) => /*#__PURE__*/React.createElement("option", {
    key: `${index}_option`,
    value: item.value
  }, item.label))));
}