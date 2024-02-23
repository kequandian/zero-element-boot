import React from 'react';

import { ChakraProvider, HStack, Box, Button } from '@chakra-ui/react';
import CoupleSideContainer from '@/components/container/CoupleSideContainer';

import PreviewAutoLayout from '@/components/PreviewAutoLayout'
import LocalPreview from './localPreview'

export default function Index(props) {

    const api = '/openapi/lc/module?componentOption=selector'
    const layoutApi = '/openapi/crud/lc_low_auto_module/lowAutoModule/lowAutoModules/163'

    const converter = {
        "componentType": "__selector.xname",
        "componentProps": "__selector.props",
        "__selector":"__selector2"
    }

    return (
        <ChakraProvider>
            <CoupleSideContainer converter={converter}>
                <PreviewAutoLayout layoutApi={layoutApi} api={api} />
                <LocalPreview  />
            </CoupleSideContainer>
        </ChakraProvider>

    )
}
