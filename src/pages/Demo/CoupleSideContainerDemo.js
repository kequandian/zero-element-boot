import React from 'react';

import { ChakraProvider, HStack, Box, Button } from '@chakra-ui/react';
import { NamedLayout } from '@/components'
import CoupleSideContainer from '@/components/container/CoupleSideContainer';

import PreviewAutoLayout from '@/components/PreviewAutoLayout'
import LocalPreview from './localPreview'

export default function Index(props) {

    const api = '/openapi/lc/module?componentOption=selector'
    const layoutApi = '/openapi/crud/lc_low_auto_module/lowAutoModule/lowAutoModules/163'

    // const converter = {
    //     "componentType": "__selector.xname",
    //     "componentProps": "__selector.props",
    //     "__selector":"__selector2"
    // }

    const addNewClick = () => {
        console.log('addNewClick')
    }


    const moduleId = '284'


    return (
        <ChakraProvider>
            {/* <CoupleSideContainer converter={converter}>
                <PreviewAutoLayout layoutApi={layoutApi} api={api} onAddNewClick={addNewClick} isSwitch={true} />
                <LocalPreview  />
            </CoupleSideContainer> */}

            <CoupleSideContainer >
                <HStack>
                    <PreviewAutoLayout layoutName="PropertyManage" moduleId={moduleId} />
                    <div>子组件属性列表</div>
                    {/* <PreviewAutoLayout layoutName="PropKeyValueManage"  /> */}
                </HStack>
            </CoupleSideContainer>
        </ChakraProvider>

    )
}
