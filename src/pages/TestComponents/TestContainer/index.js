import React from 'react';

import { ChakraProvider, VStack } from '@chakra-ui/react';
import { AutoLayout } from '@/components'
import DataFlowContainer from '@/components/container/DataFlowContainer';

import TestSelectList from '../../TestLists/TestSelectList'
import { Button, ChakraButton } from '@/components/presenter';
import { ChakraBox } from '@/components/cart'
import PageCenter from '@/components/container/PageCenter';

export default function Index(props) {
    
    return (
        <PageCenter>
            <ChakraBox w='400px'>
                <DataFlowContainer>
                    <TestSelectList/>
                    <Button solid>确认</Button>
                </DataFlowContainer>
            </ChakraBox>
        </PageCenter>
    )
}
