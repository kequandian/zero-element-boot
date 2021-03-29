import React from 'react';
import { AutoLayout } from '@/export';

import layout from './layout';

//加载yml文件
// import layoutOfYML from 'js-yaml-loader!./layout.yml';

const { AdItem } = require('@/composition');

export default function Index(props) {

    const { onItemClickHandle, data } = props;


    let layoutData = '';
    // /x/PublicLayoutDemo/layout.json
    const layoutJsonPath = '';
    //local layout json
    const localLayoutJson = layoutOfYML;

    if(layoutJsonPath){
        layoutData = { path: layoutJsonPath};
    }else{
        layoutData = localLayoutJson;
    }

    //Cart HoverShadowCart
    const config = {
        items: data.length > 0 ? data : [],
<<<<<<< HEAD
        layout: layout,
        localLayoutJsonPath:layoutJsonPath,
=======
        layout: layoutData
>>>>>>> 73603089dbb89d1b99bbf4fcf286d74544451dac
    };

    const onClick = (item) => {
        console.log(item)
        onItemClickHandle();
    }

    // console.log("解释 layout.yml = ", JSON.stringify(layoutOfYML, null, 2));
    // console.log('layoutOfYML = ', layoutOfYML)
    
    return (
        <AutoLayout {...config} onItemClick={onClick} >
            <AdItem />
        </AutoLayout>
    )
}