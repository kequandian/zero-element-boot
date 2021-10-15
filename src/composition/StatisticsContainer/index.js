import React from 'react';
import { AutoLayout } from '@/components';

import layout from './layout';

import StatisticsBody from './StatisticsBody';

export default function Index(props) {

    const { data=[] } = props;

    let layoutData = '';
    const layoutJsonPath = '';
    const localLayoutJson = layout;

    if(layoutJsonPath){
        layoutData = { path: layoutJsonPath};
    }else{
        layoutData = localLayoutJson;
    }

    const config = {
        items: data.length > 0 ? data : [],
        layout: layoutData
    };

    const onAdItemClick = (value) => {
        console.log("value = ", value)
        // onItemClickHandle();
    }

    return (
        <AutoLayout {...config} onItemClick={null}>
            <StatisticsBody />
        </AutoLayout>
    )
}