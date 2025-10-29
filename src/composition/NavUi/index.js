import React, { useState } from 'react';
import {
    Box, VStack, Switch, FormControl, FormLabel
} from "@chakra-ui/react";
// import { useForm } from 'react-hook-form';

import PreviewAutoLayout from '@/components/PreviewAutoLayout';
import DataFlowContainer from '@/components/container/DataFlowContainer';
import TabsCompox from './compx/tabsComps';

import layout from './layout';

require('./index.less')


import { set as NamedCartSet } from '@/components/config/NamedCartConfig';
import { RouteIndicator } from '@/components/indicator';
NamedCartSet({
    RouteIndicator
})

export default function NavUI(props) {

    const { } = props;

    const [switchStatus, setSwitchStatus] = useState(false)
    const [tabIndex, setTabIndex] = useState(0)
    const [typeId, setTypeId] = useState('')

    let navCategoryApi = '/api/pub/data/services/navCategory?sort=sortNum&orderBy=ASC';
    let navListApi = '/api/pub/data/services/navigation';
    const baseListApi = `${navListApi}?sort=sortNum&orderBy=ASC`;
    const [listApi, setListApi] = useState(baseListApi)

    let layoutData = '';
    const layoutJsonPath = '';
    const localLayoutJson = layout;

    if (layoutJsonPath) {
        layoutData = { path: layoutJsonPath };
    } else {
        layoutData = localLayoutJson;
    }

    //列表item回调函数
    const tabscallback = (value) => {
        if (value) {
            // 分类数据刷新后重置选中状态
            setTypeId('')
            setTabIndex(0)
            setListApi(baseListApi)
        }
    }

    //开启/关闭 编辑按钮
    const handleChange = () => {
        const status = !switchStatus;
        setSwitchStatus(status)
        setTabIndex(0)
        if(!status){
            // 重置选中状态
            setTypeId('')
            setListApi(baseListApi)
        }
    }

    //tab切换（保留本地状态便于开关展示）
    const switchTab = (item, index) => {
        if (index != tabIndex) {
            setTabIndex(index)
            setTypeId(item.id)
            const nextApi = baseListApi + `&typeId=${item.id}`
            setListApi(nextApi)
        }
    }

    return (
        <VStack align='stretch' spacing='2'>
            <Box style={{ margin: '10px 10px 20px 10px', paddingLeft: '8px' }}>
                <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='email-alerts' mb='0'>
                        编辑开关：
                    </FormLabel>
                    <Switch isFocusable size='lg' onChange={() => handleChange()} isChecked={switchStatus} />
                </FormControl>
            </Box>

            <Box>
                <DataFlowContainer
                    // 将第一个子组件输出的数据（tab item）转为第二个子组件所需 props
                    converter={{ id: 'typeId' }}
                >
                    <TabsCompox 
                        currentTabIndex={tabIndex} 
                        onSwitchTab={switchTab} 
                        isSwitch={switchStatus} 
                        cb={tabscallback}
                        navApi={navCategoryApi} />
                    <PreviewAutoLayout
                        api={listApi}
                        layoutData={layoutData}
                        isSwitch={switchStatus}
                    />
                </DataFlowContainer>
            </Box>

        </VStack>
    )

}