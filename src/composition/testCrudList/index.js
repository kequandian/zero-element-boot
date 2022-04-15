import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, VStack, Spinner } from "@chakra-ui/react";

import { AutoLayout } from '@/components';
import promiseAjax from '@/components/utils/request';

import layout from './layout';

export default function Index(props) {

    const { } = props;

    const [listData, setListData] = useState([])
    const [isLoading, setLoading] = useState(false)

    let api = '/api/userData';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjE2IiwidXNlcklkIjoiNCIsInRlbmFudE9yZ0lkIjoxNiwiYWNjb3VudCI6ImFkbWluIiwidXNlclR5cGUiOjAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NDk5MTg5MjEsImp0aSI6IjQiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MDE3ODEyMX0.xsucJ55Y8mNKGfow38Ey6nTm9Zz0Cei2mieDsDpQoubAPOZ4Y0T1KQyYjwDMRK3NtuIbMre40aAuhy26GMtAlg'


    if (process.env.NODE_ENV === 'development') {
        api = `http://app1.console.smallsaas.cn:8001/api/crud/test/tests`;
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
        return promiseAjax(api, queryData, { token }).then(resp => {
            if (resp && resp.code === 200) {
                const list = resp.data.records;
                setListData(list);
                setLoading(false)
            }
        });
    }

    const onUserItemClick = (item) => {
        const id = item.id;
        console.log('id = ', id)
        alert(`选择的用户id为: ${id}`)
    }

    const callback = (value) => {

        console.log('item1111111 = ', value)
        if (value) {
            fetchData(api, {})
        }
    }

    return (
        <ChakraProvider>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <div style={{ width: '500px' }}>
                        <VStack align='stretch' spacing='-2'>
                            <Box>
                                <AutoLayout {...config} onItemClick={onUserItemClick} cb={callback} />
                            </Box>
                        </VStack>
                    </div>

                )
            }
        </ChakraProvider>
    )

}