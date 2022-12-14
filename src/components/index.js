import { Image } from "@chakra-ui/react";

import NamedLayout from './NamedLayout';
import NamedList from './NamedList';
import NamedCart from './NamedCart';
import NamedContainer from './NamedContainer';
import NamedSeperator from './NamedSeperator';
import NamedGateway from './NamedGateway';

import NextIndicator from './NextIndicator';

// AutoComponent
import AutoLayout from './AutoLayout';
// import  { CloneAutoLayout }  from './CloneAutoLayout';
import AutoComponent from './AutoComponent';

import {APIContainer, Container, TabContainer, WxPage} from './container';

//set components config
import { set as NamedLayoutSet } from '@/components/config/NamedLayoutConfig';
import { set as NamedCartSet } from '@/components/config/NamedCartConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { set as NamedIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import { set as FormItemTypeSet } from '@/components/config/formItemTypeConfig';
import { set as NamedListSet } from '@/components/config/NamedListConfig';

//layout
import Flexbox from '@/components/layout/Flexbox';
import Itembox from '@/components/layout/Itembox';
import Gridbox from '@/components/layout/Gridbox';
import Wrap from '@/components/layout/Wrap';
import Stack from '@/components/layout/Stack';
import VStack from '@/components/layout/VStack';
import Round from '@/components/layout/Round';

//cart 
import Cart from './cart/Cart';
import CssCart from './cart/CssCart';
import HoverShadowCart from './cart/HoverShadowCart';
import SelectCart from './cart/SelectCart';
import SelectIndicatorCart from './indicator/SelectIndicatorCart';
import CheckBoxIndicatorCart from './indicator/CheckBoxIndicatorCart';
// import Circle from './cart/deprecated/Circle';
// import Corner from './cart/deprecated/Corner';
// import indicator from './cart/indicator';
import HCenter from './cart/HCenter';
import PageCenter from './cart/PageCenter';
// import Rectangle from './cart/deprecated/Rectangle';
// import RoundCart from './cart/deprecated/Round';
// import Page from './cart/deprecated/Page';

//indicator
import SelectedCartUpperRightIcon from './indicator/SelectedCartUpperRightIcon';
import SelectedCartRightIcon from './indicator/SelectedCartRightIcon';

import DownloadIndicator from './indicator/DownloadIndicator'
import ClickIndicator from './indicator/ClickIndicator'
import ManageMenuIndicator from './indicator/ManageMenuIndicator'
import ShadowIndicator from './indicator/ShadowIndicator';
import DeleteIndicator from './indicator/DeleteIndicator';
import BackIndicator from './indicator/BackIndicator';

// import RightIconCheckboxIndicatorDefauct from './indicator/RightIconCheckboxIndicator/Defauct';
// import RightIconCheckboxIndicatorSelect from './indicator/RightIconCheckboxIndicator/Select';
// import RightIconCheckboxIndicatorSelected from './indicator/RightIconCheckboxIndicator/Selected';

// import RightIconIndicatorDefault from '@/components/indicator/RightIconIndicatorDefault';
// import RightIconIndicatorHover from '@/components/indicator/RightIconIndicatorHover';
// import RightIconIndicatorSelected from '@/components/indicator/RightIconIndicatorSelected';


import {Avatar, DefaultAvatar, DownloadButton, ItemPlaceholder,AddNewButton, Text, Title, Subtitle} from '@/components/presenter';

import { 
  AutoLoadList,
  LoadMoreList,
  PlainList,
  GroupedList,
  MultiSelectList,
  LoadingList,
  SelectList,
  AddMoreList,
  ItemClickList,
  ManageList
} from './list';

// Form 组件
import { InputCompx, SelectFetch, CheckboxFetch, CheckboxModalFetch } from '@/components/formItemType';

NamedLayoutSet({
  Flexbox,
  Itembox,
  Gridbox,
  Wrap,
  Stack,
  VStack,
  Round
})

NamedCartSet({
  Cart,
  CssCart,
  // HightlightCart,
  HoverShadowCart,
  SelectCart,
  SelectIndicatorCart,
  CheckBoxIndicatorCart,
  // Circle,
  // Corner,
  // indicator,
  HCenter,
  PageCenter,
  // Page,
  // Rectangle,
  // Round: RoundCart,
  NamedCart
})

NamedIndicatorSet({
  // RightIconCheckboxIndicatorDefauct,
  // RightIconCheckboxIndicatorSelect,
  // RightIconCheckboxIndicatorSelected,
  // RightIconIndicatorDefault,
  // RightIconIndicatorHover,
  // RightIconIndicatorSelected
  SelectedCartUpperRightIcon,
  SelectedCartRightIcon,
  DownloadIndicator,
  ClickIndicator,
  ManageMenuIndicator,
  ShadowIndicator,
  DeleteIndicator,
  BackIndicator
})

NamedPresenterSet({
  Avatar,
  DefaultAvatar,
  Title,
  Subtitle,
  DownloadButton,
  ItemPlaceholder,
  AddNewButton,
  Text,
  Image
})

NamedListSet({
  AutoLoadList,
  LoadMoreList,
  AddMoreList,
  LoadingList,
  ItemClickList,
  //
  PlainList,
  SelectList,
  MultiSelectList,
  ManageList,
  GroupedList,
})

FormItemTypeSet({
  "input": InputCompx, 
  "select-fetch": SelectFetch,
  "checkbox-fetch": CheckboxFetch,
  "checkbox-modal-fetch": CheckboxModalFetch
})


// default to export core components
export {
        AutoLayout,
        // CloneAutoLayout,
        AutoComponent,

    NamedLayout,
    NamedList,
    NamedCart,
    NamedContainer,
    NamedSeperator,
    NamedGateway,

    // 
    NextIndicator,
    
    //
    APIContainer,
    Container,
    TabContainer,
    WxPage,
};

