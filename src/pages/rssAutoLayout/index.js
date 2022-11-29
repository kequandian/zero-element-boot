import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import AutoLayout from '@/components/AutoLayout';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import layoutJson from './layout';
const promiseAjax = require('@/components/utils/request');


export default function Index(props) {

  // 参数
  const { layoutApi, layoutName, layoutId, ...rest } = props;

  let api = 'http://static.smallsaas.cn/openapi/lc/autoApi/lowAutoPageStyles/rss/list/group/styleName'

  // 判断 layoutApi 是否为空，如果为空，则用 layoutName 拼接api路径
  // let localLayoutApi = ''
  // if(layoutApi || layoutName){
  //  const localLayoutApi =  '/api/crud/fieldModel/fieldModels'
  // }else if(layoutId){
  // localLayoutApi = `/form?id=${layoutId}`
  // }

  // 从api获取显示数据

  const [apiPath, setApiPath] = useState('')

  useEffect(_ => {
    getApiUrl()
  })

  function getApiUrl() {
    const queryData = {};
    promiseAjax(api, queryData).then(resp => {
      if (resp && resp.code === 200) {
        setApiPath(resp.data)
      } else {
        console.error("获取api path 数据失败")
      }
    });
  }

  // console.log(apiPath, ' === apiPath')
  const dataX = apiPath

  // 从layoutApi获取layoutJson
  // const respLayoutData = useTokenRequest({ api: localLayoutApi });
  // const layoutJson = respLayoutData && respLayoutData[0]
  // console.log('layoutJson===',respLayoutData)

  /**
   * 页面配置
   */
  const config = {
    items: dataX.length > 0 ? dataX : [],
    layout: layoutJson,
    ...rest
  };
  console.log(dataX, ' === dataX')

  // 控制台输出信息
  const onPreviewItemClick = (item) => {
    //TODO
    console.log(item, ' === item')
  }

  return (
    <Box spacing='3px'>
      <AutoLayout {...config} onItemClick={onPreviewItemClick} />
    </Box>
  )
}