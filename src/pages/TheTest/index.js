import React from 'react';
import Butter from '@/presenter/default/Butter'
import NamedCart from '@/components/NamedCart'
import Binding from '@/components/gateway/Binding'

export default function TestNamedCart(props){
    const data={
        color:"#F2D388",
        reg:"RGB(242,211,136)"
    }
    return(
        <NamedCart xname="ItemCart">
            <Binding {...data}>
                <Butter />
            </Binding>
        </NamedCart>
    )
}