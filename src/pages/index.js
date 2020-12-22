import React from 'react';

import TestUserSelection from './TestUserSelectionDemo/TestUserSelection';
import ImageAnimationDemo from './Demo/ImageAnimationDemo';
import PlainListDemo from './Demo/PlainListDemo';
import PublicLayoutDemo from './Demo/PublicLayoutDemo';
import SelectedListDemo from './Demo/SelectedListDemo';
import UserListDemo from './Demo/UserListDemo';

import { Cart } from "@/components/cart";

export default function index(props) {

  const onItemClickHandle = () => {
      console.log('event to dismiss the component')
  }

  const config = {
    corner:'',
    margin:'20px',
    stroke:'',
    padding:''
  }

  return (
    
    <Cart {...config} >      
      <TestUserSelection onItemClickHandle={onItemClickHandle} />
    </Cart>
  )

}