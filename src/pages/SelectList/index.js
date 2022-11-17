import React from 'react';
import { AutoLayout } from '@/components';

// import layout from './layout_copy';
import layout from './Sandbox/layout';

// import SelectUpperRightItem from './Sandbox/SelectUpperRightItem';
// import SelectRightIconItem from './Sandbox/SelectRightIconItem';

export default function Index(props) {

    const { data=[], } = props;

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

    const itemClick = (itemData) => {
        console.log('itemData == ', itemData)
    }

    return (
        <AutoLayout {...config} onItemClick={itemClick}>
            {/* <SelectUpperRightItem /> */}
            {/* <SelectRightIconItem /> */}
        </AutoLayout>
    )
}