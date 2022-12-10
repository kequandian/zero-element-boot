import React from 'react';
import {Butter, Clean, Pink} from '@/components/presenter'
import Flexbox from '@/components/layout/Flexbox'
import PageCenter from '@/components/cart/PageCenter';

export default function TestPageCart(props){
    return(
        <PageCenter>
            <Flexbox align="around" justify="center">
                <Butter />
                <Clean />
                <Pink />
            </Flexbox>
        </PageCenter>
    )
}