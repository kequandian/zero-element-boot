import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import PlainManageList from "@/components/list/PlainManageList";
import KeyValueManageList from '@/components/list/KeyValueManageList';
import { APIContainer, NamedLayout, NamedContainer, NamedCart } from '@/components';


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
        
        const config = {
            listApi: '/openapi/lc/module-props/278', 
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

    return (
        <ChakraProvider>
            <TextPlainMenegeList/>
            {/* <TextKeyValueManageList/> */}
        </ChakraProvider>

    )

    
}
