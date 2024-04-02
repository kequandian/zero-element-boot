import React from 'react';

import { ChakraProvider, HStack, Box, Button  } from '@chakra-ui/react';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';

import { WxPage } from '@/components/container';
import { HCenter } from '@/components/cart';

export default function TextPreviewAutoLayout(props) {

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
            <TestContainerAutoLayout/>
            
        </ChakraProvider>
       
    )
}
