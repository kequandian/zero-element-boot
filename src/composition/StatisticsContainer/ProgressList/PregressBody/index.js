import React from 'react';
import { Flex, Center, Box, Stack, Spacer } from "@chakra-ui/react";
import Progress from "@/presenter/demo/Progress";
require('./index.less');

/**
 * 
 */
export default function (props) {

    const { bgColor, value, title, index=0 } = props;

    return <Flex h="30px">
        <Center w="30px">
            {index+1}
        </Center>
        <Box flex="1">
            <Progress height="30px" bgColor={bgColor} percentageNum={value/100} progressName={title} indexValue={index+1}/>
        </Box>
        {/* <Center w="50px" >
            {item.value}%
        </Center> */}
    </Flex>

}