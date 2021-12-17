import React from 'react';
import { history } from 'umi';

import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import {Avatar, Title, Subtitle} from '@/presenter/demo'

// TestCase, Presenter etc.
import IsValidElementTest from './TestCases/IsValidElementTest'
import ImageAnimationDemo  from './TestCases/ImageAnimationDemo'

// TestCart
import TestPageCart from './TestCart/TestPageCart'

// TestComposition
import AvatarItemDemo from './TestComposition/AvatarItemDemo'

// TestSelector
import TestDefaultHoverIndicator from './TestSelector/TestDefaultHoverIndicator'
import TestSelector from './TestSelector/TestSelector'

// ChakraSample
import ChakraSample from './chakra'

//Demo
import PlainListDemo from './Demo/PlainListDemo';
import AdItemDemo from './Demo/AdItemDemo';

// import UserItemDemo from './Demo/UserItemDemo'

import AdListDemo from '@/composition/AdList/Sandbox';
// import ComponentListDemo from '@/pages/ComponentListDemo';
// import TheTest from '@/pages/TheTest'
// import PresenterTestDemo from '@/pages/PresenterTestDemo/Sandbox';
// import CheckboxDemo from '@/pages/CheckboxDemo/Sandbox';

import StatisticsContainer from '@/composition/StatisticsContainer/Sandbox';
import TableContainer from '@/pages/TableDemo/Sandbox';
import SelectDemo from '@/pages/SelectDemo/Sandbox';
import UserCheckboxDemo from '@/pages/UserCheckboxDemo/Sandbox';
import UserRadioDemo from '@/pages/UserRadioDemo/Sandbox';
import CheckBoxModalDemo from '@/pages/CheckBoxModalDemo';
// import RadioModalDemo from '@/pages/RadioModalDemo';

import Standalone from '@/composition/Standalone/Sandbox';
import TestUserSelection from '@/composition/testUserSelection/Sandbox';

export default function Index(props) {

  // pre-init. presenter set 
  NamedPresenterSet({
    Avatar,
    Title,
    Subtitle
  })

  function onItemClickHandle (data) {
    console.log('data111111 = ', data)
  }


  // return <AdItemDemo/>
  // return <AdListDemo onItemClickHandle={onItemClickHandle} />

  // return (
  //     <ChakraSample />
  // )

  // return <UserRadioDemo onItemClick={onItemClickHandle}/>
  
  // return <AdListDemo  onItemClick={onItemClickHandle}/>

  return <TestUserSelection/>

  //通过跳转进入单选页面
  // history.push('/RadioModalDemo');
  // return <div>首页</div>
}
