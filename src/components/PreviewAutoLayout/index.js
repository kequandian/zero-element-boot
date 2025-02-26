import React, { useState, useEffect } from 'react';
import  AutoLayout  from '@/components/AutoLayout';
import { VStack } from '@chakra-ui/react';
import SquareAddNew from '@/components/presenter/button/SquareAddNew';

import { LS } from 'zero-element/lib/utils/storage';
import useTokenRequest from '@/components/hooks/useTokenRequest';
const promiseAjax = require('@/components/utils/request');

export default function PreviewAutoLayout (props) {

  // 参数
  const {
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
  
  console.log('=== PreviewAutoLayout props == ', props)

  const [dataSource, setDataSource] = useState('')
  const [ alternativeActive, setAlternativeActive ] = useState(false)
  const [ _layoutName, setLayoutName ] = useState(layoutName || LS.get('commonData').layoutName)

  const [ mockData, setMockData ] = useState('')

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

  // 判断 layoutApi 是否为空，如果为空，则用 _layoutName 拼接api路径, 如果还是空，则用 layoutId
  const _layoutApi =  layoutApi || (_layoutName ? '/api/auto/module/autolayout/' + _layoutName : (layoutId ? `/api/auto/lc_low_auto_module/lowAutoModule/lowAutoModules/${layoutId}`: undefined))
  const _layoutApiResp = _layoutApi ? useTokenRequest({ api: _layoutApi }) : undefined;
  const _layoutApiData = _layoutApiResp ? (typeof _layoutApiResp === 'array' ? _layoutApiResp[0] : _layoutApiResp) : undefined;

  const _layoutData = (layoutData && typeof layoutData === 'object'  && JSON.stringify(layoutData) !== '{}') ? layoutData : undefined

  //testLayoutName
  const testLayoutApi = testLayoutName ? `/previewautolayout/${testLayoutName}/layout.json` : undefined
  const testLayoutResp = testLayoutApi ? useTokenRequest({ api: testLayoutApi }) : undefined;
  const testLayoutData = testLayoutResp ? (typeof testLayoutResp === 'array' ? testLayoutResp[0] : testLayoutResp) : undefined
  
  //final layoutData => __layoutData
  const __layoutData = _layoutData || _layoutApiData || testLayoutData
  // ::end handle layoutData


  // 从bindingApi获取bindingJson
  let bindingApi =  bindingName ? `/api/lc/binding/${bindingName}` : undefined
  const respBindingData = bindingApi ? useTokenRequest({ api: bindingApi }) : undefined;
  const respBindingJsonData = respBindingData ? respBindingData[0] : {}
  
  //testBindingName
  const testBindingJsonUrl = testBindingName ? `/previewautolayout/${testBindingName}/binding.json` : undefined
  const testBindingJsonObj = testBindingJsonUrl ? useTokenRequest({ api:testBindingJsonUrl }) : undefined;
  const testBindingJsonData = testBindingJsonObj ? { binding : testBindingJsonObj[0] } : {}
  // ::end handle binding 

  // start :api data
  const apiNameUrl = apiName ? `/api/lc/apis/${apiName}`: undefined
  const resApiNameData = apiNameUrl ? useTokenRequest({ api:apiNameUrl }) : undefined;
  const apiNameData = resApiNameData ? resApiNameData[0] : {}

  // 从api获取显示数据
  const [ data ] = (api || apiNameData.api) ? useTokenRequest({ api: (api || apiNameData.api) }) : [];

  //const records = data && data.records ? data.records : data && data.items ? data.items : (data || mockData || []);
  const records = data ? (data.records ? data.records : (data.items ? data.items : (data || mockData || []))) : []
  const items = ( records && records.length > 0) ? {items: records} : {}

  console.log('=== PreviewAutoLayout layoutData == ',__layoutData)


  /**
   * 页面配置
   */
  // let config = {
  //    items: records && records.length > 0 ? records : [],
  //    layout: __layoutData,
  // };

  // if( records && records.length > 0){
  //   config.items = records
  // }
  // else if(!_layoutName && api) {
  //   return <></>
  // }

  const layoutConfig = __layoutData ? (__layoutData['layout']?__layoutData : (typeof __layoutData === 'object'? {layout: __layoutData} : {} )) : {}

  const config = {
      ...layoutConfig,  //layout
      ...items,         //data
      ...rest           //others
  }

  // 控制台输出信息
  const onPItemClick = (item) => {
    //TODO
    // console.log(item, ' === item')
    if(onItemClick){
      onItemClick(item)
    }
    if(alternative && JSON.stringify(alternative) !== '{}' || __layoutData.alternative && JSON.stringify(__layoutData.alternative) !== '{}'){
      setDataSource(item)
      setAlternativeActive(true)
    }
  }

  //binding
  const bindingJson = (testBindingJsonData && JSON.stringify(testBindingJsonData) !== '{}' && testBindingJsonData) || 
    (respBindingJsonData && JSON.stringify(respBindingJsonData) !== '{}' && respBindingJsonData) || {}

    
  const alternative = {
      // alternativeBack: 'BackIndicator',
      // xname: "ItemPlaceholder"
  }

  const onAlterNavBack = () => {
      setDataSource('')
      setAlternativeActive(false)
  }

  const previewClick = (layoutName) => {
    setLayoutName(layoutName)
  }

  const addNewAction = () => {
    //TODO
    console.log('addNewAction')
  }

  console.log('=== PreAutoLayout config == ', config)

  return (
      previewAddNew ? (
        <VStack spacing={8}>
          <AutoLayout {...config} onItemClick={onPItemClick} binding={bindingJson}
                  alternativeActive={alternativeActive}
                  alternative={alternative}
                  dataSource={dataSource}
                  onAlternativeBack={onAlterNavBack}
                  ___={___}
                  onAutoPreview={previewClick}/>
          <SquareAddNew onAddNew={addNewAction} ratio={0.2}/>
        </VStack>
        
      ):<AutoLayout {...config} onItemClick={onPItemClick} binding={bindingJson}
          alternativeActive={alternativeActive}
          alternative={alternative}
          dataSource={dataSource}
          onAlternativeBack={onAlterNavBack}
          ___={___}
          onAutoPreview={previewClick}
      />
    )
  }

