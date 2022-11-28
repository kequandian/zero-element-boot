import React from 'react';
import { AutoLayout } from '@/components';

import layoutJson from './layout';

export default function Index(props) {

    const { data=[] } = props;

    const config = {
        items: data.length > 0 ? data : [],
        layout: layoutJson
    };

    const onHandleItemClick = (data) => {
        //TODO
        console.log("data == ", data)
    }

    return (
        <AutoLayout {...config} onItemClick={onHandleItemClick}/>
    )
}