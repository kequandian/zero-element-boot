import React, { useState, useEffect } from 'react';
import RssAutoLayout from './index';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';
const promiseAjax = require('@/components/utils/request');
import { getEndpoint } from '@/components/config/common';
import layout from './layout';


export default function Index(props) {

    let endpoint = 'http://static.smallsaas.cn'

    let api = '/openapi/lc/components/components/cart'

    const [items, setItems] = useState('')

    // useEffect(_ => {
    //     getApiUrl()
    // }, [])

    // function getApiUrl() {
    //     const queryData = {};
    //     promiseAjax(api, queryData).then(resp => {
    //         if (resp && resp.code === 200) {
    //             setItems(resp.data)
    //         } else {
    //             console.error("获取api path 数据失败")
    //         }
    //     });

    // }


    return (
        // items && items.length > 0 ? (
        //     <RssAutoLayout items={items ? items : []} />)
        //     : <></>
        <PreviewAutoLayout layoutName={api} layoutApi={layout}  />

    )
}