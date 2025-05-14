import React, { useState, useEffect } from 'react';
    
import { Box, ChakraProvider} from "@chakra-ui/react";
import AutoLayout from '@/components/AutoLayout';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import layout from './layout';


export default function Index(props) {

  const { items, ...rest } = props;

  // console.log('props =',props)
  /**
   * 页面配置
   */
  const config = {
    items: items,
    layout: layout,
    ...rest
  };


  return (
    <ChakraProvider>
      <Box spacing='3px'>
        <AutoLayout {...config}  isSwitch={true} />
      </Box>
    </ChakraProvider>
  )
}