import { setEndpoint, setToken } from '@/components/config/common';

// import { set as NamedCartSet } from '@/components/config/NamedCartConfig';
import { set as NamedIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { set as FormItemTypeSet } from '@/components/config/formItemTypeConfig';

// //cart
// import Cart from '@/components/cart/Cart';

//indicator
// import MyIndicatorSelect from '@/components/indicator/MyIndicatorSelect';
// import MyIndicatorSelected from '@/components/indicator/MyIndicatorSelected';
// import RightIconCheckboxSelect from '@/components/indicator/RightIconCheckboxIndicator/Select';
// import RightIconCheckboxSelected from '@/components/indicator/RightIconCheckboxIndicator/Selected';
// import RightIconCheckboxDefauct from '@/components/indicator/RightIconCheckboxIndicator/Defauct';

import RightIconIndicatorDefault from '@/components/indicator/RightIconIndicatorDefault';
import RightIconIndicatorHover from '@/components/indicator/RightIconIndicatorHover';
import RightIconIndicatorSelected from '@/components/indicator/RightIconIndicatorSelected';


import CircularCheckboxIndicatorDefault from '@/components/indicator/CircularCheckboxIndicator';
import ShadowIndicator from '@/components/indicator/ShadowIndicator';
// import CircularCheckboxIndicatorSelected from '@/components/indicator/CircularCheckboxIndicator/CircularCheckboxSelected';
import DownloadIndicator from '@/components/indicator/DownloadIndicator'
import ClickIndicator from '@/components/indicator/ClickIndicator'
import ManageMenuIndicator from '@/components/indicator/ManageMenuIndicator'

//presenter
import ImageAnimation from '@/pages/PresenterTestDemo/components/presenter/item/ItemAvatar'
import ContentText from '@/pages/PresenterTestDemo/plugins/TodoList/TodoItem/Content_text'
import ContentFinish from '@/pages/PresenterTestDemo/components/presenter/item/ItemIconAction'

import {Avatar, DownloadButton, ItemPlaceholder, AddNewButton, Text } from '@/components/presenter';
import {Title, Subtitle, StatisticsList, StatisticalDescription} from '@/presenter/demo';

import JarItem from '@/composition/Standalone/JarItem';
import SwaggerItem from '@/composition/ApisUi/SwaggerItem';

import { InputCompx, SelectFetch } from '@/components/formItemType';
const { TableCompx } = require('@/presenter/demo');

// SelectListDemo
//indicator
import RightIconRadioHoverIndicator from '@/pages/SelectListDemo/indicator/RightIconRadioHoverIndicator/Select';
import RightIconRadioSelectedIndicator from '@/pages/SelectListDemo/indicator/RightIconRadioHoverIndicator/Selected';
import RightIconRadioDefault from '@/pages/SelectListDemo/indicator/RightIconRadioHoverIndicator/Default';

import SelectedCartUpperRightIcon from '@/components/indicator/SelectedCartUpperRightIcon';
import SelectedCartRightIcon from '@/components/indicator/SelectedCartRightIcon';

//presenter
import ItemImg from '@/pages/SelectListDemo/presenter/ItemImg'
import ItemTitle from '@/pages/SelectListDemo/presenter/ItemTitle'

import OnDeleteIndicator from '@/components/indicator/OnDeleteIndicator';
import SelectAvatar from '@/components/indicator/SelectAvatar';
import TagIndicator from '@/components/indicator/TagIndicator'


// NamedCartSet({

// })

//开发模式设置endpoint, token
if(process.env.NODE_ENV == 'development'){
  // setEndpoint('http://app1.console.smallsaas.cn:8001');
  // setEndpoint('http://lowcode.smallsaas.cn');
  // setEndpoint('https://house.cloud.smallsaas.cn');
    setEndpoint('http://static.smallsaas.cn')

  
  // setToken('eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJvcmdJZCI6MzAsInVzZXJJZCI6MzE4LCJhY2NvdW50IjoiYjQxYTg2OTRhNjM4NDIyNWJmNWMxOTQyZjdmZjIyNTYiLCJkb21haW5Vc2VySWQiOiIiLCJ0eXBlIjoxNDYxLCJpYXQiOjE2NjkxMTMzMTQsImp0aSI6IjMxOCIsInN1YiI6ImI0MWE4Njk0YTYzODQyMjViZjVjMTk0MmY3ZmYyMjU2IiwiZXhwIjoxNjY5MzcyNTE0fQ.HnIuikkC0ugUeZAoqhtVgl4wYiJUgkuL9v8kd46YNIBpdCj-DujDVfHIUgfCqjp0mP23o-3hP697swHrP2qPiQ')

}

NamedIndicatorSet({
  // MyIndicatorSelect,
  // MyIndicatorSelected,
  // RightIconCheckboxSelect,
  // RightIconCheckboxSelected,
  // RightIconCheckboxDefauct,

  RightIconIndicatorDefault,
  RightIconIndicatorHover,
  RightIconIndicatorSelected,

  CircularCheckboxIndicatorDefault,
  ShadowIndicator,
  // CircularCheckboxIndicatorSelected,
  OnDeleteIndicator,

  //SelectList
  RightIconRadioHoverIndicator,
  RightIconRadioSelectedIndicator,
  RightIconRadioDefault,
 SelectAvatar,
  DownloadIndicator,
  ClickIndicator,
  SelectedCartUpperRightIcon,
  ManageMenuIndicator,
  TagIndicator,
  
  SelectedCartUpperRightIcon,
  SelectedCartRightIcon,
})

NamedPresenterSet({
  ItemPlaceholder,

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
  TableCompx,
  AddNewButton,

  //SelectList
  //NamedPresenterSet({
    ItemImg,
    ItemTitle,
    Text
  //})
})

FormItemTypeSet({
  "input":  InputCompx, 
  "select-fetch": SelectFetch
})


