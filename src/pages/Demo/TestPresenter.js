import React from 'react';

import { Box } from '@chakra-ui/react'

import PaletteColor from '@/components/presenter/PaletteColor'

export default function TestPresenter(props) {

    return (
        <Box w="100px" h="100px">
            <PaletteColor color="#11A1C6" name="#11A1C6"/>
        </Box>
    )
}

