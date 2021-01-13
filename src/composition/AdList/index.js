import React from 'react';
import { AutoLayout } from '@/export';

import layout from './layout';
const { AdItem } = require('@/composition');

export default function Index(props) {

    const { onItemClickHandle, data } = props;

    //Cart HoverShadowCart
    const config = {
        items: data.length > 0 ? data : [],
        layout,
    };

    const onClick = (item) => {
        console.log(item)
        onItemClickHandle();
    }

    return (
        <AutoLayout {...config} onItemClick={onClick} >
            <AdItem />
        </AutoLayout>
    )
}