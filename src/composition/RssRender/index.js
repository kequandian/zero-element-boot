import React, { useState } from 'react';
import { Flex, Center, Box, Stack, Spacer, VStack, Container, Button  } from "@chakra-ui/react";
import { AutoLayout } from '@/components';
import Loading from '@/components/loading';
const promiseAjax = require('@/components/utils/request');
import _ from 'lodash'
import {getTypeContent} from '@/components/utils/tools'

require('./index.less')
import RssText from '@/components/presenter/rss/RssRender/RssText'
import RssSpace from '@/components/presenter/rss/RssRender/RssSpace'
import RssImage from '@/components/presenter/rss/RssRender/RssImage'
import RssTag from '@/components/presenter/rss/RssRender/RssTag'

export default function Index(props) {

    const { data='' } = props;

    console.log('data == ', data.split('\n'))

    const dataList = data.indexOf('\n') !== -1 ? data.split('\n') : data

    return (
        <VStack alignItems='flex-start' padding='8px'>
            { dataList.map((item,index) => {

                if(!item.startsWith('<!>')){
                    const keyStr = item.substr(0, 1)
                    switch (keyStr) {
                        case '<':
                            return <RssText key={index} type={getTypeContent(item)} content={item} />
                        case '>':
                            return <RssSpace key={index} data={item}/>
                        case '[':
                            return <RssImage key={index} data={item}/>
                        case ';':
                            return <RssTag key={index} data={item}/>
                        default:
                            break;
                    }
                }else{
                }

            })}
        </VStack>
    )
}