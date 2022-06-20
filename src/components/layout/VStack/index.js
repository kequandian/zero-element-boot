import React from 'react';
import Flexbox from '@/components/layout/Flexbox';
import Container from '@/components/container/Container'

export default function VStack(props) {


    const { children, ...data } = props;

    return (
        <Container>
            <Flexbox direction='column' {...data}>
                {children}
            </Flexbox>
        </Container>
    )
}
