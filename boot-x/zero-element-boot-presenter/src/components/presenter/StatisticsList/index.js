import React from 'react';
import { Flex, Center, Box, Stack, Spacer } from "@chakra-ui/react";
import Progress from "../Progress";
require('./index.less');

/**
 * @param {Array} list 统计数据
 */
export default function (props) {

    const { list } = props;

    return <div className="listContent">
        <Flex h="30px" align="right">
            <Box p="2">
            </Box>
            <Spacer />
            <Box>
                <Center color="#1FA7B2">
                    *好评率
                </Center>
            </Box>
        </Flex>
        <Stack spacing={5}>
            { list.map((item, index) =>{
                return (
                    <Flex h="30px" key={index}>
                        <Center w="30px">
                            {index+1}
                        </Center>
                        <Box flex="1">
                            <Progress height="30px" percentageNum={item.value/100} progressName={item.title} indexValue={index+1}/>
                        </Box>
                        {/* <Center w="50px" >
                            {item.value}%
                        </Center> */}
                    </Flex>
                )
            })}
            
        </Stack>
    </div>

}