import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

import useSizeClient from '../../hooks/useSizeClient';

require('./index.less');

/**
 * 与 Outline区别, Border占满父空器, 而Outline只包裹内容
 * @param {*string} stroke
 * @param {px} corner
 * @param {px} margin
 * @returns 
 */
// Box 官网地址：https://chakra-ui.com/docs/layout/box
export default function Border(props) {

  const { children, stroke='1px solid #FF037D', corner='6px', margin='2px'} = props;

  const parentRef = useRef();
  // const clientSize=  useSizeClient({ ref: parentRef });

  const styles = {
    border: `${stroke}`,
    borderRadius: corner,
    margin: margin
  }

  return (
    <Box className='c-outline-item' style={styles} ref={parentRef}>
      {React.Children.map(children, child => (
        child
      ))}
    </Box>
  )
  
}