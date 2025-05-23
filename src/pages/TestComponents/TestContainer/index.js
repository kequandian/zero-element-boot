import React from 'react';

import { ChakraProvider, HStack, Box, Button, VStack } from '@chakra-ui/react';
import { AutoLayout } from '@/components'
import DataFlowContainer from '@/components/container/DataFlowContainer';

import TestSelectList from '../../TestLists/TestSelectList'
import { ChakraButton } from '@/components/presenter';
import PageCenter from '@/components/container/PageCenter';

export default function Index(props) {
    
    return (
        <PageCenter>
            <Box w='400px'>
                <DataFlowContainer>
                    <TestSelectList/>
                    <ChakraButton/>
                </DataFlowContainer>
            </Box>
        </PageCenter>
    )
}
