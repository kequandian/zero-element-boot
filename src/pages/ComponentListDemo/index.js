import React, { useState, useEffect } from 'react';
import { AutoLayout } from '@/export';

const promiseAjax = require('@/utils/request');

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
        layout: {
            xname: 'SelectBox',
            props: {
              align: 'start',
              direction: 'columm',
            },
            gateway: {
              xname: 'Binding',
              props: {
                binding: {
                  componentName: 'componentName',
                  records: 'records'
                }
              }
            },
            cart: {
              xname: 'Cart',
              props: {
                padding: '16px',
                isOnHover: false
              }
            },
            container: 'SelectedList'
          },
    };

    const onClick = (item) => {
        console.log(item)
        onItemClickHandle();
    }

    return (
        <AutoLayout {...config} onItemClick={onClick} >
            <ListItem />
        </AutoLayout>
    )
}