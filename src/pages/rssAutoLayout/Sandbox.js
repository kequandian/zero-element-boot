import React, { useState, useEffect } from 'react';
import RssAutoLayout from './index';
const promiseAjax = require('@/components/utils/request');
import {  getEndpoint } from '@/components/config/common';


export default function Index(props) {

    let endpoint='http://static.smallsaas.cn'

    let api =  endpoint +  '/openapi/lc/autoApi/lowAutoPageStyles/rss/list/group/styleName'

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
    // console.log('items===', items)

    const data = {
        direction: "column",
        // avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
    }
    return (
        <RssAutoLayout items={items}  {...data} />
    )
}