import React, { useState, useEffect } from 'react';
import RssAutoLayout from './index';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';
const promiseAjax = require('@/components/utils/request');
import { getEndpoint } from '@/components/config/common';
import layout from './layout';


export default function Index(props) {

    let endpoint = 'http://static.smallsaas.cn'

    let api = '/openapi/crud/app/lowAutoPage/lowAutoPages'

    const [items, setItems] = useState('')

    useEffect(_ => {
        getApiUrl()
    }, [])

    function getApiUrl() {
        const queryData = {};
        promiseAjax(api, queryData).then(resp => {
            if (resp && resp.code === 200) {
                setItems(resp.data.records)
            } else {
                console.error("获取api path 数据失败")
            }
        });

    }
console.log('items ==',items)

    return (
        items && items.length > 0 ? (
            <RssAutoLayout items={items ? items : []} />)
            : <></>
    )
}