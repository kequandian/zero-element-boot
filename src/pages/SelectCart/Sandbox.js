import React, { useState, useEffect } from 'react';
import RssAutoLayout from './index';
const promiseAjax = require('@/components/utils/request');
import {  getEndpoint } from '@/components/config/common';


export default function Index(props) {

    let endpoint='http://static.smallsaas.cn'

    let api =  '/openapi/lc/components/components/cart'
    // let api =  '/openapi/lc/components/components/gateway'
    // let api =  '/openapi/lc/components/components/layout'

    const [items, setItems] = useState('')

    useEffect(_ => {
        getApiUrl()
    },[])

    function getApiUrl() {
        const queryData = {};
        promiseAjax(api, queryData).then(resp => {
            if (resp && resp.code === 200) {
                setItems(resp.data)
            } else {
                console.error("获取api path 数据失败")
            }
        });
    }
    
    const data = {
        direction: "column",
        // avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
    }
    return (
        items && items.length> 0?(
        <RssAutoLayout items={items}  />)
        :<></>
    )
}