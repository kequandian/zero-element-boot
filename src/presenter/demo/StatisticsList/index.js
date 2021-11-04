import React from 'react';
import { Flex, Center, Box, Stack, Spacer } from "@chakra-ui/react";
import Progress from "../Progress";
require('./index.less');

/**
 * @param {Array} list 统计数据
 */
export default function (props) {

    const { list } = props;

    return <div className="statistics_list_content">
        <Stack spacing={5}>
            { list.map((item, index) =>{
                return (
                    <Flex h="30px" key={index}>
                        <Center w="30px">
                            {index+1}
                        </Center>
                        <Box flex="1">
                            <Progress height="30px" bgColor={item.bgColor} percentageNum={item.value/100} progressName={item.title} indexValue={index+1}/>
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