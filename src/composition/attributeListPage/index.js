import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import { AutoLayout } from '@/components';
import layout from './layout';


export default function Index(props) {

  const { items, ...rest } = props;

  /**
   * 页面配置
   */
  const config = {
    items: items && items.length> 0? items :[],
    layout: layout,
    ...rest
  };

  const itemClick = (item) =>{
    console.log('item == ', item)
  }

  const jump = (data) =>{
    console.log('data == ', data)
  }

  return (
    <AutoLayout {...config} onItemClick={itemClick} onItemJump={jump}/>
  )
}