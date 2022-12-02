import React from 'react';
import { history } from 'umi';
import { ChakraProvider } from "@chakra-ui/react";
import { AutoLayout, NamedLayout } from '@/components';

import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { Avatar, Title, Subtitle } from '@/presenter/demo'

// TestCase, Presenter etc.
import IsValidElementTest from './TestCases/IsValidElementTest'
import ImageAnimationDemo from './TestCases/ImageAnimationDemo'

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
import SelectDemo from '@/pages/SelectList/Sandbox';
import UserCheckboxDemo from '@/pages/UserCheckboxDemo/Sandbox';
import UserRadioDemo from '@/pages/UserRadioDemo/Sandbox';
import CheckBoxModalDemo from '@/pages/CheckBoxModalDemo';
// import RadioModalDemo from '@/pages/RadioModalDemo';

import Standalone from '@/composition/Standalone/Sandbox';
import Connection from '@/composition/Connection'
// import TestUserSelection from '@/composition/testUserSelection/Sandbox';

// import UserItem from '@/composition/testUserSelection/UserItem'

// import AutoLayout from '@/components/AutoLayout';
// import userListLayoutJson from './userList/layout';
// import useTokenRequest from '@/components/hooks/useTokenRequest';

import TestDownload from '@/pages/TestDownloadDemo';
import TestRowIcons from '@/composition/testRowIcons/Sandbox';
import TestNamedCart from '@/pages/TestNamedCart'
import AutoCartSet from '@/pages/AutoCartSet/Presenter'

import AutoComponentSet from './AutoComponentSet'
import RouterParamsDemo from './GetRouterPath/demo'
import PreviewAutoLayout from '@/components/PreviewAutoLayout/Sandbox'
import RssAutoLayout from '@/pages/rssAutoLayout'
import TestGroupedList from './TestGroupedList';
//nav-ui
import TestCRUDList from '@/composition/testCrudList';
//preview-ui
import PreviewAutoLayoutDemo from '@/components/PreviewAutoLayout/Sandbox'
//jsontree-ui
import JsonTreeDemo from '@/components/presenter/tree/JsonTree/Sandbox'
//apis-ui
import ApisUi from '@/composition/ApisUi/Sandbox';
//logs-ui
import LogsUi from '@/composition/LogsUi/Sandbox'
// SelectListDemo
import SelectListDemo from './SelectListDemo/Sandbox'
// import AvatarSelectListDemo from './avatarSelectListDemo/Sandbox'
import TestIndicator from './ATestIndicator'

import CssCart from '@/components/cart/CssCart'

export default function Index(props) {

  // pre-init. presenter set 
  // NamedPresenterSet({
  //   Avatar,
  //   Title,
  //   Subtitle
  // })

  function onItemClickHandle(data) {
    console.log('data111111 = ', data)
  }

  // history.push('/TestUserListDemo');
  //通过跳转进入单选页面
  // history.push('/RadioModalDemo');
  // history.push('/PreviewAutoLayoutTest');
  // return <div>首页</div>

  // return <AutoLayout {...config} onItemClick={onJarItemClick} />

  // return <Connection/>
  // return <AutoComponentSet onItemClick={onItemClickHandle}/>
  // return <Connection {...props}/> 
  return <LogsUi {...props}/> 
  // return (
    // <CssCart width='300px' margin='40px'>
    //   <TestIndicator />
    // </CssCart>
    // <AutoCartSet />
  // )

  // return <div></div>

  // AutoLayout 组件测试
  // const layout = {
  //   children: [ 
  //     {
  //       "presenter" : { xname: "ItemPlaceholder", props: {} }
  //     },
  //     {
  //       "presenter" : "ItemPlaceholder"
  //     }
  //   ]
  // }
  // return <RssAutoLayout/>


}
