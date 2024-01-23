import React from 'react';

import NamedIndicator from "@/components/NamedIndicator";

const { Text } = require('@/components/presenter')

export default function NamedIndicatorDemo(props) {

    const config = { 
        __indicator:{
            xname:'ShadowIndicator',
            props:{
                borderColor: 'transparent',
                boxShadow: '0 0px 4px rgba(0, 0, 0, 0.1)',
            },
        }
    }

    return (
        <div style={{margin: '10px'}}>
            <NamedIndicator {...config}>
                <Text content={"title"}/>
            </NamedIndicator>
        </div>
    )
}