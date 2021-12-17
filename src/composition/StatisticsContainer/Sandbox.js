import React, { useState, useEffect } from 'react';

import StatisticsContainer from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from './gateway.json';

export default function (props) {

  let api = '';
  if (process.env.NODE_ENV === 'development') {
    api = '/x/api/statistics';
  }else{
    api = '/x/api/statistics.json'
  }
    function onItemClickHandle (data) {
        // console.log('data = ', data)
    }

    const [ data ] = useTokenRequest({api, bindFiles});
    
    // console.log('data111111111 = ', data)

    return (
          data ? (
            <StatisticsContainer {...props} data={data}/>
          ):<div></div>
    )
}