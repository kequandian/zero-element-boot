import { setEndpoint, setToken } from '@/components/config/common';

// import { set as NamedCartSet } from '@/config/NamedCartConfig';
import { set as NamedIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';

// //cart
// import Cart from '@/components/cart/Cart';

//indicator
import MyIndicatorSelect from '@/components/indicator/MyIndicatorSelect';
import MyIndicatorSelected from '@/components/indicator/MyIndicatorSelected';
import RightIconCheckboxSelect from '@/components/indicator/RightIconCheckboxIndicator/Select';
import RightIconCheckboxSelected from '@/components/indicator/RightIconCheckboxIndicator/Selected';
import RightIconCheckboxDefauct from '@/components/indicator/RightIconCheckboxIndicator/Defauct';

//presenter
import ImageAnimation from '@/pages/PresenterTestDemo/components/presenter/item/ItemAvatar'
import ContentText from '@/pages/PresenterTestDemo/plugins/TodoList/TodoItem/Content_text'
import ContentFinish from '@/pages/PresenterTestDemo/components/presenter/item/ItemIconAction'

import {Avatar, Title} from '@/presenter/demo';

import PregressBody from '@/composition/StatisticsContainer/ProgressList/PregressBody';
import JarItem from '@/composition/Standalone/JarItem';

// NamedCartSet({
//   Cart
// })

//开发模式设置endpoint, token
if(process.env.NODE_ENV == 'development'){
  setEndpoint('http://app1.console.smallsaas.cn:8001');
  setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjE2IiwidXNlcklkIjoiNCIsInRlbmFudE9yZ0lkIjoxNiwiYWNjb3VudCI6ImFkbWluIiwidXNlclR5cGUiOjAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NDk5MTg5MjEsImp0aSI6IjQiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MDE3ODEyMX0.xsucJ55Y8mNKGfow38Ey6nTm9Zz0Cei2mieDsDpQoubAPOZ4Y0T1KQyYjwDMRK3NtuIbMre40aAuhy26GMtAlg')
}

NamedIndicatorSet({
  MyIndicatorSelect,
  MyIndicatorSelected,
  RightIconCheckboxSelect,
  RightIconCheckboxSelected,
  RightIconCheckboxDefauct
})

NamedPresenterSet({
  Avatar,
  Title,

  ImageAnimation,
  ContentText,
  ContentFinish,

  PregressBody,
  JarItem
})

