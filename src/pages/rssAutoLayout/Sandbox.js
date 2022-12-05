import React, { useState, useEffect } from 'react';
import RssAutoLayout from './index';
const promiseAjax = require('@/components/utils/request');
import { getEndpoint } from '@/components/config/common';


export default function Index(props) {

    let endpoint = 'http://static.smallsaas.cn'

    let api = '/openapi/lc/apps/app'

    const [items, setItems] = useState('')

    useEffect(_ => {
        getApiUrl()
    }, [])

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
    console.log('items===', items)

    const data = {
        // avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
    }
    const itemsaa = [
        {
            desc: "",
            id: "64",
            name: "公用云盘",
            path: "https://www.aliyundrive.com/sign/in?spm=aliyundrive.index.0.0.2d836020iav7GK",
            typeId: "61",
            typeName: "文档",
            url: "https://p.ssl.qhimg.com/sdm/420_207_/t0182a1976fdf3bf5c5.jpg"
        },
        {
            desc: "",
            id: "64",
            name: "HOUSE小程序开发进度",
            path: "https://docs.qq.com/sheet/DVEpXQ1l0cGx1SnlP",
            typeId: "61",
            typeName: "文档",
            url: "https://p.ssl.qhimg.com/sdm/420_207_/t0182a1976fdf3bf5c5.jpg"
        }
    ]
    return (
        <RssAutoLayout items={itemsaa}  {...data} />
    )
}