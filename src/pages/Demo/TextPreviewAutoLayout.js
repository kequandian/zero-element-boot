import React from 'react';

import { ChakraProvider, HStack, Box, Button  } from '@chakra-ui/react';
import PreviewAutoLayout from '@/components/PreviewAutoLayout'

export default function TextPreviewAutoLayout(props) {

    return (

        <ChakraProvider>
            <PreviewAutoLayout layoutName="PropsManage" moduleId="278"/>
        </ChakraProvider>
       
    )
}
