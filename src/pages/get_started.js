import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import StartAutoLayout from '@/pages/get_started/StartAutoLayout/Sandbox'

export default function Index(props) {

  return (
    <ChakraProvider>
        <StartAutoLayout />
    </ChakraProvider>
  )
}
