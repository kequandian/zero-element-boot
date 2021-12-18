import React, { useState } from 'react';
import { Flex, Center, Box, Stack, Spacer, VStack, Container  } from "@chakra-ui/react";
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

    let api = '/dev/dependency/decompile/json';

    if (process.env.NODE_ENV === 'development') {
      api = `http://192.168.3.121:8080${api}`;
    }

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
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        let name = item.value;
        // if(name.indexOf('/') > -1){
        //     const list = name.split('/');
        //     name = list[list.length-1]
        // }
        if(name.indexOf('@') > -1){
            const list = name.split('@');
            name = list[0]
        }
        setDetail([])
        getDetailFetch(name)
    }

    //
    const getDetailFetch = async (name) => {
        // const api = `http://localhost:8080/api/dev/dependency/decompile`;
        promiseAjax(api, {pattern:name}, {})
            .then(responseData => {
                if (responseData && responseData.code === 200) {
                    let respData = responseData.data;
                    console.log('respData = ', respData)
                    setDetail(respData);
                }
            })
    }

    //处理返回内容
    function handleContent(data){

        if(typeof data === 'string'){
            return data;
        }if(data instanceof Array && data.length > 0){
            return (
                <Stack>
                    {
                        data.map((item, index) => {
                            return  <Container maxW='container.xl'>{item}</Container>
                        })
                    }
                </Stack>
            )
        }else{
            return '';
        }

    }


    return (
        <Flex>
            <Box>
                <AutoLayout {...config} onItemClick={null}>
                    <StandaloneBody  onItemClick={onJarItemClick}/>
                </AutoLayout>
            </Box>
            <Box flex='1'>
                { showDetail && showDetail.length > 0 ? (
                    <div style={{background:'#ffffff', width:'100%', padding: '10px', marginTop:'8px'}}>
                        {handleContent(showDetail)}
                    </div>
                ): null}
            </Box>
        </Flex>
    )
}