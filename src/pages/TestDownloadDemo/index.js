import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";

import { DownloadCompx } from '@/presenter/demo';


export default function Index(props) {

    const requestData = {
        downloadApi: '/dev/connection/snapshot/instant',
        query: {
            ruler:'222'
        }
    }

    return (
        <ChakraProvider>
            <DownloadCompx {...requestData}/>
        </ChakraProvider>
    )
}