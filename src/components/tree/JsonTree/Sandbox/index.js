import React, { useState, useEffect } from 'react';
// import useTokenRequest from '@/components/hooks/useTokenRequest';
import Tree from '@/components/tree/JsonTree'
const promiseAjax = require('@/components/utils/request');

export default function index(props) {

    const params = props.location.query ||  qs.parse(props.location.search.split('?')[1])

    const [ jsonData, setJsonData ] = useState('')
    
    // const api = params.api || `/openapi/lc/apis/${params.apiName}`
    // const api = `/api/ContentTest`
    // const [data] = useTokenRequest({ api })

    useEffect(_ => {
        if(params.api){
            getJsonDataByApi(params.api)
        }else if(params.apiName){
            getApiUrlByApiName()
        }
    },[]);

    //通过 apiName 获取 api路径
    function getApiUrlByApiName(){
        promiseAjax(`/openapi/lc/apis/${params.apiName}`)
            .then(res => {
                if (res && res.code === 200) {
                    let data = res.data
                    getJsonDataByApi(data.api)
                }
            })
    }

    //
    function getJsonDataByApi(api){
        promiseAjax(api)
            .then(res => {
                if (res && res.code === 200) {
                    let data = res.data
                    data = Array.isArray(data)? data[0] : typeof data === 'object' ? data : {}
                    setJsonData(data)
                }
            })
    }

    return (
        <>
            {/* <TreeItem keyName="xname" {...data}/> */}
            { jsonData && JSON.stringify(jsonData) !== '{}' && <Tree {...jsonData} />}
            
        </>
    )




}