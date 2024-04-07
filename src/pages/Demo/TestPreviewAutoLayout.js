import React from 'react';

import { ChakraProvider, HStack, Box, Button  } from '@chakra-ui/react';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';
import { AutoLayout, APIContainer } from '@/components';

import { WxPage } from '@/components/container';
import { HCenter } from '@/components/cart';

export default function TestPreviewAutoLayout(props) {

    const api = '/openapi/lc/module?componentOption=presenter&pageNum=1&pageSize=100&moduleType=card'
    const layoutApi= '/openapi/crud/lc_low_auto_module/lowAutoModule/lowAutoModules/160'
    
    const TestIndicatorAutoLayout = () => {
        const api = '/openapi/lc/module?componentOption=indicator'
        const layoutApi= '/openapi/crud/lc_low_auto_module/lowAutoModule/lowAutoModules/161'
        return (
            <PreviewAutoLayout 
                layoutApi={layoutApi} 
                api={api} 
            />
        )
    }

    const TestContainerAutoLayout = () => {
        const api = '/openapi/lc/module/childModuleList/332?componentOption=container'
        const layoutApi= '/openapi/crud/lc_low_auto_module/lowAutoModule/lowAutoModules/333'
        return (
            <PreviewAutoLayout 
                moduleId="332"
                layoutApi={layoutApi} 
                api={api} 
            />
        )
    }

    const TestComponentAutoLayout = () => {
        const config = {
            name: "PRESENTER",
            layout: {
                "container": {
                    "xname": "WxPage"
                },
                "presenter": {
                    "container": {
                        "xname": "SelectList"
                    },
                    "presenter": {
                        "children": [
                            {
                                "binding": {
                                    "imgUrl": "url"
                                },
                                "xname": "CozeImage",
                                "props": {
                                    "w": "36",
                                    "h": "36"
                                }
                            },
                            {
                                "children": [
                                    {
                                        "binding": {
                                            "title": "content"
                                        },
                                        "xname": "Title"
                                    },
                                    {
                                        "binding": {
                                            "subtitle": "content"
                                        },
                                        "xname": "Subtitle"
                                    }
                                ],
                                "binding": {
                                    "address": "subtitle",
                                    "name": "title"
                                }
                            }
                        ],
                        "xname": "HStack",
                        "props": {
                            "spacing": "6",
                            "flexFlow": "no-wrap"
                        }
                    },
                    "mock": [
                        {
                            "imgUrl": "https://p3-flow-product-sign.byteimg.com/tos-cn-i-13w3uml6bg/9bce25f721a24384a36aa1b4dcb008cd~tplv-13w3uml6bg-resize:128:128.image?rk3s=2e2596fd&x-expires=1714701611&x-signature=lSUmFMfsf5iIKxmCR2EJXTlvJ5w%3D",
                            "address": "广东省深圳南山区0.8km",
                            "name": "混果汁(中电长城乐洲店)"
                        },
                        {
                            "imgUrl": "https://p3-flow-product-sign.byteimg.com/tos-cn-i-13w3uml6bg/9bce25f721a24384a36aa1b4dcb008cd~tplv-13w3uml6bg-resize:128:128.image?rk3s=2e2596fd&x-expires=1714701611&x-signature=lSUmFMfsf5iIKxmCR2EJXTlvJ5w%3D",
                            "address": "广东省深圳南山区0.8km",
                            "name": "混果汁(深圳湾科技生态园2区店)"
                        },
                        {
                            "imgUrl": "https://p3-flow-product-sign.byteimg.com/tos-cn-i-13w3uml6bg/9bce25f721a24384a36aa1b4dcb008cd~tplv-13w3uml6bg-resize:128:128.image?rk3s=2e2596fd&x-expires=1714701611&x-signature=lSUmFMfsf5iIKxmCR2EJXTlvJ5w%3D",
                            "address": "广东省深圳南山区1km",
                            "name": "混果汁(南山金地威新中心店)"
                        }
                    ],
                    "xname": "VStack",
                    "props": {
                        "spacing": "5"
                    }
                }
            }
        }

        return (
            <AutoLayout {...config}/>
        )
    }

    const TestDeleteComponent = () => {
        const api = '/openapi/lc/module/childModuleList/332?componentOption=container'
        const config = {
            moduleId: "332",
            layout : {
                "xname": "Gridbox",
                "props": {
                    "columns": 1
                },
                "binding": {
                    "componentType": "content"
                },
                "cart": {
                    "xname": "Cart",
                    "props": {
                        "padding": "30px 10px",
                        "margin": "1px 0",
                        "linewidth": "1px",
                        "corner": "8px",
                        "fill": "#edf2f7"
                    },
                    "indicator": {
                        "xname": "DeleteIndicator",
                        "props": {
                            "isDisabled": true,
                            "action": "/openapi/lc/module/delete-child-module?mainModuleId=(mainModuleId)&removeModuleId=(removeModuleId)"
                        },
                        "binding": {
                            "moduleId": "mainModuleId",
                            "id": "removeModuleId"
                        }
                    },
                    "selector": {
                        "xname": "CornerCheckboxSelector",
                        "props": {}
                    }
                },
                "container": "SelectList",
                "presenter": {
                    "xname": "Text",
                    "props": {}
                }
            }
        }

        return (
            <APIContainer API={api}>
                <AutoLayout {...config} />
            </APIContainer>   
        )
    }

    return (

        <ChakraProvider>
            {/* <PreviewAutoLayout 
                // layoutName="PropsManage" 
                // moduleId="320"
                // layoutApi={layoutApi} 
                // api={api} 
                // layoutName="BindingManageList"
                // moduleId="320"
                layoutName="ParentParameterListAutoLayout"
                moduleId="320"
            /> */}
            {/* <HCenter>
                <WxPage title='组件按钮' device="pc">
                    <PreviewAutoLayout layoutName="ComponentTypeList" />
                </WxPage>
            </HCenter> */}

            {/* <TestIndicatorAutoLayout /> */}
            {/* <TestContainerAutoLayout/> */}
            {/* <TestComponentAutoLayout/> */}
            <TestDeleteComponent />
            
        </ChakraProvider>
       
    )
}
