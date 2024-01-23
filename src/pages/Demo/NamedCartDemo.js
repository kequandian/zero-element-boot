import React from 'react';

import { NamedCart } from "@/components";

const { Text } = require('@/components/presenter')

export default function NamedCartDemo(props) {

    const config = { 
        content: 'title',
        __cart:{
            xname:'CssCart',
            props:{
                "style": {
                    "borderWidth": "1px",
                    "borderColor": "#1E1E1E",
                    "borderStyle": "solid"
                  }
            }
        }
    }

    return (
        <NamedCart {...config}>
            <Text />
        </NamedCart>
    )
}