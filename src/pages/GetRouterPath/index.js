<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const useRouterParams = require('@/components/hooks/useRouterParams');


export default function Index(props) {
=======
import { useState, useEffect } from 'react';

const useRouterParams = require('@/components/hooks/useRouterParams');

// const useRouterParams = require('@/components/hooks/useRouterParams');

export default function GetRouterPath(props) {
>>>>>>> b9cf5aac3d9a24b92899e76f29e39133f6f790e3

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