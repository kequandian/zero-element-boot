import React from 'react';
import { Image } from '@chakra-ui/react'
import { getEndpoint } from '@/components/config/common';

export default function Index(props) {

    const { value, styles } = props;

    return (
        <Image src={getEndpoint() + value} />
    )
}