import React, { useState, useEffect } from 'react';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import Tree from '@/components/tree/JsonTree'

export default function index(props) {

    const api = '/api/ContentTest'
    const [data] = useTokenRequest({ api })
    const datas = data[0]
    // const query = {
    // }
    // promiseAjax(`/api/ContentTest`, query, { method: "GET" })
    //     .then(res => {
    //         if (res && res.code === 200) {
    //             let data = res.data
    //             setData(data)
    //         }
    //     })
    // console.log('data ==',data)
    return (
        <>
            {/* <TreeItem keyName="xname" {...data}/> */}
            <Tree {...datas} />
        </>
    )




}