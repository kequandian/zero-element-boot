import React from 'react';
import { VStack, Text, Box } from '@chakra-ui/react'
  
/**
 * 
 * 
 */
export default function TitledContainer(props) {
    const { children, title='' }=props;

    const Child = React.Children.only(children);
    
    return (
      <VStack>
        <Box w={'100%'} p={10} display={'flex'} alignItems={'start'}>
          <Text p={0} m={0} fontWeight={'bold'} fontSize={20}>{title}</Text>
        </Box>
        <Box>
          { Child }
        </Box>
      </VStack>
    )
}