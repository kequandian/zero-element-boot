import { setEndpoint, setToken } from '@/components/config/common';

// import { set as NamedCartSet } from '@/components/config/NamedCartConfig';
import { set as NamedIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { set as FormItemTypeSet } from '@/components/config/formItemTypeConfig';

// //cart
// import Cart from '@/components/cart/Cart';

//indicator
import MyIndicatorSelect from '@/components/indicator/MyIndicatorSelect';
import MyIndicatorSelected from '@/components/indicator/MyIndicatorSelected';
import RightIconCheckboxSelect from '@/components/indicator/RightIconCheckboxIndicator/Select';
import RightIconCheckboxSelected from '@/components/indicator/RightIconCheckboxIndicator/Selected';
import RightIconCheckboxDefauct from '@/components/indicator/RightIconCheckboxIndicator/Defauct';

import RightIconIndicatorDefault from '@/components/indicator/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/components/indicator/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/components/indicator/RightIconIndicatorSelected';


import CircularCheckboxIndicatorDefault from '@/components/indicator/CircularCheckboxIndicator';
import ShadowIndicator from '@/components/indicator/ShadowIndicator';
import CircularCheckboxIndicatorSelected from '@/components/indicator/CircularCheckboxIndicator/Selected';

//presenter
import ImageAnimation from '@/pages/PresenterTestDemo/components/presenter/item/ItemAvatar'
import ContentText from '@/pages/PresenterTestDemo/plugins/TodoList/TodoItem/Content_text'
import ContentFinish from '@/pages/PresenterTestDemo/components/presenter/item/ItemIconAction'

import {Avatar, DownloadButton, ItemPlaceholder, AddDefaultButton } from '@/components/presenter';
import {Title, Subtitle, StatisticsList, StatisticalDescription} from '@/presenter/demo';

import JarItem from '@/composition/Standalone/JarItem';
import SwaggerItem from '@/composition/ApisUi/SwaggerItem';

import { InputCompx, SelectFetch } from '@/components/formItemType';
const { TableCompx } = require('@/presenter/demo');

// NamedCartSet({

// })

//开发模式设置endpoint, token
if(process.env.NODE_ENV == 'development'){
  // setEndpoint('http://app1.console.smallsaas.cn:8001');
  // setEndpoint('http://demo.smallsaas.cn:8001');
  setEndpoint('http://static.smallsaas.cn');
  
  // setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxMDAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2Njg2NTYwNDgsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY2ODkxNTI0OH0.o_GSr1qdIfcsKzzCSLlgoj2ZXTc57PlyNbmrXHCNn28d90ktvrVlKin04eS9eKfuYiE932ljI5YECqRKRb2UoA')

}

NamedIndicatorSet({
  MyIndicatorSelect,
  MyIndicatorSelected,
  RightIconCheckboxSelect,
  RightIconCheckboxSelected,
  RightIconCheckboxDefauct,
  
  RightIconIndicatorDefault,
  RightIconIndicatorHover,
  RightIconIndicatorSelected,

  CircularCheckboxIndicatorDefault,
  ShadowIndicator,
  CircularCheckboxIndicatorSelected,
  
})

NamedPresenterSet({
  Avatar,
  Title,
  ImageAnimation,

  ContentText,
  ContentFinish,

  JarItem,
  SwaggerItem,
  Subtitle, 
  StatisticsList, 
  StatisticalDescription,

  DownloadButton,
  ItemPlaceholder,
  TableCompx,
  AddDefaultButton,
  
})

FormItemTypeSet({
  "input":  InputCompx, 
  "select-fetch": SelectFetch
})


