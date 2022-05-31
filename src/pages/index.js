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

import TableContainer from '@/pages/TableDemo/Sandbox';
import SelectDemo from '@/pages/SelectDemo/Sandbox';
import UserCheckboxDemo from '@/pages/UserCheckboxDemo/Sandbox';
import UserRadioDemo from '@/pages/UserRadioDemo/Sandbox';
import CheckBoxModalDemo from '@/pages/CheckBoxModalDemo';
// import RadioModalDemo from '@/pages/RadioModalDemo';

import Standalone from '@/composition/Standalone/Sandbox';
// import TestUserSelection from '@/composition/testUserSelection/Sandbox';

// import UserItem from '@/composition/testUserSelection/UserItem'

// import AutoLayout from '@/components/AutoLayout';
// import userListLayoutJson from './userList/layout';
// import useTokenRequest from '@/components/hooks/useTokenRequest';

import TestCRUDList from '@/composition/testCrudList';
import TestDownload from '@/pages/TestDownloadDemo';
import TestRowIcons from '@/composition/testRowIcons/Sandbox';
import TestNamedCart from '@/pages/TestNamedCart'

export default function Index(props) {

  // pre-init. presenter set 
  // NamedPresenterSet({
  //   Avatar,
  //   Title,
  //   Subtitle
  // })

  function onItemClickHandle (data) {
    console.log('data111111 = ', data)
  }

  // history.push('/TestUserListDemo');
  //通过跳转进入单选页面
  // history.push('/RadioModalDemo');
  // history.push('/CheckboxPageDemo');
  // return <div>首页</div>

  // const data = {
  //   avatar: 'https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png',
  //   account: 'inspector',
  //   subtitle: 'cf9bfbe6278fa75794d517a0e36d9263'
  // }
  // return <UserItem {...data}/>

  //test start
  // let api = '/api/userData';

  // const [ data ] = useTokenRequest({api});

  // const config = {
  //   items: data.length > 0 ? data : [],
  //   layout: userListLayoutJson
  // };

  // const onJarItemClick = (item) => {
  //   console.log('item === ', item)
  // }
  
  // return <AutoLayout {...config} onItemClick={onJarItemClick} />
  //test end

  return <TestCRUDList/>

}
