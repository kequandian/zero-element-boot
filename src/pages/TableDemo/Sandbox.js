import React, { useState, useEffect } from 'react';

import TableContainer from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from './gateway.json'

export default function (props) {

    const api = '/api/tabledata';

    function onItemClickHandle (data) {
        // console.log('data = ', data)
    }

    const [ data ] = useTokenRequest({api, bindFiles});

    return (
        <TableContainer {...props} data={data}/>
    )
}