import React, { useState } from 'react';

import { 
    ChakraProvider, Text
} from "@chakra-ui/react";

export default function Index(props) {

    const { value,  } = props;

    return (
        <ChakraProvider>
            <Text h={'24px'}>{value}</Text>
        </ChakraProvider>
    )
}