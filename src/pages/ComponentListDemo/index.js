import React, { useState, useEffect } from 'react';
import { AutoLayout } from '@/components';

const promiseAjax = require('@/components/utils/request');

import layout from './layout';
import ListItem from './ListItem';

export default function Index(props) {

    const { onItemClickHandle } = props;

    const api = '/api/componentList'

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

    //Cart HoverShadowCart
    const config = {
        // items: data.length > 0 ? data : [],
        API:api,
        layout,
    };

    const onClick = (item) => {
        // onItemClickHandle(item)
    }

    return (
      <div style={{width: '1250px'}}>
        <AutoLayout {...config} onItemClick={onClick}>
            <ListItem/>
        </AutoLayout>
      </div>
    )
}