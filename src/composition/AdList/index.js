import React from 'react';
import { AutoLayout } from '@/export';

// import layout from './layout';

//加载yml文件
import layoutOfYML from 'js-yaml-loader!./layout.yml';

const { AdItem } = require('@/composition');

export default function Index(props) {

    const { onItemClickHandle, data } = props;

    const layoutJsonPath = 'x/PublicLayoutDemo/layout.json';
    //Cart HoverShadowCart
    const config = {
        items: data.length > 0 ? data : [],
        layout: layoutOfYML,
        localLayoutJsonPath:layoutJsonPath,
    };

    const onClick = (item) => {
        console.log(item)
        onItemClickHandle();
    }

    // console.log("解释 layout.yml = ", JSON.stringify(layoutOfYML, null, 2));
    console.log('layoutOfYML = ', layoutOfYML)
    
    return (
        <AutoLayout {...config} onItemClick={onClick} >
            <AdItem />
        </AutoLayout>
    )
}