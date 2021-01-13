import React from 'react'

import Container from '@/components/container/Container';
import UserItem from '@/composition/UserItem';

export default function NamedCartTest(props){

    const config= {
        "avatar": "https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png",
        "title": "admin"
    }

    return (
        <Container {...config} >
            <UserItem />
        </Container>
    )
}

