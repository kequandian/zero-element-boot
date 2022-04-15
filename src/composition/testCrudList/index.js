import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner, Switch, FormControl, FormLabel } from "@chakra-ui/react";

import { AutoLayout } from '@/components';
import { getEndpoint, getToken } from '@/components/config/common';
import promiseAjax from '@/components/utils/request';

import layout from './layout';

export default function Index(props) {

    const { } = props;

    const [listData, setListData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [switchStatus, setSwitchStatus] = useState(false)

    let api = '/api/crud/test/tests';


    if (process.env.NODE_ENV === 'development') {
        api = `${getEndpoint()}/api/crud/test/tests`;
    }


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
        return promiseAjax(api, queryData, { token: getToken() }).then(resp => {
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

    return (
        <ChakraProvider>

            <div style={{ width: '600px' }}>
                <VStack align='stretch' spacing='-2'>
                    <Box style={{ margin: '10px 10px 30px 10px', paddingLeft: '8px' }}>
                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                编辑开关：
                            </FormLabel>
                            <Switch size='lg' onChange={() => handleChange()} isChecked={switchStatus} />
                        </FormControl>

                    </Box>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <Box>
                            <AutoLayout {...config} onItemClick={onUserItemClick} cb={callback} isSwtich={switchStatus} />
                        </Box>
                    )
                    }
                </VStack>
            </div>

        </ChakraProvider>
    )

}