import React from 'react';
import { Flex, Center, Box, Stack, Spacer } from "@chakra-ui/react";
import { AutoLayout } from '@/components';

import layout from './layout';

import PregressBody from './PregressBody';

export default function Index(props) {

    const { data=[] } = props;

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

    return (
        <div style={{width: '100%'}}>
            <AutoLayout {...config}/>
        </div>
    )
}