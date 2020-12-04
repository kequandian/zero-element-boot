import React from 'react';

import PlainList from '@/components/NamedList/PlainList';
import NamedLayout from '@/components/NamedLayout';

const { CartItem } = require('@/components/Composition')

export default function PlainListDemo(props){


    const config = {
        items:[
            {icon:'',  title:'title111',  subTitle:'subTitle111',},
            {icon:'',  title:'title222',  subTitle:'subTitle222',},
            {icon:'',  title:'title333',  subTitle:'subTitle333',},
            {icon:'',  title:'title444',  subTitle:'subTitle444',},
          ],
        layout: {
            name:'Box',
            props: {
                align: 'start-with-last-end', 
                direction: 'row-reverse'
            },
        },
    };

    return (
        <div style={{}}>
        <PlainList {...config} >
            <NamedLayout>
                <CartItem />
            </NamedLayout>
        </PlainList>
        </div>
    )
}