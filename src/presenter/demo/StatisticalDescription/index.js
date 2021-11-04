import React from 'react';
import { Flex, Center, Box, Spacer } from "@chakra-ui/react";

/**
 * @param {String} contentTxt 内容
 */
export default function (props) {

    const { contentTxt } = props;

    return (
        <div style={{ width: '100%', marginTop: '20px'}}>
            <Flex h="30px" align="right">
                <Box p="2">
                </Box>
                <Spacer />
                <Box>
                    <Center color="#1FA7B2">
                        {contentTxt}
                    </Center>
                </Box>
            </Flex>
        </div>
    )

}