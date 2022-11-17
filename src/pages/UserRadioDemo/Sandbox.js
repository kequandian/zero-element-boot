import React, { useState, useEffect } from 'react';

import UserRadioContainer from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from './gateway.json'

export default function (props) {

    const api = '/api/pub/data/services/navigation?typeId=41';

    const [ data ] = useTokenRequest({api, bindFiles});
    console.log('data == ', data)
    if(data && data.length > 0){
        data.map(item => {
            item.checked = false;
            return item;
        })
    }

    return (
        <>
            {
                data && data.length > 0 ? (
                    <div style={{background:'white'}}>
                    <UserRadioContainer {...props} data={data}/>
                </div>
                ): <></>
            }
        </>
    )
}