import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import PageCenter from '@/components/cart/PageCenter';
import Avatar from '@/components/presenter/Avatar/Avatar';
import Outline from '@/components/cart/Outline';

export default function TestPageCart(props) {

    const TestOutlineCart = () => {
        
        const props = {
            color:'#037DFF', 
            tag:false, 
            dash:false, 
            // shape: 'round', 
            fill:false
        }

        return (
            <Outline {...props}>
                <Box w={'200px'} h={'100px'} >
                    Box
                </Box>
            </Outline>
        )
    }

    return (
        <ChakraProvider>
            {/* <PageCenter>
                <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
            </PageCenter> */}
            <TestOutlineCart/>
        </ChakraProvider>
    )
}