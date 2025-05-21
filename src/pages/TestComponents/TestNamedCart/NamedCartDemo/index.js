import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { NamedCart, NamedContainer, NamedLayout, AutoLayout } from "@/components";
import autoLayoutLayout from './layout'

const { Text } = require('@/components/presenter')

export default function NamedCartDemo(props) {

    const config = {
        __cart: {
            xname: 'SquareBox',
            props: {
                fill: '#ccc',
                corner: '10px',
                margin: '0px'
            }
        }
    }

    const autoLayoutConfig = {
        layout: autoLayoutLayout
    }

    const itemClick = (item) => {
        console.log('item = ', item)
    }

    return (
        <AutoLayout {...autoLayoutConfig} onItemClick={itemClick} />
    )

    return (
        <NamedContainer>
            <NamedLayout>
                <NamedCart {...config}>
                    <>
                        <Text content='title1' />
                        <Text content='title2' />
                    </>
                </NamedCart>
            </NamedLayout>
        </NamedContainer>
    )
}