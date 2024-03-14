import React from 'react';

import Replacing from '@/components/gateway/Replacing'

export default function TextPreviewAutoLayout(props) {

    const data = {
        listApi: '/api/(moduleId)',
        moduleId: '278'
    }

    const ShowConvert = (data) => {
        console.log('ShowConvert = ', data)
        return <div>module: {data.moduleId} - listApi: {data.listApi}</div>
    }

    return (
        <Replacing {...data}>
            <ShowConvert/>
        </Replacing>
    )
}

