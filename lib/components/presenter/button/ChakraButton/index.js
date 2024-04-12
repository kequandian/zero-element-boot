import React from 'react';
import { Button } from '@chakra-ui/react';

/**
 * 
 * @param {string} content 文字内容
 * @param {*} rest button 组件属性
 */

export default function ChakraButton(props) {
  const {
    children,
    content,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Button, rest, children || content);
}