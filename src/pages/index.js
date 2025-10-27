import React from 'react';
// import { ChakraProvider } from "@chakra-ui/react";
import BootChakraProvider from '@/components/provider/BootChakraProvider';
import TestIndex from './TestIndex';
import NavUi from '@/composition/NavUi'

export default function index (props) {

  return (
    <BootChakraProvider value={{ usedTag: true }}>
      {/* <TestIndex {...props} />; */}
      <NavUi {...props} />
    </BootChakraProvider>
  )

}