import React, { useState, useEffect } from 'react';
import qs from 'qs';

import PreviewAutoLayout from '@/components/PreviewAutoLayout/index'
import PreviewItem from './PreviewItem';
import useQuery from '@/components/hooks/useQuery';


export default function Sandbox(props) {

  // const params = props.location.query ||  qs.parse(props.location.search.split('?')[1])
  const params = useQuery()

  const [ apiPath, setApiPath ] = useState('')

  useEffect(_ => {
    setApiPath('')
    getApiUrl()
  }, [params])

  function getApiUrl() {
    if(params.api){
      setApiPath(params.api)
    }
  }

  //从路径中获取数据
  let apiName = params.apiName || ''
  let testLayoutName = params.testLayoutName || ''
  let testBindingName = params.testBindingName || ''
  
  let layoutApi = params.layoutApi || ''
  let layoutName = params.layoutName || ''
  let bindingName = params.bindingName || ''
  let layoutId = params.layoutId || ''


  //组件集
  const allComponents = { PreviewItem }

  //设置为空值，layoutData 从layoutApi 或 layoutName 中获取
  const layoutData = {}

  //数据集名称
  let mockName = params.mockName || ''

  return (
    <>
        <PreviewAutoLayout api={apiPath} apiName={apiName} 
          layoutData={layoutData} layoutApi={layoutApi} 
          layoutName={layoutName} 
          bindingName={bindingName}
          layoutId={layoutId} allComponents={allComponents} 
          testLayoutName={testLayoutName}
          testBindingName={testBindingName}
          mockName={mockName}
        />
    </>
  )
}

