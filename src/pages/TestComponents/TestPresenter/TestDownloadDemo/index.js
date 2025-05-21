import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";

import { DownloadButton } from '@/components/presenter';


export default function Index(props) {
    
    /**
     * @param { 下载API, 可拼接endpoint } downloadApi
     * @param { 问号后面的参数 } query
     */
    const requestData = {
        downloadApi: '/dev/connection/snapshot/instant',
        query: {
            ruler:'222'
        }
    }

    return (
        <ChakraProvider>
            <DownloadButton {...requestData}/>
        </ChakraProvider>
    )
}