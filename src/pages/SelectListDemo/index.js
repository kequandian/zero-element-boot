import React from 'react';
import { AutoLayout } from '@/components';

import layoutJson from './layout';

export default function Index(props) {

    const { data=[] } = props;

    const config = {
        items: data.length > 0 ? data : [],
        layout: layoutJson
    };
    console.log("data == ", data)
    console.log("config == ", config)

    // const onHandleItemClick = (data) => {
    //     //TODO
    //     console.log("data == ", data)
    // }

    return (
        // <>11112</>
        <AutoLayout {...config}
        //  onItemClick={onHandleItemClick}
         />
    )
}