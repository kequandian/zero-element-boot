import React from 'react';
import { history } from 'umi';
import { ChakraProvider } from "@chakra-ui/react";
import { AutoLayout, NamedLayout } from '@/components';

import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { Avatar } from '@/components/presenter'

// TestCase, Presenter etc.
import IsValidElementTest from '../tests/IsValidElementTest'
import ImageAnimationDemo from './TestComponents/ImageAnimationDemo'

// TestComposition
import AvatarItemDemo from './TestComposition/AvatarItemDemo'

import TableContainer from '@/pages/TestLowCode/TableDemo/Sandbox';

import Standalone from '@/composition/Standalone/Sandbox';
import Connection from '@/composition/Connection'
// import TestUserSelection from '@/composition/testUserSelection/Sandbox';

// import UserItem from '@/composition/testUserSelection/UserItem'

// import AutoLayout from '@/components/AutoLayout';
// import userListLayoutJson from './userList/layout';
// import useTokenRequest from '@/components/hooks/useTokenRequest';

import TestDownload from '@/pages/TestComponents/TestDownloadDemo';
import TestRowIcons from '@/pages/TestLowCode/TestRowIcons/Sandbox';
import TestNamedCart from '@/pages/TestComponents/TestNamedCart'
import AutoCartSet from '@/pages/TestLowCode/AutoCartSet/Presenter'

import AutoComponentSet from './TestLowCode/AutoComponentSet'
import RouterParamsDemo from './TestHooks/testUseRouter/demo'
import RssAutoLayout from '@/composition/RssAutoLayout/Sandbox'
import AvatarSelected from '@/composition/AvatarSelected/Sandbox'
import TestGroupedList from './TestLists/TestGroupedList';
//preview-ui
import PreviewAutoLayout from '@/components/PreviewAutoLayout/Sandbox'
//jsontree-ui
import JsonTreeDemo from '@/components/presenter/tree/JsonTree/Sandbox'
//apis-ui
import ApisUi from '@/composition/ApisUi/Sandbox';
//logs-ui
import LogsUi from '@/composition/LogsUi/Sandbox'
// SelectListDemo
import SelectListDemo from './SelectListDemo/Sandbox'

import CssCart from '@/components/cart/CssCart'

export default function Index(props) {

  // pre-init. presenter set 
  // NamedPresenterSet({
  //   Avatar,
  //   Title,
  //   Subtitle
  // })

  // function onItemClickHandle(data) {
  //   console.log('data111111 = ', data)
  // }
  

  // history.push('/TestUserListDemo');
  //通过跳转进入单选页面
  // history.push('/RadioModalDemo');
  // history.push('/PreviewAutoLayoutTest');
  // return <div>首页</div>

  // return <AutoLayout {...config} onItemClick={onJarItemClick} />

  // return <Connection/>
  return <div></div>

  // return <TestCRUDList />
  // return <AlbumList/>

}
