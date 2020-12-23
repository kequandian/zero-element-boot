import React from 'react';

import TestUserSelection from './TestUserSelectionDemo/TestUserSelection';

import { Cart } from "@/components/cart";

export default function index(props) {

  const onItemClickHandle = () => {
      console.log('event to dismiss the component')
  }

  const config = {
    corner:'8px',
    margin:'20px',
    padding:''
  }

  return (
    
    <Cart {...config} >      
      <TestUserSelection onItemClickHandle={onItemClickHandle} />
    </Cart>
  )

}