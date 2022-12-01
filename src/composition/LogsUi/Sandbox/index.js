import React, { useState, useEffect } from 'react';
import LogsUi from '@/composition/LogsUi'
const promiseAjax = require('@/components/utils/request');

export default function index (props) {

  const params = props.location.query ||  qs.parse(props.location.search.split('?')[1])

  const [ data, setData ] = useState([])

  useEffect(_ => {
    setData([])
    if(params && params.sign){
      getLogList()
    }else{
      alert('sign 无效')
    }
  }, [params])

  function getLogList() {
    
    const api = `/dev/logs/json?sign=${params.sign}`;
    const queryData = {};
    promiseAjax(api, queryData).then(resp => {
        if (resp && resp.code === 200) {
          const newData = []
          resp.data.map((item, index) => {
              const newItem = {}
              newItem.id = index + 1;
              newItem.value = item;
              newData.push(newItem)
          })
          setData(newData)
        } else {
            console.error("获取 logs 列表失败")
        }
      }).catch(err =>{
        alert('签名错误或已过期!')
      });
    
  }

  // const dataX = []
  // dataX.push({ items: data })

  return (
    <>
      { data && data.length > 0 ? (
          <LogsUi data={data} sign={params.sign}/>
      ):<></>}
    </>
  )

}