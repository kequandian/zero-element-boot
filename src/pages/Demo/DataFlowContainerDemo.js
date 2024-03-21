import React from 'react';

import { ChakraProvider, HStack, Box, Button } from '@chakra-ui/react';
import { AutoLayout } from '@/components'
import DataFlowContainer from '@/components/container/DataFlowContainer';

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
    const converter = {
        assembledAs:"assembledAs"
    }

    const layoutJson = {
        children: [
            {
                xname: 'PreviewAutoLayout',
                props: {
                    layoutName:"PropertyManage"
                }
            },
            {
                xname: 'PreviewAutoLayout',
                tag: "secound_children_tag",
                props: {
                    layoutName:"PropKeyValueManage",
                    tag: "PropKeyValueManage_tag"
                }
            },
        ],
        xname:'HStack',
        tag: "autolayout_tag",
        container: "DataFlowContainer"
    }


    return (
        <ChakraProvider>
            {/* <DataFlowContainer converter={converter}>
                <PreviewAutoLayout layoutApi={layoutApi} api={api} onAddNewClick={addNewClick} isSwitch={true} />
                <LocalPreview  />
            </DataFlowContainer> */}

            <AutoLayout layout={layoutJson} moduleId={moduleId} converter={converter} />

            {/* <DataFlowContainer moduleId={moduleId} converter={converter}>
                <HStack>
                    <PreviewAutoLayout layoutName="PropertyManage"  />
                    <PreviewAutoLayout layoutName="PropKeyValueManage"  />
                </HStack>
            </DataFlowContainer> */}
        </ChakraProvider>

    )
}
