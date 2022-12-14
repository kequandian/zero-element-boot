import React, { useState } from 'react';
import { 
    Center, Box, Stack, VStack, Button,
    InputGroup, Input, InputRightElement
} from "@chakra-ui/react";
import { AutoLayout } from '@/components';
import Loading from '@/components/loading';
const promiseAjax = require('@/components/utils/request');

import layout from './layout';
import JsonTree from '@/components/presenter/tree/JsonTree/Sandbox'

import Pagintion from './pagination'

export default function Index(props) {

    const { data=[], method='', op, onDelAction } = props;


    const [ listData, setListData ] = useState(data)
    const [ isShowList, setIsShowList ] = useState(true);
    const [ isShowData, setIsShowData ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ showApiDetail, setApi ] = useState('');
    const [ searchValue, setSearchValue ] = useState('');
    const [ isShowBackBtn, setIsShowBackBtn ] = useState(false);
    const [ currentItemApi, setCurrentItemApi ] = useState('');
    const [ currentItemOldApi, setCurrentItemOldApi ] = useState('');
    const [ isShowCurrentItemApiStatus, setIsShowCurrentItemApiStatus ] = useState(false);
    

    let layoutData = '';
    const layoutJsonPath = '';
    const localLayoutJson = layout;

    if(layoutJsonPath){
        layoutData = { path: layoutJsonPath};
    }else{
        layoutData = localLayoutJson;
        layoutData.indicator.props.isDisabled = op
    }

    const config = {
        items: listData.length > 0 ? listData : [],
        layout: layoutData
    };

    const onApiItemClick = (item) => {
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        
        // console.log('item == ', item)
        const apiStr = `/openapi/crud/lc_low_auto_apis/lowAutoApis/lowAutoApises/${item.id}`
        setCurrentItemApi(item.api)
        setCurrentItemOldApi(apiStr)
        setApi(apiStr)
        setIsShowData(true)
        setIsShowList(false)
        setIsShowBackBtn(true)
    }

    //返回首页
    function goHome () {
        setIsShowList(true)
        setIsShowData(false)
        setSearchValue('')
        searchApiList('')
        setIsShowBackBtn(false)
    }

    function goBack () {
        if(isShowCurrentItemApiStatus){
            setApi(currentItemOldApi)
            setIsShowList(false)
            setIsShowData(true)
            setIsShowCurrentItemApiStatus(false)
        }else{
            setIsShowList(true)
            setIsShowData(false)
        }
    }

    //提交搜索栏信息
    const handleSearchClick = (e) => {
        searchApiList(searchValue)
    }

    //保存搜索栏信息
    const handleSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    //搜索
    function searchApiList(searchValue) {
        setIsLoading(true)
        //通过apiName获取API路径
        const api = `/openapi/crud/lc_low_auto_apis/lowAutoApis/lowAutoApises`;
        const queryData = {
            pageNum: 1,
            pageSize: 10,
            apiMethod: method,
            search: searchValue
        };
        promiseAjax(api, queryData).then(resp => {
            if (resp && resp.code === 200) {
                setIsShowBackBtn(resp.data.records.length > 0 && true)
                setListData(resp.data.records || [])
            } else {
                console.error("获取 api 列表失败")
            }
        }).finally(_ => {
            setIsLoading(false)
        });
    }

    //查看API
    function getApiDetail(){
        setApi(currentItemApi)
        setIsShowCurrentItemApiStatus(true)
        setIsShowData(true)
        setIsShowList(false)
    }

    function onKeyDown(e){
        if(e.keyCode === 13){
            handleSearchClick()
        }
    }

    return (
        <VStack spacing='3px'>
            <div style={{minWidth: '500px', width: '100%', height: '60px', lineHeight: '60px', backgroundColor: '#ffffff', padding:'20px 10px 10px 25px'}}>
                <Stack direction={['row']} w="500px" h='40px' spacing='10px' align='center'>
                    {
                        isShowList && (
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type='text'
                                    value={searchValue}
                                    placeholder='Please Enter'
                                    onChange={handleSearchValue}
                                    onKeyDown={onKeyDown}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleSearchClick}>
                                        Search
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        )
                    }
                    {
                        !isShowList && isShowBackBtn && listData.length > 0 && <Button w='100px' h="35px" colorScheme='facebook' onClick={() => goBack()}>返回</Button>
                    }
                    {
                        isShowData && showApiDetail && (
                            <Button w='100px' h="35px" colorScheme='facebook' onClick={() => getApiDetail()}>查看API</Button>
                        )
                    }
                    
                    <Center>
                        <Button w="35px" h="35px" borderRadius="4px" padding="9px" colorScheme='facebook' onClick={() => goHome()}>
                            <svg t="1670998813604" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2149" fill="#ffffff" width="128" height="128"><path d="M960 416V192l-73.056 73.056a447.712 447.712 0 0 0-373.6-201.088C265.92 63.968 65.312 264.544 65.312 512S265.92 960.032 513.344 960.032a448.064 448.064 0 0 0 415.232-279.488 38.368 38.368 0 1 0-71.136-28.896 371.36 371.36 0 0 1-344.096 231.584C308.32 883.232 142.112 717.024 142.112 512S308.32 140.768 513.344 140.768c132.448 0 251.936 70.08 318.016 179.84L736 416h224z" p-id="2150"></path></svg>
                        </Button>
                    </Center>
                </Stack>
            </div>
            
            {
                isLoading ? (
                    <Loading styles={{marginTop: '60px'}}/>
                ):(
                    isShowList ? (
                        <>
                            <AutoLayout {...config} onItemClick={onApiItemClick} onItemDeleted={onDelAction}>
                            </AutoLayout>
                            {/* <div style={{margin:'15px 0 15px 0'}}>
                                <Pagintion total={23} current={1}/>
                            </div> */}
                        </>
                    ): <></>
                )
            }
            
            {
                isLoading ? (
                        <Loading styles={{marginTop: '60px'}}/>
                )
                    : isShowData && showApiDetail ? (
                    <div style={{width: '100%', paddingLeft:'25px'}}>
                        <Box flex='1'>
                            <div style={{background:'#ffffff', width:'100%', paddingTop: '15px'}}>
                                <JsonTree api={showApiDetail}/>
                            </div>
                        </Box>
                    </div>
                ): <></>
            }
        </VStack>
    )
}