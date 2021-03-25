import React, { useState, useEffect } from 'react';
import { AutoLayout } from '@/export';

const promiseAjax = require('@/utils/request');

import layout from './layout';
import ListItem from './ListItem';

export default function Index(props) {

    const { onItemClickHandle } = props;

    const api = '/api/componentList'

    const [data, setData] = useState([]);

    function handleQuery(API, queryData) {
        return promiseAjax(API, queryData).then(response => {
            if (response && response.code === 200) {
                setData(response.data);
            }
        });
    }

    useEffect(_ => {
        handleQuery(api);
    }, []);

    //Cart HoverShadowCart
    const config = {
        items: data.length > 0 ? data : [],
        layout,
    };

    const onClick = (item) => {
    }

    const onChildItemClick = (item) => {
    }

    return (
      <div style={{width: '1250px'}}>
        <AutoLayout {...config} onItemClick={onClick}>
            <ListItem onItemClick={onChildItemClick} />
        </AutoLayout>
      </div>
    )
}