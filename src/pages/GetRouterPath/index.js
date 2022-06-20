import React, { useState, useEffect } from 'react';

const useRouterParams = require('@/components/hooks/useRouterParams');


export default function Index(props) {

    const [ currParams, setCurrParams ] = useState({})

    useEffect(_=>{
        const params = useRouterParams(props)
        setCurrParams(params)
    })

    return (
        <>
            <div>当前路由参数: {JSON.stringify(currParams)}</div>
        </>
    )
}