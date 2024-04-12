import React, { forwardRef } from 'react';
import { Center } from '@chakra-ui/react';

/**
 * 
 * 
 */

export default /*#__PURE__*/forwardRef(function CenterIndex(props, ref) {
  const {
    children
  } = props;
  return /*#__PURE__*/React.createElement(Center, {
    h: '100%'
  }, children);
});