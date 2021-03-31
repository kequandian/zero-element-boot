import React, { useState, useEffect } from 'react';
import { AutoLayout } from '@/components';

const promiseAjax = require('@/components/utils/request');

import layout from './layout';
import ListItem from './ListItem';

export default function Index(props) {

    const { onItemClickHandle } = props;

    const [data, setData] = useState([]);

    const api = '/api/adList'
    function handleQuery(API, queryData) {
        return promiseAjax(API, queryData).then(response => {
            if (response && response.code === 200) {
                const respDate = response.data;
                respDate.map(item => {
                    item.checked = false;
                    return item;
                })
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