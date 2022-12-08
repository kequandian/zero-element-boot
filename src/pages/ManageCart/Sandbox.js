import React, { useState, useEffect } from 'react';
import RssAutoLayout from './index';
const promiseAjax = require('@/components/utils/request');
import {  getEndpoint } from '@/components/config/common';


export default function Index(props) {

    let endpoint='http://static.smallsaas.cn'

    let api =  '/openapi/lc/components/components/cart'

    const [items, setItems] = useState('')

    useEffect(_ => {
        getApiUrl()
    })

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
    // console.log('items1111111111111111111===', items)

    const itemaa=[
        {
            componentName:"Cart"
        },
        {
            componentName:"HCenter"
        },
        {
            componentName:"HCenter"
        }
    ]

    const data = {
        direction: "column",
        // avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
    }
    return (
        items && items.length> 0?(
        <RssAutoLayout items={itemaa}  />)
        :<></>
    )
}