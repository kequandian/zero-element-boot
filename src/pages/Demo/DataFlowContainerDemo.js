import React from 'react';

import { ChakraProvider, HStack, Box, Button, VStack } from '@chakra-ui/react';
import { AutoLayout } from '@/components'
import DataFlowContainer from '@/components/container/DataFlowContainer';

import PreviewAutoLayout from '@/components/PreviewAutoLayout'
import MultiActionsIndicator from '@/components/indicator/MultiActionsIndicator';
import LocalPreview from './localPreview'

import { LS } from 'zero-element/lib/utils/storage';

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
    const componentId = '284'
    const converter = {
        // assembledAs:"assembledAs"
    }

    //查看属性列表组合页面
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
                props: {
                    layoutName:"PropKeyValueManage",
                }
            },
        ],
        xname:'HStack',
        props:{
          flexFlow: "no-wrap",
          spacing: 8
        },
        container: "DataFlowContainer"
    }

    //修改container组合页面
    // const layoutJson = {
    //     children: [
    //         {
    //             xname: 'PreviewAutoLayout',
    //             props: {
    //                 layoutName:"GetContainerAutoLayout"
    //             }
    //         },
    //         {
    //             xname: 'PreviewAutoLayout',
    //             props: {
    //                 layoutName:"ContainerListAutoLayout",
    //             }
    //         },
    //     ],
    //     xname:'HStack',
    //     props:{
    //         flexFlow: "no-wrap"
    //     },
    //     container: "DataFlowContainer"
    // }

    //binding组合页面
    // const layoutJson = {
    //     children: [
    //         {
    //             xname: 'PreviewAutoLayout',
    //             props: {
    //                 layoutName:"BindingManageList"
    //             }
    //         },
    //         {
    //             xname: 'PreviewAutoLayout',
    //             props: {
    //                 layoutName:"ParentParameterListAutoLayout",
    //             }
    //         },
    //     ],
    //     xname:'HStack',
    //     props:{
    //         flexFlow: "no-wrap"
    //     },
    //     container: "DataFlowContainer"
    // }

    //组件类型列表+详情组合页面
    // const layoutJson = {
    //     children: [
    //         {
    //             xname: 'PreviewAutoLayout',
    //             props: {
    //                 layoutName:"ComponentTypeList"
    //             }
    //         },
    //         {
    //             xname: 'PreviewAutoLayout',
    //             props: {
    //             }
    //         },
    //     ],
    //     xname:'VStack',
    //     props:{
    //     },
    //     container: "DataFlowContainer"
    // }

    function TestComponentView () {
        LS.set("layoutName", 'PRESENTER_6a8b41eaaa0f4a89bc140ece1874a097')
        const _actions = [
            {
                xname: 'NewPresenterAction',
                props:{
                    selection:{
                        xname: 'NewPresentersAutolayout',
                        props:{
                        },
                        label: 'NewPresenter',
                    }
                },
            },
            {
                xname: 'NewCartAction',
                props:{
                    selection:{
                        xname: 'NewCartsAutolayout',
                        props:{
                        },
                        label: 'NewCart',
                    }
                },
            },
            {
                xname: 'NewContainerAction',
                props:{
                    selection:{
                        xname: 'NewContainersAutolayout',
                        props:{
                        },
                        label: 'NewContainer',
                    }
                },
            },
            {
                xname: 'NewDatasetAction',
                props:{
                },
            },
            
        ]

        const converter = {
            // moduleName: 'layoutName'
        }

        return (
            <DataFlowContainer converter={converter}>
                <VStack alignItems={'flex-start'} spacing={5}>
                    <MultiActionsIndicator  actions={_actions}  alignment='topleft'/>
                    <PreviewAutoLayout />
                </VStack>
            </DataFlowContainer>
        )
    }


    return (
        <ChakraProvider>
            {/* <DataFlowContainer converter={converter}>
                <PreviewAutoLayout layoutApi={layoutApi} api={api} onAddNewClick={addNewClick} isSwitch={true} />
                <LocalPreview  />
            </DataFlowContainer> */}

            {/* <AutoLayout layout={layoutJson} 
                moduleId={moduleId} converter={converter} 
            /> */}

            {/* <DataFlowContainer moduleId={moduleId} converter={converter}>
                <HStack>
                    <PreviewAutoLayout layoutName="PropertyManage"  />
                    <PreviewAutoLayout layoutName="PropKeyValueManage"  />
                </HStack>
            </DataFlowContainer> */}
            <TestComponentView/>
        </ChakraProvider>

    )
}
