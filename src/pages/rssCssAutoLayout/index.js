import React, { useState, useEffect } from 'react';
const promiseAjax = require('@/components/utils/request');
import { Box, ChakraProvider} from "@chakra-ui/react";
import AutoLayout from '@/components/AutoLayout';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import layout from './layout';


export default function Index(props) {

  const {  ...rest } = props;

  let api = `/openapi/lc/autoApi/lowAutoPageStyles/rss/json/H2`

  const [items, setItems] = useState('')

  useEffect(_ => {
      getApiUrl()
  }, [])

  function getApiUrl() {
      const queryData = {};
      promiseAjax(api, queryData).then(resp => {
          if (resp && resp.code === 200) {
              setItems(resp.data)
          } else {
              console.error("获取api path 数据失败")
          }
      });

  }
  // console.log('props =',props)
  /**
   * 页面配置
   */
  const config = {
    items: items && items.length > 0 ? items :[],
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