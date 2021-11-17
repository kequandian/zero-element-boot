import React, { useState, useEffect } from 'react';

import StatisticsContainer from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from './gateway.json';

export default function (props) {

    const api = '/api/statistics';
    // const api = '/x/api/testData.json';

    function onItemClickHandle (data) {
        // console.log('data = ', data)
    }

    const [ data ] = useTokenRequest({api, bindFiles});
    
    // console.log('data111111111 = ', data)

    return (
          data && data.length > 0 ? (
            <StatisticsContainer {...props} data={data}/>
          ):<div></div>
    )
}