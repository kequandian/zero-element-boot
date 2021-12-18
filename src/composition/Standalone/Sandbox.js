import React, { useState, useEffect } from 'react';

import StandaloneContainer from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

export default function (props) {

  let api = '/dev/dependency/decompile/json';

  if (process.env.NODE_ENV === 'development') {
    api = `http://192.168.3.121:8080${api}`;
  }

  const [ data ] = useTokenRequest({api});

  const newData = []
  data.map((item, index) => {
    // if(item.indexOf('.jar') > -1){
      const newItem = {}
      newItem.id = index + 1;
      newItem.value = item;
      newData.push(newItem)
    // }
  })

  const dataX = []
  dataX.push({items:newData})
  
  return (
        data.length > 0 ? (
          <StandaloneContainer {...props} data={dataX}/>
        ):<></>
  )
}