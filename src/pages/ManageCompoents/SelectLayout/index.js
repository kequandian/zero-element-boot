import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import AutoLayout from '@/components/AutoLayout';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import layout from './layout';
const promiseAjax = require('@/components/utils/request');


export default function Index(props) {

  const { ...rest } = props;


  let api = '/openapi/lc/components/components/layout'

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
  /**
   * 页面配置
   */

  const aa = [
    {
      "componentOption": "layout",
      "componentType": "Flexbox",
      "name": "Layout测试",
      "componentName": "thisLayouot",
      "id": 25,
      "items": [
        {
          "componentId": 25,
          "propDefaultValue": "start",
          "id": 127,
          "propName": "align"
        },
        {
          "componentId": 25,
          "propDefaultValue": "row",
          "id": 128,
          "propName": "direction"
        }
      ]
    }
  ]
//   setTimeout(() => {
//     history.push(`/enroll/RegistrationSuccessful?Permissions=${Permissions}`)
// }, 200)

  const config = {
    // items: items && items.length> 0? items :[],
    items: aa,
    layout: layout,
    ...rest
  };
  console.log('config =', config)


  return (
    <Box padding='30px 20px' >
      <AutoLayout {...config} />
    </Box>
  )
}