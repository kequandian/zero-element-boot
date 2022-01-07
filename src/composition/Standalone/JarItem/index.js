import React from 'react';
import { Flex, Center, Box, Stack, Spacer } from "@chakra-ui/react";
import Progress from "@/presenter/demo/Progress";
require('./index.less');

/**
 * 
 */
export default function (props) {

    const { value, index=0 } = props;

    return (
        <div className="textColor">
            <Flex h="30px">
                {/* <Center w="40px">
                    {index+1}
                </Center> */}
                <Center axis='vertical' >
                  {`${index+1}.   ${value}`}
                </Center>
                <Center w="10px">
                </Center>
            </Flex>
        </div>
    )
    
 

}