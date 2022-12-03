import React from 'react';
import { Butter, Clean, Pink } from '@/components/presenter'
import Flexbox from '@/components/layout/Flexbox'
import PageCart from '@/components/cart/PageCart';
import Cart from '@/components/cart/SelectCart';
import Avatar from '@/components/presenter/Avatar';

export default function TestPageCart(props) {
    return (
        <PageCart>
             <Cart>
                <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
            </Cart>
        </PageCart>

    )
}