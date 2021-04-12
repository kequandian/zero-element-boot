import React from 'react';
import Butter from '@/presenter/default/Butter'
import Clean from '@/presenter/default/Clean'
import Pink from '@/presenter/default/Pink'
import Flexbox from '@/components/layout/Flexbox'
import Container from '@/components/container/Container'
import PageCart from '@/components/cart/PageCart';



export default function TestCart(props){
    return(
        <PageCart>
        <Container>
            <Flexbox align="around" justify="center">
                <Butter />
                <Clean />
                <Pink />
            </Flexbox>
        </Container>
        </PageCart>
    )
}