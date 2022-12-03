import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import AutoLayout from '@/components/AutoLayout';
import useTokenRequest from '@/components/hooks/useTokenRequest';
import layout from './layout';


export default function Index(props) {

  const { items, ...rest } = props;

  // console.log('props =',props)
  /**
   * 页面配置
   */
  const config = {
    items: items,
    layout: layout,
    ...rest
  };

  const onHandleItemClick = (data) => {

    //打印data , item 里面会多返回一个 isSelected 点击状态 true or false
    console.log("data == ", data)
    if (data.isSelected) {
      console.log('执行事件')
    }
  }

  return (
    <Box spacing='3px'>
      <AutoLayout {...config} onItemClick={onHandleItemClick} />
    </Box>
  )
}