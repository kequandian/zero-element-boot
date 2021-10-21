import * as React from 'react';
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

export default function index(props) {

  // pre-init. presenter set 
  NamedPresenterSet({
    Avatar,
    Title,
    Subtitle
  })

  function onItemClickHandle (data) {
    console.log('data = ', data)
  }

  // return <AdItemDemo/>
  // return <AdListDemo onItemClickHandle={onItemClickHandle} />

  // return (
  //     <ChakraSample />
  // )

  return <SelectDemo  onItemClickHandle={onItemClickHandle} />
}
