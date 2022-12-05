import React from 'react';
import { Butter, Clean, Pink } from '@/components/presenter'
import Flexbox from '@/components/layout/Flexbox'
import Wrap from '@/components/layout/Wrap'
import PageCart from '@/components/cart/PageCart';
import CssCart from '@/components/cart/CssCart';
import Avatar from '@/components/presenter/Avatar';

export default function TestPageCart(props) {
    return (
        <>
            <CssCart width='700px' height='450px' backgroundColor='#f0f0f0' padding='10px' margin='30px'>
                <Wrap>
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                    <Avatar size='70' url='https://static.smallsaas.cn/house/2022/svg/group/moerdeng/detailedDiagram/moerdeng2.png' />
                </Wrap>
            </CssCart>
        </>
    )
}