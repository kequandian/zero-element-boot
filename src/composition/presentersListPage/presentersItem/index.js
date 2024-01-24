import React from 'react';
import { Flex, Center, Box, VStack, Spacer } from "@chakra-ui/react";
import { get as NamedPresenterGet } from '@/components/config/NamedPresenterConfig';

/**
 * 
 */
export default function (props) {

    const { _xname_, _props_, index=0 } = props;

    const C = NamedPresenterGet()[_xname_] || <div></div>;

    return (
        <VStack align='center'><C {..._props_} /></VStack>
    )

}