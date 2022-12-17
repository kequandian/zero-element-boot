import React, { useState } from 'react';
import { Flex, Center, Box, Stack, Spacer, VStack, Container, Button  } from "@chakra-ui/react";
import { AutoLayout } from '@/components';
import Loading from '@/components/loading';
const promiseAjax = require('@/components/utils/request');

require('./index.less')
import RssText from './components/RssText'
import RssSpace from './components/RssSpace'
import RssImage from './components/RssImage'

export default function Index(props) {

    const { data=[] } = props;

    return (
        <VStack alignItems='flex-start' padding='10px'>
            { data.map((item,index) => {
                
                if(item.componentType === 'title'){
                    return (
                        <RssText key={index} content={item.rssComponentPropList[0].propDefaultValue} styles={item.css}/>
                    )
                }

                if(item.componentType === 'space'){
                    return (
                        <RssSpace key={index} value={item.rssComponentPropList[0].propDefaultValue}/>
                    )
                }

                if(item.componentType === 'showImage'){
                    return (
                        <RssImage key={index} value={item.rssComponentPropList[0].propDefaultValue}/>
                    )
                }

            })}
        </VStack>
    )
}