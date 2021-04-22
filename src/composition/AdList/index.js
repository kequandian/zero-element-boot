import React from 'react';
import { AutoLayout } from '@/components';

import layout from './layout';

//加载yml文件
import layoutOfYML from 'js-yaml-loader!./layout.yml';

const { AdItem } = require('@/composition');

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
        items: data.length > 0 ? data : [],
        layout: layoutData
    };

    const onAdItemClick = (value) => {
        console.log("value = ", value)
        // onItemClickHandle();
    }

    // console.log("解释 layout.yml = ", JSON.stringify(layoutOfYML, null, 2));
    // console.log('layoutOfYML = ', layoutOfYML)
    
    return (
        <AutoLayout {...config} onItemClick={null}>
            <AdItem onAdItemClick={onAdItemClick}/>
        </AutoLayout>
    )
}