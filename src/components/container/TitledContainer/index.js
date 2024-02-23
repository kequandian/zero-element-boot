import React from 'react';
import { VStack, Text, Box } from '@chakra-ui/react'
  
/**
 * @param {string} title 标题 
 * 
 */
export default function TitledContainer(props) {
    const { children, title='', m='', ...rest }=props;

    const Child = React.Children.only(children);
    
    return (
      <VStack>
        <Box w={'100%'} p={'10px 10px 3px 10px'} m={m} display={'flex'} alignItems={'start'}>
          <Text p={0} m={0} fontWeight={'bold'} fontSize={20}>{title}</Text>
        </Box>
        <Box>
          { 
            React.cloneElement(Child, {
              ...rest,
           })
          }
        </Box>
      </VStack>
    )
}