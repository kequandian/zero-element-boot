import React from 'react';

import TestUserSelection from './TestUserSelectionDemo/TestUserSelection';
import PlainListDemo from './Demo/PlainListDemo';
import RoundListDemo from './Demo/RoundListDemo';

import { Cart } from "@/components/cart";

export default function index(props) {

  const onItemClickHandle = () => {
      console.log('event to dismiss the component')
  }

  const config = {
    corner:'8px',
    margin:'20px',
    padding:'',
    isOnHover:false
  }

  return (
    
    <Cart {...config} >      
      <RoundListDemo onItemClickHandle={onItemClickHandle} />
    </Cart>
  )
  
}
