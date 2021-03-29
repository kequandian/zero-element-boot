import React from 'react';
import { AutoLayout } from '@/export';

import layout from './layout';
import ListItem from './ListItem';

require('./index.less');

export default function Index(props) {

    const { componentName, records } = props;

    //Cart HoverShadowCart
    const config = {
        items: records.length > 0 ? records : [],
        layout,
    };

    const onClick = (item) => {
    }

    const onChildItemClick = (item) => {
        console.log(' III onChildItemClick name = ', item.name)
        console.log(' III onChildItemClick pathUrl = ', item.pathUrl)
        console.log(' III onChildItemClick imageUrl = ', item.imageUrl)
    }

    function onChange(componentName){
        console.log("componentName = ", componentName)
    }

    return (
        <div className="content">
            <div className="title">
                {componentName}
            </div>
            <AutoLayout {...config} onItemClick={onClick} >
                <ListItem onItemClick={onChildItemClick}/>
            </AutoLayout>
            <div className="footer">
                <div className="bt" onClick={() => onChange(componentName)}>切换</div>
            </div>
        </div>
    )
}