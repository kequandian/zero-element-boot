import React from 'react';
import { VStack, Text, Box } from '@chakra-ui/react';

/**
 * @param {string} title 标题 
 * 
 */
export default function TitledContainer(props) {
  const {
    children,
    title = '',
    m = '',
    ...rest
  } = props;
  const Child = React.Children.only(children);
  return /*#__PURE__*/React.createElement(VStack, null, /*#__PURE__*/React.createElement(Box, {
    w: '100%',
    p: '10px 10px 3px 10px',
    m: m,
    display: 'flex',
    alignItems: 'start'
  }, /*#__PURE__*/React.createElement(Text, {
    p: 0,
    m: 0,
    fontWeight: 'bold',
    fontSize: 20
  }, title)), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.cloneElement(Child, {
    ...rest
  })));
}