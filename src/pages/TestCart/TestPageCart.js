import React from 'react';
import {Butter, Clean, Pink} from '@/components/presenter/default'
import Flexbox from '@/components/layout/Flexbox'
import PageCart from '@/components/cart/PageCart';

export default function TestPageCart(props){
    return(
        <PageCart>
            <Flexbox align="around" justify="center">
                <Butter />
                <Clean />
                <Pink />
            </Flexbox>
        </PageCart>
    )
}