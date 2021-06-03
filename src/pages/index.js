import * as React from 'react';
//passed  import IsValidElementTest from './TestCases/IsValidElementTest'
import TestPageCart from './TestCases/TestPageCart'


// import PlainListDemo from './Demo/PlainListDemo';
// import AdItemDemo from './Demo/AdItemDemo';

// import UserItemDemo from './Demo/UserItemDemo'

import AdListDemo from '@/composition/AdList/Sandbox';
// import ComponentListDemo from '@/pages/ComponentListDemo';
// import TheTest from '@/pages/TheTest'
// import PresenterTestDemo from '@/pages/PresenterTestDemo/Sandbox';
// import CheckboxDemo from '@/pages/CheckboxDemo/Sandbox';

export default function index(props) {

  function onItemClickHandle (data) {
    // console.log('data = ', data)
  }

  // return <AdListDemo onItemClickHandle={onItemClickHandle} />
  //<AdItemDemo/>
  // return <ComponentListDemo onItemClickHandle={onItemClickHandle}/>;

  return <TestPageCart />
}
