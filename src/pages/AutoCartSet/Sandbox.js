import React, { useState, useEffect } from 'react';
import { ChakraProvider} from "@chakra-ui/react";

import AutoCartSet from './index';


export default function (props) {

    let endpoint='http://app1.console.smallsaas.cn:8001/openapi'

    const onHandleItemClick = (item) => {
        // console.log(item, ' === item')
    }
    
    return (
        <ChakraProvider>
            <AutoCartSet onItemClick={onHandleItemClick} endpoint={endpoint} />
        </ChakraProvider>
    )
}