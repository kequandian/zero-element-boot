import React from 'react';

import PlainList from '@/components/list/PlainList';
import NamedLayout from '@/core/NamedLayout';
import NamedCart from '@/core/NamedCart';

const { CartItem } = require('@/components/composition/Demo')

export default function PlainListDemo(props){

    /**
     * cart 
     * name: '', ( Cart, HoverShadowCart, HightlightCart)
     */


    const config = {
        items:[
            {icon:'',  title:'title111',  subTitle:'subTitle111',},
            {icon:'',  title:'title222',  subTitle:'subTitle222',},
            {icon:'',  title:'title333',  subTitle:'subTitle333',},
            {icon:'',  title:'title444',  subTitle:'subTitle444',},
          ],
        layout: {
            name:'Flexbox',
            props: {
                align: 'start', 
                direction: 'row',
            },
        },
        cart:{
            name: 'HoverShadowCart',
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