import React, { useState, useEffect } from 'react';
import { Box, Flex, Center, Stack } from "@chakra-ui/react";
const promiseAjax = require('@/components/utils/request');
import { getEndpoint } from '@/components/config/common';
import Tree from '@/components/tree/JsonTree'
import CssCart from '@/components/cart/CssCart';

export default function Index(props) {

    const { title, subTitle } = props;

    let endpoint = 'http://static.smallsaas.cn'


    const [detailStatus, setDetailStatus] = useState(false)
    const [styleName, setStyleName] = useState()
    const [itemDetail, setItemDetail] = useState()

    // console.log('itemDetail= ', itemDetail)

    function clickItem(e) {
        console.log('e= ', e.target.value)
        setDetailStatus(!detailStatus)
        setStyleName('H1')
    }
    let api = endpoint + `/openapi/lc/autoApi/lowAutoPageStyles/rss/json/${styleName}`

    function getDetail() {
        if (detailStatus) {
            const queryData = {};
            promiseAjax(api, queryData).then(resp => {
                if (resp && resp.code === 200) {
                    setItemDetail(resp.data)
                } else {
                    console.error("获取api path 数据失败")
                }
            });
        }
    }

    const styleData = itemDetail
    // console.log('style= ',styleData)
    const style = {
        color: '#000'
    }

    // console.log('title =',title)
    // const ___Center = title?'h1': Center

    useEffect(_ => {
        getDetail()
    })

    return (
        <Flex marginTop='8px' w='100%'  >
            <Center color='#7d7d7d' bg='#f5f5f5' borderRight='1px #cdcdcd solid' spacing='3px' border='' w='150px' h='60px' >
                {subTitle}
            </Center>
            <Stack>
                <Flex>
                    <Center fontWeight='bold' bg='#f5f5f5' spacing='3px' w='350px' h='60px' onClick={(e) => clickItem(e)}>
                        {title}
                    </Center>
                    <Center bg='#f5f5f5' marginLeft='10px' padding='10px'  w='150px'>
                        <div style={detailStatus && itemDetail ? styleData :style} >
                            测试文本
                        </div>
                    </Center>
                </Flex>

                {detailStatus && itemDetail ?
                    <Stack spacing='4'>
                        <Stack bg='#f5f5f5' margin='0' padding='10px 30px' w='350px'>
                            <Tree {...itemDetail} />
                        </Stack>

                    </Stack>
                    :
                    <></>
                }
            </Stack>

        </Flex>

    )
}