import { Image } from "@chakra-ui/react";
import NamedLayout from "./NamedLayout";
import NamedList from "./NamedList";
import NamedCart from "./NamedCart";
import NamedContainer from "./NamedContainer";
import NamedSeperator from "./NamedSeperator";
import NamedGateway from "./NamedGateway";
import NextIndicator from "./NextIndicator"; // AutoComponent

import AutoLayout from "./AutoLayout"; // import  { CloneAutoLayout }  from './CloneAutoLayout';

import AutoComponent from "./AutoComponent";
import { APIContainer, Container, TabContainer, WxPage } from "./container"; //set components config

import { set as NamedLayoutSet } from "./config/NamedLayoutConfig";
import { set as NamedGatewaySet } from "./config/NamedGatewayConfig";
import { set as NamedCartSet } from "./config/NamedCartConfig";
import { set as NamedIndicatorSet } from "./config/NamedIndicatorConfig";
import { set as NamedPresenterSet } from "./config/NamedPresenterConfig";
import { set as NamedListSet } from "./config/NamedListConfig";
import { set as FormItemTypeSet } from "./config/formItemTypeConfig"; //layout

import Flexbox from "./layout/Flexbox";
import Itembox from "./layout/Itembox";
import Gridbox from "./layout/Gridbox";
import Wrap from "./layout/Wrap";
import Stack from "./layout/Stack";
import VStack from "./layout/VStack";
import Round from "./layout/Round"; //gateway

import Binding from "./gateway/Binding";
import Filter from "./gateway/Filter";
import Chain from "./gateway/Chain"; //cart 

import Cart from "./cart/Cart";
import CssCart from "./cart/CssCart";
import HoverShadowCart from "./cart/HoverShadowCart";
import SelectCart from "./cart/SelectCart";
import SelectIndicatorCart from "./indicator/SelectIndicatorCart";
import CheckBoxIndicatorCart from "./indicator/CheckBoxIndicatorCart"; // import Circle from './cart/deprecated/Circle';
// import Corner from './cart/deprecated/Corner';
// import indicator from './cart/indicator';

import HCenter from "./cart/HCenter";
import PageCenter from "./cart/PageCenter"; // import Rectangle from './cart/deprecated/Rectangle';
// import RoundCart from './cart/deprecated/Round';
// import Page from './cart/deprecated/Page';
//indicator

import SelectedCartUpperRightIcon from "./indicator/SelectedCartUpperRightIcon";
import SelectedCartRightIcon from "./indicator/SelectedCartRightIcon";
import DownloadIndicator from "./indicator/DownloadIndicator";
import ClickIndicator from "./indicator/ClickIndicator";
import ManageMenuIndicator from "./indicator/ManageMenuIndicator";
import ShadowIndicator from "./indicator/ShadowIndicator";
import DeleteIndicator from "./indicator/DeleteIndicator";
import BackIndicator from "./indicator/BackIndicator"; // import RightIconCheckboxIndicatorDefauct from './indicator/RightIconCheckboxIndicator/Defauct';
// import RightIconCheckboxIndicatorSelect from './indicator/RightIconCheckboxIndicator/Select';
// import RightIconCheckboxIndicatorSelected from './indicator/RightIconCheckboxIndicator/Selected';
// import RightIconIndicatorDefault from '@/components/indicator/RightIconIndicatorDefault';
// import RightIconIndicatorHover from '@/components/indicator/RightIconIndicatorHover';
// import RightIconIndicatorSelected from '@/components/indicator/RightIconIndicatorSelected';

import { Avatar, DefaultAvatar, Avatars, DownloadButton, ItemPlaceholder, AddNewButton, Text, Title, Subtitle } from "./presenter";
import { AutoLoadList, LoadMoreList, PlainList, GroupedList, MultiSelectList, LoadingList, SelectList, AddMoreList, ItemClickList, ManageList } from "./list"; // Form 组件

import { InputCompx, SelectFetch, CheckboxFetch, CheckboxModalFetch } from "./formItemType";
NamedLayoutSet({
  Flexbox,
  Itembox,
  Gridbox,
  Wrap,
  Stack,
  VStack,
  Round
});
NamedGatewaySet({
  Binding,
  Filter,
  Chain
});
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
  WxPage,
  // Page,
  // Rectangle,
  // Round: RoundCart,
  NamedCart
});
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
});
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
  Image
});
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
  GroupedList
});
FormItemTypeSet({
  "input": InputCompx,
  "select-fetch": SelectFetch,
  "checkbox-fetch": CheckboxFetch,
  "checkbox-modal-fetch": CheckboxModalFetch
}); // default to export core components

export { AutoLayout // CloneAutoLayout,
, AutoComponent, NamedLayout, NamedList, NamedCart, NamedContainer, NamedSeperator, NamedGateway // 
, NextIndicator //
, APIContainer, Container, TabContainer, WxPage };