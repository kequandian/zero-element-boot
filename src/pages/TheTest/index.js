import React from 'react';
import Butter from '@/presenter/default/Butter'
import NamedCart from '@/components/NamedCart'
import NamedGateway from '@/components/NamedGateway'

export default function TestNamedCart(props){
    const data={
        color:"#F2D388",
        reg:"RGB(242,211,136)"
    }
    return(
        <NamedCart xname="ItemCart">
            <NamedGateway xname="Binding" {...data}>
                <Butter />
            </NamedGateway>
        </NamedCart>
    )
}