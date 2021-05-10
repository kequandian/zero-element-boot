import React, { useState, useEffect } from 'react';

import AdList from './index';

import { APIContainer } from '@/components';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from './gateway.json'

export default function (props) {

    const api = '/api/adList';

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
        <AdList {...props} data={data}/>
    )
}