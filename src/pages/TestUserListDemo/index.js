import React from 'react';
import qs from 'qs';

import TestUserSelection from '../../composition/testUserSelection/Sandbox';

export default function Index(props) {

    const { data } = qs.parse(location.search.replace('?', ''));
    
    // console.log('location = ', location)

    let newUser = ''
    if(data){
        newUser = JSON.parse(data)
    }

    return (
        <>
            <TestUserSelection newUser={data}/>
        </>
    )
}