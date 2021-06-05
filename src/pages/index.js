import * as React from 'react';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import {Avatar, Title, Subtitle} from '@/presenter/demo'

// TestCase
import IsValidElementTest from './TestCases/IsValidElementTest'
import TestPageCart from './TestCart/TestPageCart'

// TestComposition
import AvatarItemDemo from './TestComposition/AvatarItemDemo'

// TestSelector
import TestDefaultHoverIndicator from './TestSelector/TestDefaultHoverIndicator'
import TestSelector from './TestSelector/TestSelector'

//Demo
import PlainListDemo from './Demo/PlainListDemo';
// import AdItemDemo from './Demo/AdItemDemo';

// import UserItemDemo from './Demo/UserItemDemo'

import AdListDemo from '@/composition/AdList/Sandbox';
// import ComponentListDemo from '@/pages/ComponentListDemo';
// import TheTest from '@/pages/TheTest'
// import PresenterTestDemo from '@/pages/PresenterTestDemo/Sandbox';
// import CheckboxDemo from '@/pages/CheckboxDemo/Sandbox';

export default function index(props) {

  // pre-init. presenter set 
  NamedPresenterSet({
    Avatar,
    Title,
    Subtitle
  })


// //cart
// import ItemCart from '@/components/cart/ItemCart';


  function onItemClickHandle (data) {
    // console.log('data = ', data)
  }

  // return <AdListDemo onItemClickHandle={onItemClickHandle} />
  //<AdItemDemo/>
  // return <ComponentListDemo onItemClickHandle={onItemClickHandle}/>;

  return <TestSelector />
}
