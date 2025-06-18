import React from 'react';

import { AutoLayout, NamedCart } from '@/components'
import TestSelectList from './TestSelectList';
import TestGroupedList from './TestGroupedList';

import { Button, ChakraButton } from '@/components/presenter';
import { ChakraBox, Viewport, MaskBox } from '@/components/cart'

export default function Index(props) {
    return (
        <Viewport>
            <ChakraBox w='400px'>
                <NamedCart xname='SquareBox' props={{color:'#FF7D03'}}>
                    <TestSelectList/>
                </NamedCart>
            </ChakraBox>
        </Viewport>
    )
}
