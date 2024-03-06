// import { Image } from "@chakra-ui/react";

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

import {APIContainer, Container, TabContainer, WxPage, TitledContainer} from './container';

//set components config
import { set as NamedLayoutSet } from '@/components/config/NamedLayoutConfig';
import { set as NamedGatewaySet } from '@/components/config/NamedGatewayConfig';
import { set as NamedCartSet } from '@/components/config/NamedCartConfig';
import { set as NamedIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { set as NamedListSet } from '@/components/config/NamedListConfig';
import { set as FormItemTypeSet } from '@/components/config/formItemTypeConfig';
import { set as NamedSelector } from '@/components/config/NamedSelectorConfig';
import { set as NameContainerSet } from '@/components/config/NamedContainerConfig';

//layout
import Flexbox from '@/components/layout/Flexbox';
import Itembox from '@/components/layout/Itembox';
import Gridbox from '@/components/layout/Gridbox';
import Wrap from '@/components/layout/Wrap';
import Stack from '@/components/layout/Stack';
import VStack from '@/components/layout/VStack';
import Round from '@/components/layout/Round';

//gateway
import Binding from '@/components/gateway/Binding';
import Filter from '@/components/gateway/Filter';
import Chain from '@/components/gateway/Chain';

//cart 
import Cart from './cart/Cart';
import CssCart from './cart/CssCart';
import HoverShadowCart from './cart/HoverShadowCart';
import SelectCart from './cart/SelectCart';
import ItemCart from './cart/ItemCart';
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
import Box from './cart/Box';

//indicator
import SelectedCartUpperRightIcon from './indicator/SelectedCartUpperRightIcon';
import SelectedCartRightIcon from './indicator/SelectedCartRightIcon';

import DownloadIndicator from './indicator/DownloadIndicator'
import ClickIndicator from './indicator/ClickIndicator'
import ManageMenuIndicator from './indicator/ManageMenuIndicator'
import ShadowIndicator from './indicator/ShadowIndicator';
import DeleteIndicator from './indicator/DeleteIndicator';
import BackIndicator from './indicator/BackIndicator';
import MaskIndicator from './indicator/MaskIndicator';
import LabelIndicator from './indicator/LabelIndicator';
import TipsIndicator from './indicator/TipsIndicator';

// selector
import OutlineSelector from './selector/OutlineSelector';
import CornerCheckboxSelector from './selector/CornerCheckboxSelector';

import { Image, ImageSize } from './presenter'

// import RightIconCheckboxIndicatorDefauct from './indicator/RightIconCheckboxIndicator/Defauct';
// import RightIconCheckboxIndicatorSelect from './indicator/RightIconCheckboxIndicator/Select';
// import RightIconCheckboxIndicatorSelected from './indicator/RightIconCheckboxIndicator/Selected';

// import RightIconIndicatorDefault from '@/components/indicator/RightIconIndicatorDefault';
// import RightIconIndicatorHover from '@/components/indicator/RightIconIndicatorHover';
// import RightIconIndicatorSelected from '@/components/indicator/RightIconIndicatorSelected';


import {Avatar, DefaultAvatar, Avatars, DownloadButton, ItemPlaceholder,AddNewButton, Text, Title, Subtitle,
  Rectangle, 
  Circle, Description,
} from '@/components/presenter';

// import ImageView from './presenter/image';

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
import { InputCompx, SelectFetch, CheckboxFetch, CheckboxModalFetch, OneMany, SelectCompx } from '@/components/formItemType';

NamedLayoutSet({
  Flexbox,
  Itembox,
  Gridbox,
  Wrap,
  Stack,
  VStack,
  Round
})


NamedGatewaySet({
  Binding,
  Filter,
  Chain
})


NamedCartSet({
  Cart,
  CssCart,
  // HightlightCart,
  HoverShadowCart,
  SelectCart,
  ItemCart,
  SelectIndicatorCart,
  CheckBoxIndicatorCart,
  // Circle,
  // Corner,
  // indicator,
  HCenter,
  PageCenter,
  WxPage,
  // Page,
  // Rectangle,
  // Round: RoundCart,
  NamedCart,
  Box
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
  BackIndicator,
  MaskIndicator,
  LabelIndicator,
  TipsIndicator
})

NamedPresenterSet({
  Avatar,
  DefaultAvatar,
  Avatars,
  Title,
  Subtitle,
  DownloadButton,
  ItemPlaceholder,
  AddNewButton,
  Text,
  Image,
  Rectangle,
  Circle,
  ImageSize,
  Description
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

NameContainerSet({
  APIContainer,
  Container,
  TabContainer,
  WxPage,
  TitledContainer
})

NamedSelector({
  OutlineSelector,
  CornerCheckboxSelector
})

FormItemTypeSet({
  "input": InputCompx, 
  "select-fetch": SelectFetch,
  "checkbox-fetch": CheckboxFetch,
  "checkbox-modal-fetch": CheckboxModalFetch,
  "one-many": OneMany,
  "select": SelectCompx
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
    WxPage
};

