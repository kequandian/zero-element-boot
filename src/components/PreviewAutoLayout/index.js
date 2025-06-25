import React, { useState, useEffect } from 'react';
import  AutoLayout  from '@/components/AutoLayout';
import { VStack } from '@chakra-ui/react';
import SquareAddNew from '@/components/presenter/button/SquareAddNew';

import { LS } from 'zero-element/lib/utils/storage';
import useTokenRequest from '@/components/hooks/useTokenRequest';
const promiseAjax = require('@/components/utils/request');

export default function PreviewAutoLayout (props) {

  const {
    Children,
    api,                        // 通过API获取数据
    apiName, mockName,          // 通过apiName获取数据, mockName为数据集名称
    layoutApi,                  // 通过API获取组件布局描述
    layoutName, layoutData,     // 通过layoutName获取layoutData, layoutData为完整布局数据
      layoutId,                   // 是layoutApi的另一种参数，意义同 layoutName
    bindingName,                // 通过数据绑定名称获取绑定
    testLayoutName, testBindingName, 
    onItemClick,
    ___,                        // 内部使用, 是否为 `PreviewAutoLayout` 提供最外层 `Indicator`
    previewAddNew,
    ...rest
  } = props;
  
  // console.log('=== PreviewAutoLayout props == ', props)

  const [ _layoutName, setLayoutName ] = useState(layoutName || LS.get('commonData').layoutName)
  const [ mockData, setMockData ] = useState('')
  // const [dataSource, setDataSource] = useState('')
  // const [ alternativeActive, setAlternativeActive ] = useState(false)

  useEffect(_=>{
    if(mockName){
      getLayouByMockName(mockName)
    }
  }, [mockName])

  //@when 2025-02-23
  //@what handle layout json below 
  // useEffect(_=>{
  //   if(layoutName){
  //     setLayoutName(layoutName)
  //   }
  // }, [layoutName])

  function getLayouByMockName(mockName){
    const api = `/previewautolayout/mock/${mockName}.json`
      promiseAjax(api).then(resp => {
          setMockData(resp)
      }).finally(_ => {
      });
  }

  // ::START handle layoutData
  
  // layoutData: heck if layoutData note empty
  const _layoutData = (layoutData && typeof layoutData === 'object' && JSON.stringify(layoutData) !== '{}') ? layoutData : undefined

  // layoutApi: get layoutData from layoutApi
  const _layoutApi =  layoutApi || (_layoutName ? '/api/auto/module/autolayout/' + _layoutName : (layoutId ? `/api/auto/lc_low_auto_module/lowAutoModule/lowAutoModules/${layoutId}`: undefined))
  const layoutApiResp = _layoutApi ? useTokenRequest({ api: _layoutApi }) : undefined;
  const layoutApiData = layoutApiResp ? (Array.isArray(layoutApiResp) ? layoutApiResp[0] : layoutApiResp) : undefined;
  console.log('=== PreviewAutoLayout layoutApiResp == ',typeof layoutApiResp)


  //testLayoutData: get layoutData from testLayoutName
  const testLayoutApi = testLayoutName ? `/previewautolayout/${testLayoutName}/layout.json` : undefined
  const testLayoutResp = testLayoutApi ? useTokenRequest({ api: testLayoutApi }) : undefined;
  const testLayoutData = testLayoutResp ? (Array.isArray(testLayoutResp) ? testLayoutResp[0] : testLayoutResp) : undefined
  
  //final layoutData => __layoutData
  const __layoutData = _layoutData || layoutApiData || testLayoutData
  // ::END handle layoutData
  console.log('=== PreviewAutoLayout layoutData == ',__layoutData)


  //bindingData: get bindingData from bindingApi
  const bindingApi =  bindingName ? `/api/lc/binding/${bindingName}` : undefined
  const respBindingResp = bindingApi ? useTokenRequest({ api: bindingApi }) : undefined;
  const respBindingData = respBindingResp ? respBindingResp[0] : {}
  
  //testBindingName
  const testBindingApi = testBindingName ? `/previewautolayout/${testBindingName}/binding.json` : undefined
  const testBindingObj = testBindingApi ? useTokenRequest({ api:testBindingApi }) : undefined;
  const testBindingData = testBindingObj ? { binding : testBindingObj[0] } : {}

  //bindingData
  const bindingData = (respBindingData && JSON.stringify(respBindingData) !== '{}' && respBindingData) ||
        (testBindingData && JSON.stringify(testBindingData) !== '{}' && testBindingData) || {}
  // ::end handle binding
  console.log('=== PreviewAutoLayout bindingData == ',bindingData)


  // apiData :get api data
  const apiNameUrl = apiName ? `/api/lc/apis/${apiName}`: undefined
  const resApiNameData = apiNameUrl ? useTokenRequest({ api:apiNameUrl }) : undefined;
  const apiNameData = resApiNameData ? resApiNameData[0] : {}

  const [ data ] = (api || apiNameData.api) ? useTokenRequest({ api: (api || apiNameData.api) }) : [];

  //const records = data && data.records ? data.records : data && data.items ? data.items : (data || mockData || []);
  const records = data ? (data.records ? data.records : (data.items ? data.items : (data || mockData || []))) : []
  const items = ( records && records.length > 0) ? {items: records} : {}

  console.log('=== PreviewAutoLayout data == ', items)


  //config
  const layoutConfig = __layoutData ? (__layoutData['layout']?__layoutData : (typeof __layoutData === 'object'? {layout: __layoutData} : {} )) : {}
  const config = {
      ...layoutConfig,  //layout
      binding: bindingData,
      ...items,         //data
      ...rest           //others
  }
  console.log('=== PreviewAutoLayout config == ', config)



  // start preview

  const onPreviewItemClick = (item) => {
    //TODO
    // console.log(item, ' === item')
    if(onItemClick){
      onItemClick(item)
    }

    //@when 2025-02-23 remove alternattive
    // if(alternative && JSON.stringify(alternative) !== '{}' || __layoutData.alternative && JSON.stringify(__layoutData.alternative) !== '{}'){
    //   setDataSource(item)
    //   setAlternativeActive(true)
    // }
  }

  //@when 2025-02-23 remove alternattive
  // const alternative = {
  //     // alternativeBack: 'BackIndicator',
  //     // xname: "ItemPlaceholder"
  // }

  // const onAlterNavBack = () => {
  //     setDataSource('')
  //     setAlternativeActive(false)
  // }

  const previewClick = (layoutName) => {
    setLayoutName(layoutName)
  }

  const addNewAction = () => {
    //TODO
    console.log('addNewAction')
  }

  return (
      previewAddNew ? (
        <VStack spacing={8}>
          <AutoLayout {...config} 
                  // alternativeActive={alternativeActive}
                  // alternative={alternative}
                  // dataSource={dataSource}
                  // onAlternativeBack={onAlterNavBack}
                  ___={___}
                  onItemClick={onPreviewItemClick} 
                  onAutoPreview={previewClick}/>
          <SquareAddNew onAddNew={addNewAction} ratio={0.2}/>
        </VStack>
        
      ):<AutoLayout {...config}
          // dataSource={dataSource}
          // alternativeActive={alternativeActive}
          // alternative={alternative}
          // onAlternativeBack={onAlterNavBack}
          ___={___}
          onItemClick={onPreviewItemClick} 
          onAutoPreview={previewClick}
      />
    )
  }

