import React from 'react';
import { AutoLayout } from '@/export';

import ListItem from './ListItem';

export default function Index(props) {

    const { componentName, records } = props;

    //Cart HoverShadowCart
    const config = {
        items: records.length > 0 ? records : [],
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'row',
            },
            gateway: {
                xname: 'Binding',
                props: {
                    binding: {
                        name: 'name',
                        pathUrl: 'pathUrl',
                        imageUrl: 'imageUrl',
                    }
                }
            },
            cart: {
                xname: 'Cart',
                props: {
                    padding: '16px',
                    isOnHover: false
                }
            },
            container: 'PlainList'
        },
    };

    const onClick = (item) => {
        console.log(item)
    }

    return (
        <div style={{display: 'flex', flexFlow: 'column'}}>
            <div style={{ width: '100%', height: '45px', lineHeight: '45px', fontSize: '18px' }}>
                {componentName}
            </div>
            <AutoLayout {...config} >
                <ListItem />
            </AutoLayout>
        </div>
    )
}