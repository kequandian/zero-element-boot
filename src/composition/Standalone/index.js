import React, { useState } from 'react';
import { Flex, Box, Stack, VStack, Container, Button  } from "@chakra-ui/react";
import { AutoLayout } from '@/components';
import Loading from '@/components/loading';
const promiseAjax = require('@/components/utils/request');
import JarItem from '@/composition/Standalone/JarItem';

import layout from './layout';

export default function Index(props) {

    const { data=[], sign='' } = props;

    const [ isShowList, setIsShowList ] = useState(true);
    const [ isShowData, setIsShowData ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ showDetail, setDetail ] = useState('');
    const [ currentItemName, setCurrentItemName ] = useState('');

    let layoutData = '';
    const layoutJsonPath = '';
    const localLayoutJson = layout;

    let api = '/dev/dependency/json';

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
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        let name = item.value;
        // if(name.indexOf('/') > -1){
        //     const list = name.split('/');
        //     name = list[list.length-1]
        // }
        if(name.indexOf('@') > -1){
            const list = name.split('@');
            name = list[0]
        }
        console.log('item == ', item)
        setDetail([])
        getDetailFetch(name, 1)
    }

    //
    const getDetailFetch = async (name, num) => {

        if(num == 1){
            setCurrentItemName(name)
        }
        // const api = `http://localhost:8080/api/dev/dependency/decompile`;
        setIsShowList(false)
        setIsLoading(true)
        promiseAjax(api, {pattern:name, sign}, {})
            .then(responseData => {
                if (responseData && responseData.code === 200) {
                    let respData = responseData.data;
                    setDetail(respData);
                    setIsShowData(true)
                }else{
                    setIsShowList(true)
                    setIsShowData(false)
                }
                setIsLoading(false)
            })
    }

    //处理返回内容
    function handleContent(data){

        if(typeof data === 'string'){
            return data;
        }if(data instanceof Array && data.length > 0){
            return (
                <Stack spacing='3px'>
                    {
                        data.map((item, index) => {
                            if(item.indexOf("/*") > -1 || item.indexOf("*") > -1){
                                return <div style={{ whiteSpace: 'pre-wrap'}} key={`${index}_item`}>{item}</div>;
                            }else{
                                // return  <Container maxW='container.xl' key={index}>{item}</Container>
                                if(item.indexOf("BOOT-INF") > -1){
                                    return  (
                                        <div key={`${index}_item`} onClick={() => getDetailFetch(item, 2) }>
                                            <JarItem value={item} />
                                        </div>
                                    )
                                }else{
                                    return  <Container maxW='container.xl' key={`${index}_item`}>{item}</Container>
                                }
                            }
                        })
                    }
                </Stack>
            )
        }else{
            return '';
        }

    }

    function goBack () {
        setIsShowList(true)
        setIsShowData(false)
        setCurrentItemName('')
    }


    return (
        <Flex>
            
            <Box>
                <VStack spacing='3px'>
                    <div style={{minWidth: '500px', width: '100%', height: '60px', lineHeight: '60px', backgroundColor: '#ffffff', padding:'20px 10px 10px 25px', marginBottom: '8px'}}>
                        <Stack direction={['column', 'row']} w="100%" spacing='10px'>
                            <Button h="35px" colorScheme='blue' onClick={() => goBack()}>Home</Button>
                            { currentItemName ? (
                                <Button h="35px" colorScheme='blue' onClick={() => getDetailFetch(currentItemName, 1)}>{currentItemName}</Button>
                            ):<></>}
                        </Stack>
                    </div>
                    
                    {
                        isShowList ? (
                            <AutoLayout {...config} onItemClick={onJarItemClick}>
                            </AutoLayout>
                        ): <></>
                    }
                    
                    {
                        isLoading ? (
                                <Loading styles={{marginTop: '60px'}}/>
                        )
                            : isShowData && showDetail ? (
                            <div style={{width: '100%', paddingLeft:'25px'}}>
                                <Box flex='1'>
                                    { showDetail && showDetail.length > 0 ? (
                                        <div style={{background:'#ffffff', width:'100%', paddingTop: '10px'}}>
                                            {handleContent(showDetail)}
                                        </div>
                                    ): null}
                                </Box>
                            </div>
                        ): <></>
                    }
                </VStack>
            </Box>
        </Flex>
    )
}