import React, { useState } from 'react';
import { ChakraProvider, VStack, HStack, Box, Button, Switch, Text, FormControl, FormLabel } from '@chakra-ui/react';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';
import LocalPreview from '../localPreview';
import AddCarts from '@/composition/AddCarts'


export default function Index(props) {

  const { id, status } = props.location && (props.location.query || qs.parse(props.location.search.split('?')[1]))
  const api = '/openapi/lc/module?componentOption=cart'
  const layoutApi = '/openapi/crud/lc_low_auto_module/lowAutoModule/lowAutoModules/129'

  const [previewData, setPreviewData] = useState('')

  const [isSwitch, setIsSwitch] = useState(false)
  const [isAddClick, setIsAddClick] = useState(true)

  //左侧cart列表 item点击事件
  const onComponentItemClick = (item) => {
    setIsAddClick(false)
    if (item.isSelected) {
      setPreviewData({
        __cart2: {
          xname: item.componentType,
          props: item.componentProps
        }
      })
    }
  }

  //新增cart按钮
  const addNewClick = () => {
    console.log('addNewClick')
    setIsAddClick(!isAddClick)
  }
  //新增cart回调事件
  const cb = (status) => {
    console.log('cb status = ', status)
  }

  return (
    <ChakraProvider>
      <VStack align='stretch' spacing='-2'>

        <Box style={{ width: '100%', height: '60px', padding: '8px' }}>
          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts' mb='0'>
              编辑开关：
            </FormLabel>
            <Switch isFocusable size='lg' isChecked={isSwitch} onChange={(e) => setIsSwitch(e.target.checked)} />
          </FormControl>
        </Box>

        <HStack spacing={'0'}>
          <Box style={{ height: '100vh', padding: '8px', background: '#fff' }}>
            <PreviewAutoLayout layoutApi={layoutApi} api={api} onItemClick={onComponentItemClick} onAddNewClick={addNewClick} isSwitch={isSwitch} />
          </Box>

          {
            isAddClick ? (
              <>
                <Box style={{ width: '8px', height: '100vh' }} background={'#EDECF1'}></Box>
                <VStack style={{ width: '100%', height: '100vh', padding: '8px' }} background={'#fff'}>
                  <HStack spacing={5} w={'100%'} justifyContent={'space-between'} p={'0 50px'}>
                    <Button colorScheme='teal' size='sm' onClick={() => { }}>
                      返回
                    </Button>
                    <Text fontSize={'16px'} fontWeight={'bold'}>新增组件</Text>
                    <Button colorScheme='teal' size='sm' onClick={() => { }}>
                      跳过
                    </Button>
                  </HStack>
                  <Box style={{ width: '100%', height: '100vh' }}>
                    <AddCarts cb={cb} />
                  </Box>
                </VStack>
              </>
            ) : (
              <Box style={{ width: '100%', height: '100vh', padding: '8px' }} background={'#EDECF1'}>
                {
                  previewData ? (
                    <LocalPreview previewData={previewData} />
                  ) : <></>
                }
              </Box>
            )
          }
        </HStack>
      </VStack>
    </ChakraProvider>
  )

}