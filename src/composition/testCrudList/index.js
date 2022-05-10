import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { AutoLayout } from '@/components';
const promiseAjax = require('@/components/utils/request');

import layout from './layout';

require('./index.less')

const categoryData = [
    {id:'1', title:'分类1'},
    {id:'2', title:'分类2'}
]

export default function Index(props) {

    const { } = props;

    const [listData, setListData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [switchStatus, setSwitchStatus] = useState(false)
    const [tabIndex, setTabIndex] = useState(0)

    let api = '/api/c/navigation/navigations';

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

    if (layoutJsonPath) {
        layoutData = { path: layoutJsonPath };
    } else {
        layoutData = localLayoutJson;
    }
    const config = {
        items: listData,
        layout: layoutData
    };

    //获取列表信息
    const fetchData = (api, queryData) => {
        setLoading(true)
        return promiseAjax(api, queryData).then(resp => {
            if (resp && resp.code === 200) {
                const list = resp.data.records;
                setListData(list);
                setLoading(false)
            } else {
                console.error('获取列表数据失败 ==', resp)
            }
        });
    }

    const onUserItemClick = (item) => {
        const id = item.id;
        console.log('id = ', id)
        alert(`选择的用户id为: ${id}`)
    }

    //回调函数
    const callback = (value) => {

        console.log('item1111111 = ', value)
        if (value) {
            fetchData(api, {})
        }
    }

    const handleChange = () => {
        const status = !switchStatus;
        setSwitchStatus(status)
    }

    //tab切换
    const switchTab = (item, index) => {
        console.log('item === ', item)
        if(index != tabIndex){
            setTabIndex(index)
            const queryData = {}
            fetchData(api, queryData)
        }
    }

    return (
        <ChakraProvider>

            <div style={{ maxWidth: '600px' }}>
                <VStack align='stretch' spacing='-2'>
                    <Box style={{ margin: '10px 10px 30px 10px', paddingLeft: '8px' }}>
                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                编辑开关：
                            </FormLabel>
                            <Switch isFocusable size='lg' onChange={() => handleChange()} isChecked={switchStatus} />
                        </FormControl>

                    </Box>
                    
                    <Box>
                            <Tabs variant='enclosed' style={{width:'1000px'}} defaultIndex={tabIndex}>
                                <TabList>
                                    { categoryData && categoryData.map((item, index) => (
                                        <Tab key={`${index}_tab`} onClick={() => switchTab(item, index)}>{item.title}</Tab>
                                    ))}
                                </TabList>
                                <TabPanels>
                                    { categoryData && categoryData.map((item, index) => (
                                        <TabPanel  key={`${index}_tabPanel`} >
                                            {isLoading ? (
                                                <Spinner />
                                            ) : (
                                                <Box>
                                                    <AutoLayout {...config} onItemClick={onUserItemClick} cb={callback} isSwtich={switchStatus} />
                                                </Box>
                                            )
                                            }
                                        </TabPanel>
                                    ))}
                                    
                                </TabPanels>
                            </Tabs>
                            {/* <AutoLayout {...config} onItemClick={onUserItemClick} cb={callback} isSwtich={switchStatus} /> */}
                        </Box>
                    
                </VStack>
            </div>

        </ChakraProvider>
    )

}