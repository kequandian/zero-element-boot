import React from 'react';

import { ChakraProvider, HStack, Box, Button, VStack } from '@chakra-ui/react';
import { AutoLayout } from '@/components'
import DataFlowContainer from '@/components/container/DataFlowContainer';

import PreviewAutoLayout from '@/components/PreviewAutoLayout'
import MultiActionsIndicator from '@/components/indicator/MultiActionsIndicator';
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


    const moduleId = '339'
    const componentId = '284'
    const converter = {
        // assembledAs:"assembledAs"
    }

    //查看属性列表组合页面
    // const layoutJson = {
    //     children: [
    //         {
    //             xname: 'PreviewAutoLayout',
    //             props: {
    //                 layoutName:"PropertyManage"
    //             }
    //         },
    //         {
    //             xname: 'PreviewAutoLayout',
    //             props: {
    //                 layoutName:"PropKeyValueManage",
    //             }
    //         },
    //     ],
    //     xname:'HStack',
    //     container: "DataFlowContainer"
    // }

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
    const layoutJson = {
        children: [
            {
                xname: 'PreviewAutoLayout',
                props: {
                    layoutName:"BindingManageList"
                }
            },
            {
                xname: 'PreviewAutoLayout',
                props: {
                    layoutName:"ParentParameterListAutoLayout",
                }
            },
        ],
        xname:'HStack',
        props:{
            flexFlow: "no-wrap"
        },
        container: "DataFlowContainer"
    }

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
        
        const _actions = [
            {
                xname: 'SelectAction',
                props:{
                    selection:{
                        xname: 'PresenterAutolayout',
                        content: 'Presenter',
                        props:{
                            api: '/openapi/lc/module?pageNum=1&pageSize=100&componentOption=presenter',
                            binding: {
                                moduleName: "content",
                                componentType: "___presenter.xname",
                                componentProps: "___presenter.props"
                            },
                        }
                    }
                    
                },
            },
            {
                xname: 'SelectAction',
                props:{
                    selection:{
                        xname: 'CartsAutolayout',
                        content: 'Cart',
                        props:{
                            api: '/openapi/lc/module?pageNum=1&pageSize=100&componentOption=cart',
                            binding: {
                                moduleName: "content",
                                componentType: "__cart.xname",
                                componentProps: "__cart.props"
                            },
                        }
                    }
                    
                },
            },
            
        ]

        const converter = {
        }

        return (
            <DataFlowContainer converter={converter} moduleId={''}>
                <VStack alignItems={'flex-start'} spacing={5}>
                    <MultiActionsIndicator  actions={_actions}  alignment='topLeft'/>
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
