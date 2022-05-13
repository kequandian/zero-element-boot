import React from 'react';
import { AutoLayout } from '@/components';

import layoutJson from './layout';

export default function Index(props) {

    const { data=[], onItemClick } = props;

    const config = {
        items: data.length > 0 ? data : [],
        layout: layoutJson
    };

    function onIClick() {

    }

    return (
        <div style={{ width: '600px'}}>
            <AutoLayout {...config} onItemClick={onIClick} />
        </div>
    )
}