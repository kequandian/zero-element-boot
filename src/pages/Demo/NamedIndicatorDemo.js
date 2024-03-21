import React from 'react';

import NamedIndicator from "@/components/NamedIndicator";
import TitleIndicator from "@/components/indicator/TitleIndicator";

const { Text } = require('@/components/presenter')

export default function NamedIndicatorDemo(props) {

    const config = { 
        // __indicator:{
        //     xname:'ShadowIndicator',
        //     props:{
        //         borderColor: 'transparent',
        //         boxShadow: '0 0px 4px rgba(0, 0, 0, 0.1)',
        //     },
        // }

        __indicator:{
            xname:'TitleIndicator',
            props:{
            },
            indicatorData:{
                titleContent: '111111',
            }
        }
    }

    return (
        <div style={{ width: '350px', margin: "10px"}}>
            <TitleIndicator indicatorData={{titleContent: '111111'}}>
                <Text content={"content"}/>
            </TitleIndicator>
        </div>
    )
}