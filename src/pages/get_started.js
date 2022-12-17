import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";

import StartAutoLayout from '@/pages/get_started/StartAutoLayout/Sandbox'
import { PageCenter, HCenter } from '@/components/cart';

export default function Index(props) {

  return (
    <ChakraProvider>
      <HCenter offset='60px'>
        <StartAutoLayout />
      </HCenter>
    </ChakraProvider>
  )
}
