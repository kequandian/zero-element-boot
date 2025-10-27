import React, { useState, useEffect } from 'react';
import {
    Box, VStack, Spinner, Switch, FormControl, FormLabel
} from "@chakra-ui/react";
// import { useForm } from 'react-hook-form';

import { AutoLayout } from '@/components';
import { getEndpoint } from '@/components/config/common';
import TabsCompox from './compx/tabsComps';
const promiseAjax = require('@/components/utils/request');

import layout from './layout';

require('./index.less')

export default function Index(props) {

    const { } = props;

    // const [navCateListData, setNavCateListData] = useState([])
    const [listData, setListData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [switchStatus, setSwitchStatus] = useState(false)
    const [categoryId, setCategoryId] = useState('')
    const [tabIndex, setTabIndex] = useState(0)

    let navListApi = '/api/pub/data/services/navigation';
    let navApi = '/api/pub/data/services/navCategory?sort=sortNum&orderBy=ASC';

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
    // const fetchNavCategoryData = (api, queryData) => { /* moved to tabsComps */ }

    //获取列表信息
    const fetchData = (api, queryData) => {
        setLoading(true)
        const query = {
            ...queryData,
            sort: 'sortNum',
            orderBy: 'ASC'
        }
        return promiseAjax(api, query).then(resp => {
            if (resp && resp.code === 200) {
                const list = resp.data && Array.isArray(resp.data) ? resp.data : resp.data.records;;
                setListData(list);
                setLoading(false)
            } else {
                console.error('获取列表数据失败 ==', resp)
            }
        }).finally(_ => {
            setLoading(false)
        });
    }

    //列表item点击事件
    const onNavItemClick = (item) => {
        // const id = item.id;
        //点击跳转页面
        if (item.url.indexOf('http') != -1) {
          const w = window.open('about:blank');
          w.location.href = item.url
        } else {
          const w = window.open('about:blank');
          const host = getEndpoint() || location.host
          w.location.href = host + item.url
        }
    }

    //列表item回调函数
    const callback = (value) => {
        if (value) {
            const queryData = {
                typeId: categoryId
            }
            fetchData(navListApi, queryData)
        }
    }

    //列表item回调函数
    const tabscallback = (value) => {
        if (value) {
            // 分类数据刷新由 Tabs 组件内部处理
            setListData([])
            setCategoryId('')
        }
    }

    //开启/关闭 编辑按钮
    const handleChange = () => {
        const status = !switchStatus;
        setSwitchStatus(status)
        setTabIndex(0)
        if(!status){
            // 分类数据刷新由 Tabs 组件内部处理
            setListData([])
            setCategoryId('')
        }
    }

    //tab切换
    const switchTab = (item, index) => {
        if (index != tabIndex) {
            setTabIndex(index)
            setCategoryId(item.id)
            const queryData = {
                typeId: item.id
            }
            fetchData(navListApi, queryData)
        }
    }

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
            <Box style={{ margin: '10px 10px 30px 10px', paddingLeft: '8px' }}>
                <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='email-alerts' mb='0'>
                        编辑开关：
                    </FormLabel>
                    <Switch isFocusable size='lg' onChange={() => handleChange()} isChecked={switchStatus} />
                </FormControl>
            </Box>

            <Box>
                    <TabsCompox currentTabIndex={tabIndex} onSwitchTab={switchTab} isSwitch={switchStatus} cb={tabscallback} navApi={navApi} />
                        {isLoading ? (
                            <Spinner />
                        ) : (
                                <AutoLayout {...config} 
                                    cb={callback}
                                    onItemClick={onNavItemClick}
                                    onItemDeleted={delateAction}
                                    onItemAdded={addAction}
                                    onItemChanged={updateAction}
                                    onItemIndicated={indicatedAction}
                                    isSwitch={switchStatus} 
                                />
                        )}
            </Box>

        </VStack>
    )

}