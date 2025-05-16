import { LS } from 'zero-element/lib/utils/storage';
import { setEndpoint, setToken } from '@/components/config/common';

// import { set as NamedCartSet } from '@/components/config/NamedCartConfig';
import { set as NamedIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { set as FormItemTypeSet } from '@/components/config/FormItemTypeConfig';
import { set as NamedSelector } from '@/components/config/NamedSelectorConfig';

// //cart
import ShadowIndicator from '@/components/indicator/ShadowIndicator';
// import CircularCheckboxIndicatorSelected from '@/components/indicator/CircularCheckboxIndicator/CircularCheckboxSelected';
import DownloadIndicator from '@/components/indicator/DownloadIndicator'
import ClickIndicator from '@/components/indicator/ClickIndicator'
import BackIndicator from '@/components/indicator/BackIndicator';

//presenter
import { Avatar, DefaultPlaceholder, ItemPlaceholder, DownloadButton, AddNewButton, ChakraText } from '@/components/presenter';

import JarItem from '@/composition/LogsUi/Sandbox/JarItem';
import SwaggerItem from '@/composition/ApisUi/SwaggerItem';

import { InputCompx, SelectFetch } from '@/components/FormItemType';

import ManageMenuIndicator from '@/components/indicator/ManageMenuIndicator'

// selector
import OutlineSelector from '@/components/selector/OutlineSelector';
import CircularCheckboxSelector from '@/components/selector/CircularCheckboxSelector';

//presenter
import {
  Clean,
  Butter,
  Pink,
  Clear
} from '@/components/presenter'

import ItemImg from '@/pages/TestLists/SelectListDemo/presenter/ItemImg'
import ItemTitle from '@/pages/TestLists/SelectListDemo/presenter/ItemTitle'
import RssAutoLayout from '@/composition/RssAutoLayout/item'
import ImageAnimation from '@/components/presenter/image/ImageAnimation';

import OnDeleteIndicator from '@/components/indicator/OnDeleteIndicator';
import TagIndicator from '@/components/cart/Outline/TagIndicator';

import testModuleItem from '@/composition/moduleListPage/moduleItem'


// NamedCartSet({

// })

//开发模式设置endpoint, token
if (process.env.NODE_ENV == 'development') {
  setEndpoint('http://192.168.3.210:8089')
  // setToken('eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJvcmdJZCI6MzAsInVzZXJJZCI6MzE4LCJhY2NvdW50IjoiYjQxYTg2OTRhNjM4NDIyNWJmNWMxOTQyZjdmZjIyNTYiLCJkb21haW5Vc2VySWQiOiIiLCJ0eXBlIjoxNDYxLCJpYXQiOjE2NjkxMTMzMTQsImp0aSI6IjMxOCIsInN1YiI6ImI0MWE4Njk0YTYzODQyMjViZjVjMTk0MmY3ZmYyMjU2IiwiZXhwIjoxNjY5MzcyNTE0fQ.HnIuikkC0ugUeZAoqhtVgl4wYiJUgkuL9v8kd46YNIBpdCj-DujDVfHIUgfCqjp0mP23o-3hP697swHrP2qPiQ')
  const colors = {
    primary: '#037DFF',
    secondary: '#008000',
    accent: '#FFFF00',
  }

  LS.set('colors', colors)
}

NamedIndicatorSet({
  ShadowIndicator,
  OnDeleteIndicator,

  //SelectList
  DownloadIndicator,
  ClickIndicator,
  // ManageMenuIndicator,
  TagIndicator,
  BackIndicator,
})

NamedPresenterSet({
  DefaultPlaceholder,
  ItemPlaceholder,

  //default
  Clean,
  Clear,
  Butter,
  Pink,

  Avatar,
  ImageAnimation,

  JarItem,
  SwaggerItem,

  DownloadButton,
  AddNewButton,

  ItemImg,
  ItemTitle,
  RssAutoLayout,
  ChakraText,

  testModuleItem
})

NamedSelector({
  OutlineSelector,
  CircularCheckboxSelector,
})

FormItemTypeSet({
  "input": InputCompx,
  "select-fetch": SelectFetch
})


