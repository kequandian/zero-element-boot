import React, { useEffect } from 'react';
import { history } from 'umi';
import { ChakraProvider } from "@chakra-ui/react";
import { AutoLayout, NamedLayout } from '@/components';

import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { Avatar } from '@/components/presenter'

// TestCase, Presenter etc.
import IsValidElementTest from './TestCases/IsValidElementTest'
import ImageAnimationDemo from './TestCases/ImageAnimationDemo'

// TestComposition
import AvatarItemDemo from './TestComposition/AvatarItemDemo'

import TableContainer from '@/pages/TableDemo/Sandbox';

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
import RouterParamsDemo from './TestHooks/testUseRouter/demo'
import RssAutoLayout from '@/composition/RssAutoLayout/Sandbox'
import AvatarSelected from '@/composition/AvatarSelected/Sandbox'
import TestGroupedList from './TestGroupedList';
//nav-ui
import TestCRUDList from '@/composition/testCrudList';
//preview-ui
import PreviewAutoLayout from '@/components/PreviewAutoLayout/Sandbox'
//jsontree-ui
import JsonTreeDemo from '@/components/presenter/tree/JsonTree/Sandbox'
//apis-ui
import ApisUi from '@/composition/ApisUi/Sandbox';
//logs-ui
import LogsUi from '@/composition/LogsUi/Sandbox'

import CssCart from '@/components/cart/CssCart'

//rss-ui
import RssRender from '@/components/presenter/rss/RssRender/Sandbox'

//实例组件
import CartsManage from '@/composition/cartsManage'
// import PresentersListPage from '@/pages/Demo/presentersListPage/Sandbox'

import TestPreviewAutoLayout from '@/components/PreviewAutoLayout/Sandbox/TestPreviewAutoLayout';
import BootPreviewAutoLayout from '@/components/BootPreviewAutoLayout';


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

  // return <TestCRUDList {...props} />

  // @when 2014-12-16 comment out
  // return (
  //   <ChakraProvider>
  //     <TestPreviewAutoLayout {...props} />
  //   </ChakraProvider>
  // )

  // @when 2014-12-16 current debug
  return (
    <ChakraProvider>
      {/* <PageCenter> */}
        <BootPreviewAutoLayout {...props} />
      {/* </PageCenter> */}
    </ChakraProvider>
  )
  
  

  // return (
  // <CssCart width='300px' margin='40px'>
  //   <TestIndicator />
  // </CssCart>
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
  // return <TestCRUDList />

  // return <AlbumList/>


}
