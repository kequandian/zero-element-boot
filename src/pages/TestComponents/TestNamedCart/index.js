import React from 'react';

import { NamedCart } from '@/components';
import { Spacer } from '@chakra-ui/layout';
import { VStack, Text, Box } from '@chakra-ui/react'
import PageCenter from '@/components/container/PageCenter';
import CircularCheckboxSelector from  '@/components/selector/CircularCheckboxSelector';

// test single cart 
const TestNamedCart = () => {
    return (
        <PageCenter>
            <Box w='200px' h='100px'>
                <VStack>
                    <NamedCart xname="Cart">
                        <CircularCheckboxSelector>Default</CircularCheckboxSelector>
                    </NamedCart>
                    <Spacer />
                    <NamedCart xname="Cart">
                        <CircularCheckboxSelector selected>seleected</CircularCheckboxSelector>
                    </NamedCart>
                </VStack>
            </Box>
        </PageCenter>
    )
}

//test selector
const TestNamedSelector = () => {
    return (
        <PageCenter>
            <Box w='200px' h='100px'>
                <VStack>
                    <NamedCart selector="CircularCheckboxSelector" selected>
                        <div>NamedSelector</div>
                    </NamedCart>
                </VStack>
            </Box>
        </PageCenter>
    )
}

export default function index(props) {
    return (
        // <TestNamedCart />
        <TestNamedSelector/>
    )
}
