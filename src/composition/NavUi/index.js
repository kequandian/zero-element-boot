import React, { useState } from 'react';
import {
    Box, VStack, Switch, FormControl, FormLabel
} from "@chakra-ui/react";
// import { useForm } from 'react-hook-form';

import PreviewAutoLayout from '@/components/PreviewAutoLayout';
import { getEndpoint } from '@/components/config/common';
import TabsCompox from './compx/tabsComps';

import layout from './layout';

require('./index.less')

export default function Index(props) {

    const { } = props;

    const [switchStatus, setSwitchStatus] = useState(false)
    const [categoryId, setCategoryId] = useState('')
    const [tabIndex, setTabIndex] = useState(0)
    const [apiUrl, setApiUrl] = useState('/api/pub/data/services/navigation')

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
            // 通过更新 apiUrl 来触发数据重新加载
            const newApiUrl = categoryId 
                ? `${navListApi}?typeId=${categoryId}&sort=sortNum&orderBy=ASC`
                : `${navListApi}?sort=sortNum&orderBy=ASC`
            setApiUrl(newApiUrl)
        }
    }

    //列表item回调函数
    const tabscallback = (value) => {
        if (value) {
            // 分类数据刷新由 Tabs 组件内部处理
            setCategoryId('')
            // 重置 API URL
            setApiUrl(`${navListApi}?sort=sortNum&orderBy=ASC`)
        }
    }

    //开启/关闭 编辑按钮
    const handleChange = () => {
        const status = !switchStatus;
        setSwitchStatus(status)
        setTabIndex(0)
        if(!status){
            // 重置 API URL 和 categoryId
            setCategoryId('')
            setApiUrl(`${navListApi}?sort=sortNum&orderBy=ASC`)
        }
    }

    //tab切换
    const switchTab = (item, index) => {
        if (index != tabIndex) {
            setTabIndex(index)
            setCategoryId(item.id)
            // 更新 API URL 以加载对应分类的数据
            const newApiUrl = `${navListApi}?typeId=${item.id}&sort=sortNum&orderBy=ASC`
            setApiUrl(newApiUrl)
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
                    <PreviewAutoLayout
                        api={apiUrl}
                        layoutData={layoutData}
                        onItemClick={onNavItemClick}
                        cb={callback}
                        onItemDeleted={delateAction}
                        onItemAdded={addAction}
                        onItemChanged={updateAction}
                        onItemIndicated={indicatedAction}
                        isSwitch={switchStatus} 
                    />
            </Box>

        </VStack>
    )

}