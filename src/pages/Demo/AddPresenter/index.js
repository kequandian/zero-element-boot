import React, { useState, useEffect } from 'react';
import { ChakraProvider, VStack, Box, Button, useToast, HStack, Text } from '@chakra-ui/react';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';
const promiseAjax = require('@/components/utils/request');

const apiParamsMap = {
  presenter: 'presenter',
  cart: 'cart',
  layout: 'layout',
  container: 'container',
}

const apiIdMap = {
  presenter: '197',
  cart: '129',
  layout: '196',
  container: '198',
}

export default function Index(props) {

  const { id, status, cb, combinationOption } = props
  //   const api = '/openapi/lc/module?componentOption=cart'
  const api = '/openapi/lc/module?pageNum=1&pageSize=100'
  const layoutApi = '/openapi/crud/lc_low_auto_module/lowAutoModule/lowAutoModules'

  const [ currentApi, setCurrentApi ] = useState('')
  const [ currentLayoutApi, setCurrentLayoutApi ] = useState('')
  const [ currentPage, setCurrentPage ] = useState('presenter')
  const [ currentAddModuleIdList, setCurrentAddModuleIdList ] = useState([])
  const [ newComponentId, seNewComponentId ] = useState('') // mainModuleId
  const [ currentSkipComponentOptionList, setCurrentSkipComponentOptionList] = useState([])
  const toast = useToast()

  useEffect(() => {
    
    if(currentPage){
      const cApi = `${api}&componentOption=${apiParamsMap[currentPage]}`
      const cLayoutApi = `${layoutApi}/${apiIdMap[currentPage]}`
      setCurrentApi(cApi)
      setCurrentLayoutApi(cLayoutApi)
    }
  }, [currentPage])

  //处理数据
  function getPostSkipComponent(item, skipData) {
    let api = '/openapi/lc/module/presenter/build-presenter'
    const queryData = {
    };
    //
    if(!newComponentId){
      if(currentAddModuleIdList && currentAddModuleIdList.length > 0){
        queryData.mainModuleCombinationOption = combinationOption
        queryData.addModuleIdList = currentAddModuleIdList
      }else{
        toastTips('请先选择组件')
        return
      }
    }
    
    if(newComponentId){
      queryData.mainModuleId = newComponentId
    }
    if(item &&  item.id){
      queryData.addModuleId = item.id
    }
    if(currentSkipComponentOptionList && currentSkipComponentOptionList.length > 0){
      const newSkipList = currentSkipComponentOptionList
      if(skipData){
        newSkipList.push(skipData)
      }
      queryData.skipComponentOptionList = newSkipList
    } else if(skipData) {
      queryData.skipComponentOptionList = [skipData]
    }

    promiseAjax(api, queryData, {method: 'POST'}).then(resp => {
        if (resp && resp.code === 200) {
          if(!newComponentId && resp.data.mainModuleId){
            seNewComponentId(resp.data.mainModuleId)
          }
          if(resp.data.nextComponent === 'finish'){
            cb('success')
            toastTips('新增成功')
          }else{
            setCurrentApi()
            setCurrentLayoutApi()
            setTimeout(() => {
              setCurrentPage(resp.data.nextComponent)
            }, 100)
          }
          if(resp.data.skipComponentOptionList && resp.data.skipComponentOptionList.length > 0){
            setCurrentSkipComponentOptionList(resp.data.skipComponentOptionList)
          }
        } else if ( resp.code === 4000 ) {
          cb('error')
          toastTips(resp.message)
        }  else {
            console.error("getPostComponent = ", resp)
            toastTips(resp.message)
        }
    }).finally(_ => {
    });
  }

  //保存presenter
  const savePresenters = () => {
    // cb('success')
    getPostSkipComponent()
  }

  const onComponentItemClick = (data) => {
    // if (data.isSelected) {
    //   setCurrentApi('')
    //   setCurrentLayoutApi('')
    //   getPostSkipComponent(data)
    // } else if(data && Array.isArray(data) && data.length > 0){
    //   const ids = []
    //   data.map(item=>{
    //     ids.push(item.id)
    //   })
    //   setCurrentAddModuleIdList(ids)
    // }

    console.log('多选 = ', data)
    
  }

  // tips
  function toastTips(text, status = 'success') {
    toast({
      title: text,
      description: "",
      status: status,
      duration: 3000,
      isClosable: true,
      position: 'top'
    })
  }

  const onComponentsOkClick =(data)=>{
    console.log('ok 多选 = ', data)
  }

  return (
<ChakraProvider>
    <VStack align='stretch' spacing='-2'>
      <HStack spacing={5} w={'100%'} justifyContent={'space-between'} >
        <div></div>
        <Text fontSize={'16px'} fontWeight={'bold'}>新增组件</Text>
        {
          currentPage != 'presenter' ? (
            <Button colorScheme='teal' size='sm' onClick={() => getPostSkipComponent("", currentPage)}>
              跳过
            </Button>
          ) : (
            <Button colorScheme='teal' size='sm' onClick={() => savePresenters()}>
              确认
            </Button>
          )
        }
      </HStack>
      <Box style={{ margin: '20px 5px 5px 5px', paddingLeft: '8px' }} >
        {currentApi && currentLayoutApi ? (
          <PreviewAutoLayout layoutApi={currentLayoutApi} api={currentApi} onOkClick={onComponentsOkClick} />
        ) : <></>}
      </Box>

    </VStack>
    </ChakraProvider>
  )

}