import React from 'react';

import { NamedList, NamedLayout, NamedCart } from "@/components";

const { CircleItem } = require('@/presenter/composition')

export default function CircleListDemo(props) {

    /**
     * cart 
     * name: '', ( Cart, HoverShadowCart, HightlightCart)
     */

    const config = {
        items: [
            { icon: 'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png', title: 'title111', subTitle: 'subTitle111', },
            { icon: 'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png', title: 'title222', subTitle: 'subTitle222', },
            { icon: 'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png', title: 'title333', subTitle: 'subTitle333', },
            { icon: 'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png', title: 'title444', subTitle: 'subTitle444', },
        ],
        template: {
            layout: {
                name: 'Flexbox',
                props: {
                    align: 'start',
                    direction: 'row',
                    itemStyle: {
                        width: 'width-100'
                    }
                },
            },
            cart: {
                name: 'Circle',
                props: {
                    fill:'',
                    outline:''
                },
            }
        }

    };

    const onClick = (item) => {
        // changeUser(item.id)
        console.log(item)
    }

    return (
        <NamedList name='PlainList' {...config} onItemClick={onClick}>
            <NamedLayout>
                <NamedCart>
                    <CircleItem />
                </NamedCart>
            </NamedLayout>
        </NamedList>
    )
}