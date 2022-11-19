import React, { useState, useEffect } from 'react';

import StandaloneContainer from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

export default function (props) {

  let api = '/openapi/crud/lc_low_auto_apis/lowAutoApis/lowAutoApises';

  const requestData = {
    pageNum: 1,
    pageSize: 1000,
    apiMethod: 'GET'
  }

  const [ data ] = useTokenRequest({api, requestData});

  // console.log('data == ', data)

  if(!data || !data.length === 0 || !data.records || !data.records.length === 0){
    return <></>
  }

  const dataX = []
  dataX.push({items:data.records})
  
  return (
      <StandaloneContainer {...props} data={dataX}/>
  )
}