import React, { useState, useEffect } from 'react';
import appList from './index';
const promiseAjax = require('@/components/utils/request');
import { getEndpoint } from '@/components/config/common';


export default function Index(props) {

    let endpoint = 'http://static.smallsaas.cn'

    // let api = '/openapi/crud/lc_low_auto_app/lowAutoApp/lowAutoApps/1'
    // let api = '/openapi/lc/apps'

    // const [items, setItems] = useState('')

    // useEffect(_ => {
    //     getApiUrl()
    // },[])

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
        <appList />
    )
}