import React, { useState, useEffect } from 'react';
import { Box, Flex, Center, Stack } from "@chakra-ui/react";
const promiseAjax = require('@/components/utils/request');
import { getEndpoint } from '@/components/config/common';
import Tree from '@/components/presenter/tree/JsonTree'
import CssCart from '@/components/cart/CssCart';

export default function Index(props) {

    const { title, subTitle } = props;

    let endpoint = 'http://static.smallsaas.cn'


    const [detailStatus, setDetailStatus] = useState(false)
    const [componentName, setComponentName] = useState()
    const [itemDetail, setItemDetail] = useState()

    // console.log('props= ', props)

    function clickItem(title) {
        setDetailStatus(!detailStatus)
        setComponentName(title)
    }
    // console.log('detailStatus = ', detailStatus)

    let api = `/openapi/lc/components/cart/${componentName}`

    function getDetail() {
        if (detailStatus) {
            const queryData = {};
            promiseAjax(api, queryData).then(resp => {
                if (resp && resp.code === 200) {
                    setItemDetail(resp.data.props)
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
        // overflow='scroll'
        <Flex margin='' w=' ' h='' backgroundColor='#edf2f7' padding='10px' borderRadius='8px'   >
            {/* <Center  w='30%' color='#718096' bg='#edf2f7' borderRight='1px #cdcdcd solid' spacing='3px' border='' minWidth='220px' h='60px' >
                {subTitle}
            </Center> */}
            <Stack w='70%'>
                <Flex>

                    <Center fontWeight='bold' bg='#edf2f7' spacing='3px' minWidth='150px' h='80px' onClick={() => clickItem(title)}>
                        {title}
                    </Center>
                    {/* <Center bg='#edf2f7' marginLeft='10px' padding='10px'  minWidth='130px' >
                        <div style={detailStatus && itemDetail ? styleData : style} >
                            测试文本
                        </div>
                    </Center> */}
                </Flex>

                {/* {detailStatus && itemDetail ?
                    <Stack  overflow='scroll' h='200px'>
                        <Stack bg='#edf2f7' margin='0' padding='10px 30px' w='' >
                            <Tree {...itemDetail} />
                        </Stack>

                    </Stack>
                    :
                    <></>
                } */}
            </Stack>

        </Flex>

    )
}