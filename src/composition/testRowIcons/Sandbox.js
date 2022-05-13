import React, { useState, useEffect } from 'react';

import TestRowIcons from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

export default function (props) {

    const api = '/api/rowIconData';

    function onItemClickHandle (data) {
        // console.log('data = ', data)
    }

    const [ data ] = useTokenRequest({api});

    return (
        <TestRowIcons {...props} data={data}/>
    )
}