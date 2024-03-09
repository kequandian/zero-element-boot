import React from 'react';

import { NamedCart } from "@/components";

const { Text } = require('@/components/presenter')

export default function NamedCartDemo(props) {

    const config = {
        __cart: {
            xname: 'SquareCart',
            props: {
                fill: '#ccc',
                corner: '10px',
                margin: '0px'
            }
        }
    }

    return (
        <div style={{ width: '100px' }}>
            <NamedCart {...config}>
                <>
                 <Text content='title1' />
                    <Text content='title2' />
                </>
            </NamedCart>
        </div>

    )
}