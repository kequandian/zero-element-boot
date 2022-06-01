function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Input // 文本框
} from "@chakra-ui/react";
export default function InputCompx(props) {
  const {
    field,
    register,
    defaultValue,
    props: optProps,
    rules
  } = props;
  return /*#__PURE__*/React.createElement(Input, _extends({
    bgColor: "gray.50",
    placeholder: optProps.placeholder ? optProps.placeholder : `请输入`,
    id: field,
    defaultValue: defaultValue
  }, register(field, rules && rules.isRequired && optProps ? {
    required: optProps.placeholder ? optProps.placeholder : `请输入`
  } : {})));
}