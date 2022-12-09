import React, { useState, useEffect } from 'react';
import { Box, ChakraProvider } from "@chakra-ui/react";
import AutoLayout from '@/components/AutoLayout';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import layout from './layout';
const promiseAjax = require('@/components/utils/request');


export default function Index(props) {

  const { ...rest } = props;

  let api = '/api/u/rss/master'

  const [items, setItems] = useState('')

  useEffect(_ => {
    getApiUrl()
  }, [])

  function getApiUrl() {
    const queryData = {};
    promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        setItems(resp.data.records)
      } else {
        console.error("获取api path 数据失败")
      }
    });
  }
// const items=[
//   {},{}
// ]

  console.log('items =', items)
  /**
   * 页面配置
   */
  const config = {
    items: items && items.length > 0 ? items : [],
    layout: layout,
    ...rest
  };


  return (
    <ChakraProvider>
      <Box padding='30px 20px' w='830px'  >
        <AutoLayout {...config} isSwitch={true} />
      </Box>
    </ChakraProvider>
  )
}