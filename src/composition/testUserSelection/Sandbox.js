import React, { useState, useEffect } from 'react';

import TestUserSelection from './index';

import useTokenRequest from '@/components/hooks/useTokenRequest';

import bindFiles from './gateway.json';

export default function (props) {

  let api = '';
  if (process.env.NODE_ENV === 'development') {
    api = '/x/api/users';
  }else{
    api = '/x/api/users.json'
  }

    const [ data ] = useTokenRequest({api});
    
    // console.log('data111111111 = ', data)

    return (
          data ? (
            <TestUserSelection {...props} data={data}/>
          ):<div></div>
    )
}