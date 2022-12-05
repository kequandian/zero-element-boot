import React, { useState, useEffect } from 'react';
import RssAutoLayout from './index';
const promiseAjax = require('@/components/utils/request');


export default function Index(props) {

    const items = [
        {
            size:70,
        title: "学生党",
        avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
    },

    {
        size:70,
    title: "学生党",
    avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
},
{
    size:70,
title: "学生党",
avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
},
{
    size:70,
title: "学生党",
avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
},
{
    size:70,
title: "学生党",
avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
},
{
    size:70,
title: "学生党",
avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
},
        {
            size:70,
        title: "学生党",
        avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
    },
    {
        size:70,
        title: "职场青年",
        avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
    },
    {
        size:70,
        title: "中年人",
        avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
    },
        
    {
        size:70,
        title: "中年人",
        avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
    }
]

  
    const data = {
        direction: "column",
        // avatarUrl: 'https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png'
    }
    return (
        <RssAutoLayout items={items}  {...data} />
    )
}