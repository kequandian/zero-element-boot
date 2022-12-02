import React, { useState } from 'react';

import { 
    ChakraProvider, Text
} from "@chakra-ui/react";

export default function Index(props) {

    const { value, fontSize='xl' } = props;

    return (
        <ChakraProvider>
            <Text fontSize={fontSize}>{value}</Text>
        </ChakraProvider>
    )
}