import React from 'react';

import { NamedCart } from '@/components';
import { Spacer } from '@chakra-ui/layout';
import { VStack, Text, Box } from '@chakra-ui/react'
import PageCenter from '@/components/container/PageCenter';

import RightIconIndicatorDefault from '@/components/selector/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/components/selector/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/components/selector/RightIconIndicatorSelected';

import LeftCheckboxSelector from '@/components/selector/LeftCheckboxSelector';
// import DefaultSelector from '@/components/selector/DefaultSelector'
import CircularCheckboxIndicator from '@/components/selector/CircularCheckboxSelector';
import NamedSelector from '@/components/NamedSelector'

export default function index(props) {
    return (
        <PageCenter>
            <Box w='200px' h='100px'>
                <VStack>
                    <NamedSelector selector={'CircularCheckboxSelector'} selected>
                        CircularCheckboxIndicator
                    </NamedSelector>


                </VStack>
            </Box>
        </PageCenter>
    )
}
