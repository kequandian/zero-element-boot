import React, { useState, useEffect } from 'react';

import AdList from './index';

const promiseAjax = require('@/components/utils/request');

import { APIContainer } from '@/components';

export default function (props) {

    const api = '/api/adList';

    // const [data, setData] = useState([]);

    // function handleQuery(API, queryData) {
    //     return promiseAjax(API, queryData).then(response => {
    //         if (response && response.code === 200) {
    //             setData(response.data);
    //         }
    //     });
    // }

    // useEffect(_ => {
    //     handleQuery(api);
    // }, []);

    return (
        <APIContainer API={api} extend={false}>
            <AdList {...props} />
        </APIContainer>
    )
}