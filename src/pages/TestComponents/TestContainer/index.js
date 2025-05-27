import React from 'react';

import { ChakraProvider, VStack } from '@chakra-ui/react';
import { AutoLayout, NamedCart } from '@/components'
import DataFlowContainer from '@/components/container/DataFlowContainer';

import TestSelectList from '../../TestLists/TestSelectList'
import { Button, ChakraButton } from '@/components/presenter';
import { ChakraBox, Viewport, MaskBox } from '@/components/cart'
import PageCenter from '@/components/container/PageCenter';

export default function Index(props) {
    // const TestMaskBox = ()=>{
    //     return (
    //         <MaskBox show={true}>
    //             <Button solid>确认</Button>
    //         </MaskBox>
    //     )
    // }
    // return (
    //     <TestMaskBox/>
    // )

    return (
        <Viewport>
            <ChakraBox w='400px'>
                <DataFlowContainer>
                    <NamedCart xname='SquareBox' props={{color:'#FF7D03'}}>
                        <TestSelectList/>
                    </NamedCart>
                    <Button solid>确认</Button>
                </DataFlowContainer>
            </ChakraBox>
        </Viewport>
    )
}
