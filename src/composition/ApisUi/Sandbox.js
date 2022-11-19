import React, { useState, useEffect } from 'react';

import StandaloneContainer from './index';
const promiseAjax = require('@/components/utils/request');

// import useTokenRequest from '@/components/hooks/useTokenRequest';

export default function (props) {

  const params = props.location.query ||  qs.parse(props.location.search.split('?')[1])
  
  const [ data, setData ] = useState({})

  useEffect(_ => {
    setData([])
    getData()
  }, [params])

  function getData() {

    let apiStr = '/openapi/crud/lc_low_auto_apis/lowAutoApis/lowAutoApises';
    const api = `${apiStr}`;
      const queryData = {
        pageNum: 1,
        pageSize: 1000,
        apiMethod: (params && params.method) || ''
      };
      promiseAjax(api, queryData).then(resp => {
          if (resp && resp.code === 200) {
            
            const dataX = []
            dataX.push({items: resp.data.records})
            setData(dataX)
          } else {
              console.error("获取api 数据失败")
          }
      }).finally(_ => {
      });
    
  }

  return (
    <>
      { data && data.length > 0 ? (
        <StandaloneContainer method={(params && params.method) || ''} data={data}/>
      ):<></>}
    </>
  )
}