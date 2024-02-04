import React, { useState, useEffect } from 'react';
import {
    Box, VStack, Spinner, Switch, FormControl, FormLabel, localStorageManager
} from "@chakra-ui/react";
// import { useForm } from 'react-hook-form';
import { history } from 'umi';

import { AutoLayout } from '@/components';
import TabsCompox from './compx/tabsComps';
const promiseAjax = require('@/components/utils/request');

import layout from './layout';

require('./index.less')

export default function Index(props) {

    const { } = props;

    const [navCateListData, setNavCateListData] = useState([])
    const [listData, setListData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [switchStatus, setSwitchStatus] = useState(false)
    const [categoryId, setCategoryId] = useState('')
    const [tabIndex, setTabIndex] = useState(0)

    let navListApi = '/openapi/lc/module';
    let navApi = '/openapi/lc/module/module-option-classify';

    useEffect(() => {
        console.log('首次加载')
        // fetchNavCategoryData(navApi, {})
        fetchData(navListApi, { componentOption: 'cart'})
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

    //获取分类列表信息
    const fetchNavCategoryData = (api, queryData) => {
        setLoading(true)
        let newNavCateList = []
        return promiseAjax(api, queryData).then(resp => {
            if (resp && resp.code === 200) {
                // console.log('newNavCateList = ', resp.data)
                const originList = resp.data && Array.isArray(resp.data) ? resp.data : resp.data.records;
                originList.map(item =>{
                    if(item.componentOption && item.componentOption != 'autolayout') {
                        newNavCateList.push({...item, name:item.componentOption})
                    } 
                })
                console.log('newNavCateList = ', newNavCateList)
                setNavCateListData(newNavCateList);
            } else {
                console.error('获取列表数据失败 ==', resp)
            }
        }).finally(_ => {
            setLoading(false)
            if(newNavCateList.length > 0){
                setCategoryId(newNavCateList[0].componentOption)
                fetchData(navListApi, { componentOption: newNavCateList[0].componentOption })
            }
        });
    }

    //获取列表信息
    const fetchData = (api, queryData) => {
        setLoading(true)
        const query = {
            ...queryData,
            pageNum: 1,
            pageSize: 50
        }
        return promiseAjax(api, query).then(resp => {
            if (resp && resp.code === 200) {
                const list = resp.data && Array.isArray(resp.data) ? resp.data : resp.data.records;
                setListData(list);
            } else {
                console.error('获取列表数据失败 ==', resp)
            }
        }).finally(_ => {
            setLoading(false)
        });
    }

    //列表item点击事件
    const onNavItemClick = (item) => {
        const id = item.id;
        // console.log('item = ', item)
        history.push({
            pathname: '/attributes',
            query:{
                id
            }
        })
        
    }

    //列表item回调函数
    const callback = (value) => {
        console.log('value = ', value)
        if (value) {
            const queryData = {
                componentOption: categoryId
            }
            fetchData(navListApi, queryData)
        }
    }

    //tabs item回调函数
    const tabscallback = (value) => {
        if (value) {
            setNavCateListData([])
            setListData([])
            fetchNavCategoryData(navApi, {})
        }
    }

    //开启/关闭 编辑按钮
    const handleChange = () => {
        const status = !switchStatus;
        setSwitchStatus(status)
        setTabIndex(0)
        if(!status){
            setNavCateListData([])
            setListData([])
            fetchNavCategoryData(navApi, {})
            fetchData(navListApi, { componentOption: 'cart'})
        }
    }

    //tab切换
    const switchTab = (item, index) => {
        if (index != tabIndex) {
            setTabIndex(index)
            setCategoryId(item.componentOption)
            const queryData = {
                componentOption: item.componentOption
            }
            fetchData(navListApi, queryData)
        }
    }

    //自定义tab按钮
    // const CustomTab = React.forwardRef((props, ref) => {
    //     // 1. Reuse the `useTab` hook
    //     const tabProps = useTab({ ...props, ref })
    //     const isSelected = !!tabProps['aria-selected']

    //     // 2. Hook into the Tabs `size`, `variant`, props
    //     const styles = useMultiStyleConfig('Tabs', tabProps)

    //     return (
    //         <Button __css={styles.tab} {...tabProps}>
    //             <Box as='span' mr='1' display='flex' alignItems='center'>
    //                 {isSelected ? <Image src={pluOn} /> : <Image src={pluOff} />}
    //             </Box>
    //             {/* {tabProps.children} */}
    //         </Button>
    //     )
    // })

    function delateAction (data) {
        callback(data)
    }

    function addAction (data) {
        console.log('add action = ', data)
    }

    function updateAction (data) {
        callback(data)
    }

    function indicatedAction (data) {
        console.log('indicated action = ', data)
    }

    return (
        <VStack align='stretch' spacing='-2'>
            <Box style={{ margin: '5px 10px 30px 5px', paddingLeft: '8px' }}>
                <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='email-alerts' mb='0'>
                        编辑开关：
                    </FormLabel>
                    <Switch isFocusable size='lg' onChange={() => handleChange()} isChecked={switchStatus} />
                </FormControl>

            </Box>

            <Box>
                {/* {navCateListData && navCateListData.length > 0 ? (
                    <Tabs variant='enclosed' style={{ width: '900px' }} defaultIndex={tabIndex}>
                        <TabList>
                            {navCateListData.map((item, index) => {
                                if (item.id === '-1' && switchStatus) {
                                    return <CustomTab key={`${index}_tab`} onClick={() => addNavItem()}></CustomTab>
                                }
                                return <Tab key={`${index}_tab`} onClick={() => switchTab(item, index)}>{item.name}</Tab>
                            })}
                        </TabList>
                        <TabPanels>
                            {navCateListData.map((item, index) => (
                                <TabPanel key={`${index}_tabPanel`} >
                                    {isLoading ? (
                                        <Spinner />
                                    ) : (
                                        <Box>
                                            <AutoLayout {...config} onItemClick={onNavItemClick} cb={callback} isSwitch={switchStatus} />
                                        </Box>
                                    )}
                                </TabPanel>
                            ))}

                        </TabPanels>
                    </Tabs>
                ) : null} */}

                {/* {navCateListData && navCateListData.length > 0 ? ( */}
                    <>
                        {/* <TabsCompox items={navCateListData} currentTabIndex={tabIndex} onSwitchTab={switchTab} isSwitch={switchStatus} cb={tabscallback}/> */}
                        
                        <div style={{marginTop:'10px'}}>
                            {isLoading ? (
                                <Spinner />
                            ) : (
                                <Box>
                                    <AutoLayout {...config} 
                                        cb={callback}
                                        onItemClick={onNavItemClick}
                                        onItemDeleted={delateAction}
                                        onItemAdded={addAction}
                                        onItemChanged={updateAction}
                                        // onItemIndicated={indicatedAction}
                                        isSwitch={switchStatus} 
                                    />
                                </Box>
                            )}
                        </div>
                    </>
                {/* ) : null} */}

            </Box>

        </VStack>
    )

}