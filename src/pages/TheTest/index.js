import React from 'react';
import Butter from '@/presenter/default/Butter'
import Clean from '@/presenter/default/Clean'
import Pink from '@/presenter/default/Pink'
import Flexbox from '@/components/layout/Flexbox'
import Container from '@/components/container/Container'



export default function TestCart(props){
    return(
        <div style={{height:'1000px', display:'flex', alignContent:'center'}}>
        <Container>
            <Flexbox align="around" justify="center">
                <Butter />
                <Clean />
                <Pink />
            </Flexbox>
        </Container>
        </div>
    )
}