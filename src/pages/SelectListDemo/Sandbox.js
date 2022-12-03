import React, { useState, useEffect } from 'react';

import RadioContainer from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from './gateway.json'

export default function (props) {

    const api = '/api/selectListData';

    // const [ data ] = useTokenRequest({api, bindFiles});

    // if(data){
    //     data.map(item => {
    //         item.checked = false;
    //         return item;
    //     })
    // }

    const data=[
        {
            "id": 1,
            "name": "陈悦",
            "avatar": "https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png",
          },
          {
            "id": 2,
            "name": "李然",
            "avatar": "https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png",
          },
          {
            "id": 3,
            "name": "刘欣",
            "avatar": "https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png",
          },
          {
            "id": 4,
            "name": "刘乐",
            "avatar": "https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png",
          },
    ]

    return (
        <div style={{width: '600px', background:'white'}}>
            <RadioContainer  data={data}/>
        </div>
    )
}