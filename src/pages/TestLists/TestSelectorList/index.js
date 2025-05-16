import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import { AutoLayout } from '@/components';
import layout from './layout';

const testItems = [
    { id: 11, content: '文字1'},
    { id: 21, content: '文字2'},
    { id: 31, content: '文字3'},
]

export default function Index(props) {

  const { items = testItems, ...rest } = props;

  // console.log('props =',props)
  /**
   * 页面配置
   */
  const config = {
    items: items && items.length> 0? items :[],
    layout: layout,
    ...rest
  };

  const itemClick = (item) =>{
    // console.log('item == ', item)
  }

  return (
    <AutoLayout {...config} onItemClick={itemClick}/>
  )
}