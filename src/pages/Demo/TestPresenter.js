import React from 'react';

import { ChakraProvider, Box, background } from '@chakra-ui/react'

import PaletteColor from '@/components/presenter/PaletteColor'
import { ChakraButton } from '@/components/presenter';

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
                <PaletteColor color="#11A1C6" name="#11A1C6"/>
            </Box> */}
            <TestChakraButton />
        </ChakraProvider>

    )
}

