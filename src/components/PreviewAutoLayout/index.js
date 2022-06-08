import React from 'react';
import { ChakraProvider, Flex, Box, VStack } from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';

import layout from './layout';

export default function Index (props) {
  // 参数
  const {api,layoutApi } = props;

  // 从api获取显示数据
  const [ data ] = useTokenRequest({ api });
  const records = data && data.records;
  const dataX = []
  dataX.push({ items: records })

  // 从layoutApi获取layoutJson
  const respLayoutData = useTokenRequest({ api: layoutApi });
  const layoutJson = respLayoutData && respLayoutData[0]

  /**
   * 页面配置
   */
  const config = {
    items: dataX.length > 0 ? dataX : [],
    layout: layoutJson
  };

  // 控制台输出信息
  const onJarItemClick = (item) => {
    //TODO
    console.log(item, ' === item')
    console.log('layoutJson===',layoutJson)
  }

  return (
    <ChakraProvider>
      <Flex>
        <Box>
          <VStack spacing='3px'>
            <AutoLayout {...config} onItemClick={onJarItemClick} />
          </VStack>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}