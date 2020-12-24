import React from 'react';

import TestUserSelection from './TestUserSelection';

import { OffsetCart } from "@/components/cart";

export default function index(props) {

  const onItemClickHandle = () => {
      console.log('event to dismiss the component')
  }

  return (
    <OffsetCart margin='40px' >      
      <TestUserSelection onItemClickHandle={onItemClickHandle} />
    </OffsetCart>
  )
}
