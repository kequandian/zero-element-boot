import React, { useState, useEffect } from 'react';
import { ChakraProvider, Flex, Box, VStack, Spacer, Button } from "@chakra-ui/react";

import { AutoLayout } from '@/components';
import promiseAjax from '@/components/utils/request';

import layout from './layout';

export default function Index(props) {

    const {  } = props;

    const [ listData, setListData ] = useState([])

    let api = '/api/userData';

    useEffect(() => {
        console.log('首次加载')
        const queryData = {}
        fetchData(api, queryData)
    }, []); 

    useEffect(() => {
        
    }, []); 

    let layoutData = '';
    const layoutJsonPath = '';
    const localLayoutJson = layout;

    if(layoutJsonPath){
        layoutData = { path: layoutJsonPath};
    }else{
        layoutData = localLayoutJson;
    }
    const config = {
        items: listData,
        layout: layoutData
    };

    //获取列表信息
    const fetchData = (api, queryData ) => {
        return promiseAjax(api, queryData).then(resp => {
            if (resp && resp.code === 200) {
                const list = resp.data;
                setListData(list);
            }
        });
    }

    const onUserItemClick = (item) => {
        const id = item.id;
        console.log('id = ', id)
        alert(`选择的用户id为: ${id}`)
    }

    const callback = (item) => {

        console.log('item1111111 = ', item)
    }

    return (
        <ChakraProvider>
            <div style={{width: '500px'}}>
                <VStack align='stretch' spacing='-2'>
                    <Box>
                        <AutoLayout {...config} onItemClick={onUserItemClick} cb={callback}/>
                    </Box>
                </VStack>
            </div>
            
        </ChakraProvider>
    )

}