import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import NamedIndicator from "@/components/NamedIndicator";
import TitleIndicator from "@/components/indicator/TitleIndicator";
import MultiActionsIndicator from "@/components/indicator/MultiActionsIndicator";

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
                scale: 1,
            },
            indicatorData:{
                titleContent: '111111',
            }
        }
    }

    return (
        <ChakraProvider>
            <div style={{ width: '350px', height: '350px', background: '#ccc'}}>
                <TitleIndicator indicatorData={{titleContent: 'Title'}}>
                    <Text content={"content"}/>
                </TitleIndicator>
            </div>
        </ChakraProvider>
        
    )
}