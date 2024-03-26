import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import PlainManageList from "@/components/list/PlainManageList";
import KeyValueManageList from '@/components/list/KeyValueManageList';
import DrawerContainer from '@/components/container/DrawerContainer';
import { APIContainer, NamedLayout, NamedContainer, NamedCart } from '@/components';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';


const { Text, Subtitle } = require('@/components/presenter')

export default function NamedContainerDemo(props) {

    function TextPlainMenegeList() {
        const config = {
            listApi: '/openapi/lc/module/parameter/278', 
            addApi: '/openapi/crud/lc_low_auto_module_prop/lowAutoModuleProp/lowAutoModuleProps',
            addApiBody: {
                moduleId: 278,
            },
            newValueBinding: 'propName',
            converter: {"propName": "content"}
        }
    
        const _cartConfig = {
            xname: 'Cart',
            props: {
                padding: '10px 40px',
                margin: '2px',
                linewidth: '1px',
                corner: '8px',
            },
            indicator:{
                xname: "DeleteIndicator",
                props:{
                    isDisabled: true,
                    action: `/openapi/crud/lc_low_auto_module_prop/lowAutoModuleProp/lowAutoModuleProps/(id)`
                },
                binding: { id:"id" }
            }
        }
    
        return (
            <PlainManageList {...config}>
                <NamedCart cart={_cartConfig} >
                    <Text></Text>
                </NamedCart>
            </PlainManageList>
    
        )
    }

    function TextKeyValueManageList() {

        // const propsList = '/openapi/lc/module-props/278'
        const propsList = '/openapi/lc/module/assembly/KeyValueManageConverter'
        
        const config = {
            listApi: propsList, 
            addApi: '/openapi/crud/lc_low_auto_module_prop/lowAutoModuleProp/lowAutoModuleProps',
            addApiBody: {
                moduleId: 278,
            },
            newKeyBinding: 'propName',
            newValueBinding: 'propValue',
            converter: {
                propName: 'Title',
                propValue: 'Subtitle',
            }
        }
    
        const _cartConfig = {
            xname: 'Cart',
            props: {
                padding: '10px 40px',
                margin: '2px',
                linewidth: '1px',
                corner: '8px',
            },
            indicator:{
                xname: "DeleteIndicator",
                props:{
                    isDisabled: true,
                    action: `/openapi/crud/lc_low_auto_module_prop/lowAutoModuleProp/lowAutoModuleProps/(id)`
                },
                binding: { id:"id" }
            }
        }

        return (
            <KeyValueManageList {...config}>
                <NamedCart cart={_cartConfig} >
                    <NamedLayout xname="Flexbox" props={{align: 'between', direction: 'row'}}>
                        <Text></Text>
                        <Subtitle></Subtitle>
                    </NamedLayout>
                </NamedCart>
            </KeyValueManageList>
        )
    }

    function TextDrawerContainer() {
        const config = {
            layoutName: 'ComponentTypeList',
            moduleId: '320',
            converter: {
                api:'api',
                layoutApi: 'layoutApi',
                layoutName: 'layoutName',
            }
        }
        return (
            <DrawerContainer  {...config} >
                {/* <PreviewAutoLayout/> */}
            </DrawerContainer>
        )
    }

    return (
        <ChakraProvider>
            {/* <TextPlainMenegeList/> */}
            {/* <TextKeyValueManageList/> */}
            <TextDrawerContainer/>
        </ChakraProvider>

    )

    
}
