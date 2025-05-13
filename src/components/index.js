import NamedLayout from './NamedLayout';
import NamedList from './NamedList';
import NamedCart from './NamedCart';
import NamedContainer from './NamedContainer';
import NamedSeperator from './NamedSeperator';
import NamedGateway from './NamedGateway';
import NamedIndicator from './NamedIndicator';
//
import NextIndicator from './NextIndicator';

// AutoComponent
import AutoLayout from './AutoLayout';
// import  { CloneAutoLayout }  from './CloneAutoLayout';
// import AutoComponent from './AutoComponent';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';

//set components config
import { set as NamedLayoutSet } from '@/components/config/NamedLayoutConfig';
import { set as NamedGatewaySet } from '@/components/config/NamedGatewayConfig';
import { set as NamedCartSet } from '@/components/config/NamedCartConfig';
import { set as NamedIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { set as NamedListSet } from '@/components/config/NamedListConfig';
import { set as FormItemTypeSet } from '@/components/config/FormItemTypeConfig';
import { set as NamedSelector } from '@/components/config/NamedSelectorConfig';
import { set as NameContainerSet } from '@/components/config/NamedContainerConfig';


//container
import {
  APIContainer, Container, TabContainer, WxPage, TitledContainer,
  DataFlowContainer, DrawerContainer, AddNewContainer, ConfirmContainer
} from './container';

//layout
import {
  Flexbox, Gridbox, Wrap, Round, Between, Stack, VStack, 
  Center, HStack, HCenter, VCenter, PageCenter
} from './layout'

//gateway
import {
  Gateway,
  Binding,
  Filter,
  Chain,
  Indexing,
  Replacing
} from './gateway';

//cart 
import {
  Cart,
  CssCart,
  Outline,
  Border,
  // Rectangle,
  // Round,
  // Corner,
  // Circle,
  // PageCenter,
  Viewport,
  // box,
  SquareBox,
  MaskBox,
  Box,
  
  //hover
  HoverShadowCart,
  LightingCart,
  //
  // SelectIndicator,
  // CheckBoxIndicator,
} from './cart';


//indicator
import {
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
  TipsIndicator,
  TitleIndicator,
  CircularDeleteIndicator,
  PlacementIndicator,
  MultiActionsIndicator
} from './indicator';

// selector
import {
  OutlineSelector,
  CornerCheckboxSelector,
  LeftCheckboxSelector
} from './selector';

//list
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
  ManageList,
  PlainManageList,
  KeyValueManageList,
  QueryManageList,
  DefaultGridLayoutList,
  LowCodeDatasetManageList,
} from './list';

//presenter
import {
  Avatar, DefaultAvatar, DownloadButton, ItemPlaceholder, AddNewButton, ChakraText,
  Rectangle,
  Circle, DefaultPlaceholder, SquareAddNewButton, GoogleAvatar, Delete, Download,
  ActionButton, SelectAction, ChakraButton,
  NewDatasetAction, PreviewSelectAction, ChangeDatasetAction, DeleteAction, NewParamAction,
  PropsAction, BindingAction, NoPresenterAction, SortPresenterAction, DatasetBindingAction,
  //image
  Image, CozeImage
} from '@/components/presenter';

// Form 组件
import { InputCompx, SelectFetch, CheckboxFetch, CheckboxModalFetch, OneMany, SelectCompx } from '@/components/FormItemType';


NamedLayoutSet({
  Flexbox,
  // Itembox,
  Gridbox,
  //
  Wrap,
  Round,
  Between,
  //
  Stack,
  VStack,
  HStack,

  Center,
  HCenter,
  VCenter,
  PageCenter
})


NamedGatewaySet({
  Gateway,
  //
  Binding,
  Filter,
  Chain,
  //
  Indexing,
  Replacing
})


NamedCartSet({
  Cart,
  CssCart,
  Outline,
  Border,
  // ItemCart,
  // Circle,
  // Corner,
  //HCenter,
  //PageCenter,
  Viewport,
  // Page,
  // Rectangle,
  // Round: RoundCart,
  MaskBox,
  SquareBox,
  Box,

  //
  // CheckBoxIndicator,
  // SelectIndicator,
  HoverShadowCart,
  LightingCart
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
  TipsIndicator,
  TitleIndicator,
  CircularDeleteIndicator,
  PlacementIndicator,
  MultiActionsIndicator,
})

NamedPresenterSet({
  //avatar
  Avatar,
  DefaultAvatar,
  GoogleAvatar,

  //text
  ChakraText,
  
  //placeholder
  DefaultPlaceholder,
  ItemPlaceholder,

  //image
  Image,
  CozeImage,
  PreviewAutoLayout,

  //shape
  Rectangle,
  Circle,

  //button
  ChakraButton,
  DownloadButton,
  AddNewButton,
  SquareAddNewButton,
  Delete,
  Download,
  ActionButton,
  SelectAction,
  NewDatasetAction,
  PreviewSelectAction,
  ChangeDatasetAction,
  DeleteAction,
  NewParamAction,
  PropsAction,
  BindingAction,
  NoPresenterAction,
  SortPresenterAction,
  DatasetBindingAction
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
  PlainManageList,
  KeyValueManageList,
  QueryManageList,
  DefaultGridLayoutList,
  LowCodeDatasetManageList
})

NameContainerSet({
  APIContainer,
  Container,
  TabContainer,
  WxPage,
  TitledContainer,
  DataFlowContainer,
  DrawerContainer,
  AddNewContainer,
  ConfirmContainer
})

NamedSelector({
  OutlineSelector,
  CornerCheckboxSelector,
  LeftCheckboxSelector
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
  // AutoComponent,

  NamedLayout,
  NamedList,
  NamedCart,
  NamedContainer,
  NamedSeperator,
  NamedGateway,

  // 
  NextIndicator,
  NamedIndicator,
};

