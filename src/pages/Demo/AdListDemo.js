import React, { useState, useEffect } from 'react';

import { NamedList, NamedLayout, NamedCart } from "@/components";
import AutoLayout from '@/components/AutoLayout'

const { AdItem } = require('@/presenter/composition');

const promiseAjax = require('@/utils/request');


export default function AdListDemo(props) {

    const { onItemClickHandle } = props;

    // const endpoint = 'http://192.168.3.236:8888';
    // const accountToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAxMCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgzMCIsInVzZXJUeXBlIjoxMDEsImJVc2VyVHlwZSI6IlNZU1RFTSIsInRlbmFudE9yZ0lkIjoxMDAwMDAwMDAwMDAwMDAwMTAsImFjY291bnQiOiJhZG1pbiIsImV4dHJhVXNlclR5cGUiOjAsImlhdCI6MTYwNzMwNjU3MywianRpIjoiODc2NzA4MDgyNDM3MTk3ODMwIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MDc1NjU3NzN9.6J1ozLxN4PO6TpbGPb1-Y77-AyLxWbGY4kmheDiWkksI0w7SyotNSc7rD358bRk9I7pbpCizyBlVbUDbzcIxwQ';
    const api = '/api/adList'

    // const callBack = (data) => {
    //     console.log('token = ', data.token)
    //     console.log('permissions = ', data.permissions)
    // }
    // const [users, changeUser] = useUaasTestUser({ endpoint, accountToken }, callBack);

    const [adList, setAdList] = useState([]);

    function handleQuery(API, queryData) {
        return promiseAjax(API, queryData).then(response => {
            if (response && response.code === 200) {
                setAdList(response.data);
            }
        });
    }

    useEffect(_ => {
        handleQuery(api);
    }, []);

    //Cart HoverShadowCart
    const config = {
        items: adList.length > 0 ? adList : [],
        layout: {
            xname: 'Flexbox',
            props: {
                align: 'start',
                direction: 'row',
            },
            gateway: {
                xname: 'Binding',
                props: {
                    binding: {
                        url: 'url',
                        title: 'title',
                        describe: 'describe'
                    }
                }
            },
            cart: {
                xname: 'ItemCart',
                props: {
                    padding: '20px',
                }
            },
            container: 'PlainList'
        },
    };

    const onClick = (item) => {
        // changeUser(item.id)
        console.log(item)
        onItemClickHandle();
    }

    // return (
    //     <NamedList name='PlainList' {...config} onItemClick={onClick}>
    //         <NamedLayout>
    //             <NamedCart>
    //                 
    //             </NamedCart>
    //         </NamedLayout>
    //     </NamedList>
    // )

    return (
        <AutoLayout {...config} onItemClick={onClick} >
            <AdItem />
        </AutoLayout>
    )
}