function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Text } from "@chakra-ui/react";

/**
 * 
 * @param { string } content 展示的数据
 * 其他参数，参考chakra-ui/Text 的组件参数说明: https://chakra-ui.com/docs/components/text
 */

export default function TextIndex(props) {
  // remove useless
  const {
    ...data
  } = props;

  // main
  const {
    content,
    ...others
  } = data;

  // console.log('Text others = ',others)

  return /*#__PURE__*/React.createElement(Text, _extends({
    m: 0
  }, others), content);
}