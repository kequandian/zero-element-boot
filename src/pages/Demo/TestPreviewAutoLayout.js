import React from 'react';

import { ChakraProvider, HStack, Box, Button  } from '@chakra-ui/react';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';
import { AutoLayout, APIContainer, NamedContainer, NamedIndicator } from '@/components';
import { AddNewContainer } from '@/components/container';
import { DefaultGridLayoutList } from '@/components/list'

import { WxPage } from '@/components/container';
import { HCenter } from '@/components/cart';
import PreviewActionIndicator from '@/components/indicator/PreviewActionIndicator';
import PlacementIndicator from '@/components/indicator/PlacementIndicator';

import AddNewModal from '@/components/modalComponent/AddNewModal';

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
        const api = '/openapi/lc/module?pageNum=1&pageSize=100&componentOption=presenter'
        const layoutApi= '/openapi/crud/lc_low_auto_module/lowAutoModule/lowAutoModules/197'
        return (
            <PreviewAutoLayout 
                // moduleId="332"
                layoutApi={layoutApi} 
                api={api} 
                containerHeight={900}
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

    const TestPreviewTriggerd = () => {

        // const layoutName = 'storeListAutoLayout'
        const layoutName = 'NewCartsAutolayout'

        return (
            <div style={{ width: '100%' }}>
                <PreviewAutoLayout ___={false} layoutName={layoutName}  />
            </div>
        )
    }


    //TODO 添加多个item数据
    const TestComponentList = () => {

        const moduleType = 'web'
        
        const config = {
            listApi: `/openapi/lc/module?componentOption=presenter&pageNum=1&pageSize=100&moduleType=${moduleType}`,
            converter: {
                moduleName: 'layoutName'
            },
            cartConfig: {
                ratio: 1,
                overflow: 'auto',
            }
        }

        const _Indicator = () => {
            //svg图片
            const IconSvg = () => {
              return (
                <svg t="1712720955253" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15898" width="20" height="20"><path d="M824.487092 906.287384 100.255236 906.287384c-24.939113 0-44.890404-19.951291-44.890404-44.890404L55.364832 137.165124c0-24.939113 19.951291-44.890404 44.890404-44.890404l319.719435 0c8.479299 0 14.963468 6.48417 14.963468 14.963468s-6.48417 14.963468-14.963468 14.963468L100.255236 122.201656c-8.479299 0-14.963468 6.48417-14.963468 14.963468l0 723.733074c0 8.479299 6.48417 14.963468 14.963468 14.963468l723.733074 0c8.479299 0 14.963468-6.48417 14.963468-14.963468l0-343.660984c0-8.479299 6.48417-14.963468 14.963468-14.963468s14.963468 6.48417 14.963468 14.963468l0 343.660984C869.377496 885.837311 848.927423 906.287384 824.487092 906.287384z" p-id="15899"></path><path d="M854.414028 410.497808c-8.479299 0-14.963468-6.48417-14.963468-14.963468L839.45056 122.201656l-286.799805 0c-8.479299 0-14.963468-6.48417-14.963468-14.963468s6.48417-14.963468 14.963468-14.963468l316.726741 0 0 303.25962C869.377496 404.013639 862.394545 410.497808 854.414028 410.497808z" p-id="15900"></path><path d="M400.02338 577.091086c-3.990258 0-7.481734-1.496347-10.474428-4.48904-5.985387-5.985387-5.985387-15.46225 0-20.948855l454.390648-454.390648c5.985387-5.985387 15.46225-5.985387 20.948855 0 5.985387 5.985387 5.985387 15.46225 0 20.948855l-454.390648 454.390648C407.505114 575.594739 403.514856 577.091086 400.02338 577.091086z" p-id="15901"></path></svg>
              )
            }
            return (
              <Box cursor={'pointer'} padding={'0 20px'} >
                <IconSvg />
              </Box>
            )
          }
          
        
          const onPreviewClick = (data) => {
            const w = window.open('about:blank');
            w.location.href = `/#/Demo/DataFlowContainerDemo?layoutName=${data.layoutName}`
        }

        return (
            <HCenter>
                <AddNewContainer {...config}>
                    <DefaultGridLayoutList columns={1} hasCart={false} hasIndicator={false}>
                        <PlacementIndicator Indicator={_Indicator} alignment="topright" onPreviewTriggered={onPreviewClick}>
                            <WxPage device="pc">
                                <PreviewAutoLayout previewAddNew={false}/>
                            </WxPage>
                        </PlacementIndicator>
                    </DefaultGridLayoutList>
                    <AddNewModal moduleType={moduleType}>
                        <div>add new modal</div>
                    </AddNewModal>
                </AddNewContainer>
            </HCenter>
        )
    }

    //修改组件属性
    const TestEditComponentProps = () => {

        const moduleName="CssCart"

        return (
            <PreviewAutoLayout layoutName="PropsListAutolayout"  moduleName={moduleName} />
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
            {/* <Box overflow={'hidden'}>
                <TestContainerAutoLayout/>
            </Box> */}
            {/* <TestComponentAutoLayout/> */}
            {/* <TestDeleteComponent /> */}
            {/* <TestPreviewTriggerd/> */}
            {/* <TestComponentList/> */}
            <TestEditComponentProps/>
            
        </ChakraProvider>
       
    )
}
