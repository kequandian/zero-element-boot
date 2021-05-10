import React from 'react';
import { AutoLayout } from '@/components';

import layout from './layout';

//加载yml文件
import layoutOfYML from 'js-yaml-loader!./layout.yml';

import ListItem from '@/pages/CheckboxDemo/ListItem';

export default function Index(props) {

    const { data=[] } = props;

    let layoutData = '';
    // /x/PublicLayoutDemo/layout.json
    const layoutJsonPath = '';
    //local layout json
    const localLayoutJson = layout;

    if(layoutJsonPath){
        layoutData = { path: layoutJsonPath};
    }else{
        layoutData = localLayoutJson;
    }

    //Cart HoverShadowCart
    const config = {
        items: data.length > 0 ? data.map(item => {item.checked = false; return item}) : [],
        layout: layoutData
    };

    const onListItemClick = (value) => {
        console.log("value = ", value)
        // onItemClickHandle();
    }

    // console.log("解释 layout.yml = ", JSON.stringify(layoutOfYML, null, 2));
    // console.log('layoutOfYML = ', layoutOfYML)
    
    return (
        <AutoLayout {...config} onItemClick={null}>
            <ListItem onListItemClick={onListItemClick}/>
        </AutoLayout>
    )
}