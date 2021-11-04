import React from 'react';
import { AutoLayout } from '@/components';

// import layout from './layout_copy';
import layout from './layout';

import UserInfoItem from './UserInfoItem';

export default function Index(props) {

    const { data=[], onItemClick = ()=>{} } = props;

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

    return (
        <AutoLayout {...config} onItemClick={onItemClick}>
            <UserInfoItem />
        </AutoLayout>
    )
}