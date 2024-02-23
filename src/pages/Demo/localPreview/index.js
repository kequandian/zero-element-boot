import React, { useState, useEffect } from 'react';
import { AutoLayout } from '@/components';
import layout from './layout.js'


const data = { 
  __indicator2:{
    xname: "ShadowIndicator",
    props: {
    }
  },
  __selector2:{
    xname: "CornerCheckboxSelector",
    props: {
    }
  }
}

export default function Index(props) {

  const { ...rest } = props;
  /**
   * 页面配置
   */
  const config = {
    layout: layout
  };

  const itemClick = (item) =>{
    console.log('item == ', item)
  }

  return (
    <AutoLayout {...data} {...config} onItemClick={itemClick}/>
  )
}