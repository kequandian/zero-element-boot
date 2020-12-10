import React from 'react';

import PlainList from '@/components/NamedList/PlainList';
import NamedLayout from '@/components/NamedLayout';
import NamedCart from '@/components/NamedCart';

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
                direction: 'row-reverse',
            },
        },
        cart:{
            // name:'Shape',
            // props: {
            //     corner: '30px', 
            //     fill:'#F1F3F4',
            //     stroke:'#cccccc',
            //     lineWidth:'3px',
            // },

            name:'Round',
            props: {
            },
        }

    };

    return (
        <PlainList {...config} >
            <NamedLayout>
                <NamedCart>
                    <CartItem />
                </NamedCart>
            </NamedLayout>
        </PlainList>
    )
}