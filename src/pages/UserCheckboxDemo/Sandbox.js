import React, { useState, useEffect } from 'react';

import UserCheckboxContainer from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from './gateway.json'

export default function (props) {

    const api = '/api/userData';

    const [ data ] = useTokenRequest({api, bindFiles});

    if(data){
        data.map(item => {
            item.checked = false;
            return item;
        })
    }

    return (
        <>
            <div style={{background:'white'}}>
                <UserCheckboxContainer {...props} data={data}/>
            </div>
        </>
    )
}