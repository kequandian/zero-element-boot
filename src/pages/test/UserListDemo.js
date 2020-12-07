import React, { useState, useEffect } from 'react';

import PlainList from '@/components/NamedList/PlainList';
import NamedLayout from '@/components/NamedLayout';
import NamedCart from '@/components/NamedCart';

const promiseAjax = require('@/utils/request');

const { UserItem } = require('@/components/Composition');

import listData from './data/UserListData';

export default function UserListDemo(props) {

    const [ userList, setUserList ] = useState([]);

    useEffect(_ => {
        const API = 'http://192.168.3.236:8888/api/adm/users/testUserList';

          const queryData = {
            token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAxMCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgzMCIsInVzZXJUeXBlIjoxMDEsImJVc2VyVHlwZSI6IlNZU1RFTSIsInRlbmFudE9yZ0lkIjoxMDAwMDAwMDAwMDAwMDAwMTAsImFjY291bnQiOiJhZG1pbiIsImV4dHJhVXNlclR5cGUiOjAsImlhdCI6MTYwNzMwNjU3MywianRpIjoiODc2NzA4MDgyNDM3MTk3ODMwIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MDc1NjU3NzN9.6J1ozLxN4PO6TpbGPb1-Y77-AyLxWbGY4kmheDiWkksI0w7SyotNSc7rD358bRk9I7pbpCizyBlVbUDbzcIxwQ'
          }
          promiseAjax(API, {}, queryData)
            .then(responseData => {
              console.log('request rst: ', responseData);
      
              if (responseData && responseData.code === 200) {
                setUserList(responseData.data)
              }
            })
      }, []);

    const config = {
        items: userList,
        layout: {
            name: 'Box',
            props: {
                align: 'start',
                direction: 'column',
            },
        },
        cart: {
            name: 'Cart',
            props: {
                margin: '0px'
            },
        }

    };

    return (
        <PlainList {...config} >
            <NamedLayout>
                <NamedCart>
                    <UserItem />
                </NamedCart>
            </NamedLayout>
        </PlainList>
    )

}