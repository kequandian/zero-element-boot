import React from 'react';

import { ChakraProvider, Box, background } from '@chakra-ui/react'

import { ChakraButton } from '@/components/presenter';
import { LS } from 'zero-element/lib/utils/storage';

export default function TestPresenter(props) {

    const TestChakraButton = () => {
        const params = {
            w: '400px',
            h: '62px',
            borderRadius: '18px',
            fontSize: '20px',
            background: '#F2F2F2',
        }
        return (
            <ChakraButton {...params}>
                Test
            </ChakraButton>
        )
    }

    return (
        <ChakraProvider>
            {/* <Box w="100px" h="100px">
                <DefaultPlaceholder color="#11A1C6" name="#11A1C6"/>
            </Box> */}
            <TestChakraButton />
        </ChakraProvider>

    )
}

