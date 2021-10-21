import React, { useState, useEffect } from 'react';

import SelectContainer from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from './gateway.json'

export default function (props) {

    const api = '/api/selectdata';

    function onItemClickHandle (data) {
        // console.log('data = ', data)
    }

    const [ data ] = useTokenRequest({api, bindFiles});

    return (
        <div style={{background:'white'}}>
            <SelectContainer {...props} data={data}/>
        </div>
    )
}