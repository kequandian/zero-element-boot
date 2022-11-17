import React, { useState, useEffect } from 'react';

import SelectContainer from '../index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from '../gateway.json'

export default function (props) {

    const api = '/api/pub/data/services/navigation?typeId=41';

    const [ data ] = useTokenRequest({api, bindFiles});

    // if(data){
    //     data.map(item => {
    //         item.checked = false;
    //         return item;
    //     })
    // }

    return (
        <SelectContainer {...props} data={data}/>
    )
}