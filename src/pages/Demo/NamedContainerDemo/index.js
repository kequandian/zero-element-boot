import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import PlainManageList from "@/components/list/PlainManageList";
import DeleteIndicator from '@/components/indicator/DeleteIndicator';
import { APIContainer, NamedLayout, NamedContainer, NamedCart } from '@/components';


const { Text } = require('@/components/presenter')

export default function NamedContainerDemo(props) {

    const config = {
        listApi: '/openapi/lc/module-props/251', 
        addApi: '/openapi/crud/lc_low_auto_module_prop/lowAutoModuleProp/lowAutoModuleProps',
        addApiBody: {
            moduleId: 251,
        },
        newValueBinding: 'propName',
        converter: {
            "propName": "content",
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
        <ChakraProvider>
            <PlainManageList {...config}>
                <NamedCart cart={_cartConfig} >
                    <Text></Text>
                </NamedCart>
            </PlainManageList>
        </ChakraProvider>

    )
}