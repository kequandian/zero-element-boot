import React from 'react';

import TestUserSelection from '@/pages/test/TestUserSelection';

export default function UserListDemo(props) {

    const onItemClickHandle = () => {
        console.log('event to dismiss the component')
    }

    return (
        <TestUserSelection onItemClickHandle={onItemClickHandle}/>
    )

}