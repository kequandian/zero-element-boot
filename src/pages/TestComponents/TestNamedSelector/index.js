import React from 'react';

import { VStack, Text, Box } from '@chakra-ui/react'
import PageCenter from '@/components/container/PageCenter';
import NamedSelector from '@/components/NamedSelector'

export default function index(props) {
    return (
        <PageCenter>
            <Box w='200px' h='100px'>
                <VStack>
                    <NamedSelector selector={'OutlineSelector'} selected>
                        CircularCheckboxIndicator
                    </NamedSelector>
                </VStack>
            </Box>
        </PageCenter>
    )
}
