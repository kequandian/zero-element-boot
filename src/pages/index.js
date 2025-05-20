import React, { useEffect } from 'react';
import { history } from 'umi';
import { ChakraProvider } from "@chakra-ui/react";
import { AutoLayout, NamedLayout } from '@/components';

import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { Avatar } from '@/components/presenter'

// TestComponents
import ImageAnimationDemo from './TestComponents/ImageAnimationDemo'
import TestDownload from '@/pages/TestComponents/TestDownloadDemo';

// TestComposition
import AvatarItemDemo from './TestComposition/AvatarItemDemo'
import RssAutoLayout from '@/composition/RssAutoLayout/Sandbox'
import AvatarSelected from '@/composition/AvatarSelected/Sandbox'
import Standalone from '@/composition/Standalone/Sandbox';
import Connection from '@/composition/Connection'
//apis-ui
import ApisUi from '@/composition/ApisUi/Sandbox';
//logs-ui
import LogsUi from '@/composition/LogsUi/Sandbox'

// TestNamed
import TestNamedCart from '@/pages/TestComponents/TestNamedCart'
import TestNamedSelector from '@/pages/TestComponents/TestNamedSelector'
import TestIndicator from '@/pages/TestComponents/TestIndicator'

// TestLowcode
import TestRowIcons from '@/pages/TestLowCode/TestRowIcons/Sandbox';
import AutoCartSet from '@/pages/TestLowCode/AutoCartSet/Presenter'
import AutoComponentSet from './TestLowCode/AutoComponentSet'
import RouterParamsDemo from './TestHooks/testUseRouter/demo'

// TestList
import TestGroupedList from './TestLists/TestGroupedList'
import TestSelectList from './TestLists/TestSelectorList'

//preview-ui
import PreviewAutoLayout from '@/components/PreviewAutoLayout/Sandbox'
//jsontree-ui
import JsonTreeDemo from '@/components/presenter/tree/JsonTree/Sandbox'
//rss
import RssRender from '@/components/presenter/rss/RssRender/Sandbox'

//实例组件
import CartsManage from '@/composition/cartsManage'
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

  // @when 2014-12-16 comment out
  // return (
  //   <ChakraProvider>
  //     <TestPreviewAutoLayout {...props} />
  //   </ChakraProvider>
  // )

  // @when 2014-12-16 current debug
  // return (
  //   <ChakraProvider>
  //     {/* <PageCenter> */}
  //       <BootPreviewAutoLayout {...props} />
  //     {/* </PageCenter> */}
  //   </ChakraProvider>
  // )
  
  // @when 2015-05-14 preview unit test
  // return (
  //   <TestNamedSelector/>
  // // )
  // return (
  //   <TestSelectList/>
  // )
  return (
    <TestIndicator/>
  )


  // return (
  // <CssCart width='300px' margin='40px'>
  //   <TestIndicator />
  // </CssCart>
  // )

  // return (
  //   <AvatarItemDemo/>
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
