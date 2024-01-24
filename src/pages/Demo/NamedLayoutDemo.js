import React from 'react';

import { NamedLayout } from "@/components";

const { Text } = require('@/components/presenter')

export default function NamedCartDemo(props) {

    const config = { 
        __layout:{
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'column'
            },
        }
    }

    return (
        <div style={{margin: '10px'}}>
            <NamedLayout {...config}>
                <Text content={"title"} />
                <Text content={"title1"} />
                <Text content={"title2"} />
            </NamedLayout>
        </div>
        
    )
}