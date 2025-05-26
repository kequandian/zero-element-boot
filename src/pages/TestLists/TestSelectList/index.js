import React, { useState, useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import { AutoLayout, NamedLayout } from '@/components';
import layout from './layout';
import { SelectList } from '@/components/list';
import { Gridbox } from '@/components/layout';
import NamedSelector from '@/components/NamedSelector';
import {ItemPlaceholder} from '@/components/presenter';

const testItems = [
    { id: 11, content: '文字1'},
    { id: 21, content: '文字2'},
    { id: 31, content: '文字3'},
]

export default function Index(props) {

  const { items = testItems, onItemClick=(()=>{console.log('TestSelectList:onItemClick() is not set !')}), 
    onItemSelected=(()=>{console.log('TestSelectList:onItemSelected() is not set!')}),
  ...rest } = props;

  // console.log('props =',props)
  /**
   * 页面配置
   */
  const config = {
    items: items && items.length> 0? items :[],
    layout: layout,
    ...rest
  };

  // const itemClick = (item) =>{
  //   console.log('item == ', item)
  // }

  return (
    <AutoLayout {...config} onItemClick={onItemClick}/>
  )

  return (
    <SelectList {...config} items={testItems} onItemClick={onItemClick} >
      <NamedLayout xname='Gridbox'>
        <NamedSelector selector={{xname: 'OutlineSelector', props: {lineWidth: 2, lineColor: '#D9FF55'}}}>
          <ItemPlaceholder/>
        </NamedSelector>
      </NamedLayout>
    </SelectList>
  )
}