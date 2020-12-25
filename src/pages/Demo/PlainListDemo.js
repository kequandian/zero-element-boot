import React from 'react';

import PlainList from '@/components/list/PlainList';
import NamedLayout from '@/components/NamedLayout';
import NamedCart from '@/components/NamedCart';

const { CartItem } = require('@/presenter/composition')

export default function PlainListDemo(props){

    /**
     * cart 
     * name: '', ( Cart, HoverShadowCart, HightlightCart)
     */


    const config = {
        items:[
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title111',  subTitle:'subTitle111',},
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title222',  subTitle:'subTitle222',},
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title333',  subTitle:'subTitle333',},
            {icon:'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',  title:'title444',  subTitle:'subTitle444',},
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