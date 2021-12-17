import React, { useState } from 'react';
import { Flex, Center, Box, Stack, Spacer  } from "@chakra-ui/react";
import { AutoLayout } from '@/components';
const promiseAjax = require('@/components/utils/request');

import layout from './layout';

import StandaloneBody from './StandaloneBody';

export default function Index(props) {

    const { data=[] } = props;

    const [ showDetail, setDetail ] = useState('');

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

    const onJarItemClick = (item) => {
        let name = item.value;
        if(name.indexOf('/') > -1){
            const list = name.split('/');
            name = list[list.length-1]
        }
        getDetailFetch(name)
    }


    const getDetailFetch = async (name) => {
        const api = `http://localhost:8080/api/dev/dependency/decompile`;
        promiseAjax(api, {pattern:name}, {})
            .then(responseData => {
                if (responseData && responseData.code === 200) {
                    let respData = responseData.data;

                    console.log('respData = ', respData)
                }
            })
    }


    return (
        <Flex>
            <Box>
                <AutoLayout {...config} onItemClick={null}>
                    <StandaloneBody  onItemClick={onJarItemClick}/>
                </AutoLayout>
            </Box>
            <Box flex='1'>
                <div style={{background:'#ffffff', width:'100%', padding: '10px', marginTop:'8px'}}>
                    {showDetail}
                </div>
            </Box>
        </Flex>
    )
}