import React, { useState, useEffect } from 'react';

import StatisticsContainer from './index';

import { APIContainer } from '@/components';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from './gateway.json'

export default function (props) {

    const api = '/api/statistics';

    function onItemClickHandle (data) {
        // console.log('data = ', data)
    }

    const [ data ] = useTokenRequest({api, bindFiles});

    // return (
    //     <APIContainer API={api} extend={false}>
    //         <AdList {...props} />
    //     </APIContainer>
    // )

    return (
        <StatisticsContainer {...props} data={data}/>
    )
}