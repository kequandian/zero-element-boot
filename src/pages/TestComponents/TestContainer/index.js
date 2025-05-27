import React from 'react';

import { ChakraProvider, VStack } from '@chakra-ui/react';
import { AutoLayout, NamedCart } from '@/components'
import DataFlowContainer from '@/components/container/DataFlowContainer';

import TestSelectList from '../../TestLists/TestSelectList'
import { Button, ChakraButton } from '@/components/presenter';
import { ChakraBox, Viewport, MaskBox } from '@/components/cart'
import PageCenter from '@/components/container/PageCenter';
import doBind from '@/components/gateway/doBind.mjs';
import doFilter from '@/components/gateway/doFilter.mjs';

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
    // return (
    //     <TestSelectList onItemSelected={(item)=>console.log('TestSelectList:onItemSelected, item = ', item)} />
    // )

    // const firstChildItemClick = (item, converter) => {
    //     console.log('DataFlowContainer: first child item clicked, item =', item)
        
    //     const bindingData = doBind(converter, item)
    //     console.log('DataFlowContainer: first child item clicked, bindingData =', bindingData)

    //     const filterData = doFilter(converter, bindingData)
    //     console.log('DataFlowContainer: first child item clicked, filterData =', filterData)

    //     return filterData
    // }

    // const _item = firstChildItemClick({id: '1', content: 'title1'}, {id: 'index', content: 'title'})
    // const content = JSON.stringify(_item)

    // return <div>{content}</div>
    

    return (
        <Viewport>
            <ChakraBox w='400px'>
                <DataFlowContainer converter={{id: 'index', content: 'title'}}  onResult={(result)=>{console.log('TestDataFlowContainer:onResult(data), data = ', result)}}>
                    <NamedCart xname='SquareBox' props={{color:'#FF7D03'}}>
                        <TestSelectList/>
                    </NamedCart>
                    <Button solid>确认</Button>
                </DataFlowContainer>
            </ChakraBox>
        </Viewport>
    )
}
