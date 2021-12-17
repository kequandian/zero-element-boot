import React, { useState, useEffect } from 'react';

import StandaloneContainer from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

export default function (props) {

  let api = 'http://localhost:8080/api/dev/dependency/json';

  // if (process.env.NODE_ENV === 'development') {
  // }else{
  // }

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