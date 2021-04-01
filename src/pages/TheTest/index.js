import React from 'react';
import Butter from '@/presenter/default/Butter'
import NamedCart from '@/components/NamedCart'

export default function TestCart(props){
    return(
        <NamedCart xname="ItemCart">
            <Butter />
        </NamedCart>
    )
}