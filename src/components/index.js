import NamedLayout from './NamedLayout';
import NamedList from './NamedList';
import NamedCart from './NamedCart';
import NamedContainer from './NamedContainer';
import NamedSeperator from './NamedSeperator';
import NamedGateway from './NamedGateway';
import NamedIndicator from './NamedIndicator';
//
import NextIndicator from './NextIndicator';
import NextCssIndicator from './NextCssIndicator';
import BootChakraProvider from './provider/BootChakraProvider';

// AutoLayout
import AutoLayout from './AutoLayout';
import PreviewAutoLayout from '@/components/PreviewAutoLayout';
import BootPreviewAutoLayout from '@/components/BootPreviewAutoLayout';

//set components config
import { set as NamedLayoutSet } from '@/components/config/NamedLayoutConfig';
import { set as NamedGatewaySet } from '@/components/config/NamedGatewayConfig';
import { set as NamedCartSet } from '@/components/config/NamedCartConfig';
import { set as NamedIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';
import { set as NamedListSet } from '@/components/config/NamedListConfig';
import { set as NamedSelector } from '@/components/config/NamedSelectorConfig';
import { set as NameContainerSet } from '@/components/config/NamedContainerConfig';
import { set as FormItemTypeSet } from '@/components/config/FormItemTypeConfig';


//container
import {
  APIContainer, Container, TabContainer, WxPage, TitledContainer,
  DataFlowContainer, DrawerContainer, AddNewContainer, ConfirmContainer
} from './container';

//layout
import {
  Flexbox, Gridbox, AutoGrid, GridViewport,
  /*Flexbox*/ Wrap, Round, Between, Stack, VStack,
  Center, HStack, HCenter, VCenter, PageCenter, 
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
  ChakraBox,
  
  //effect cart
  ShadowCart
} from './cart';


//indicator
import {
  // effect indicator
  ShadowIndicator,
  MaskIndicator,
  LightingIndicator,

  // action indicator
  DownloadIndicator,
  ClickIndicator,
  ManageMenuIndicator,
  DeleteIndicator,
  CircularDeleteIndicator,
  BackIndicator,
  LabelIndicator,
  TipsIndicator,
  TitleIndicator,
  PlacementIndicator,
  MultiActionsIndicator,
  NavigationIndicator
} from './indicator';

// selector
import {
  SelectedCartUpperRightIcon,
  SelectedCartRightIcon,
  
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
  PropsAction, BindingAction, NoPresenterAction, DatasetBindingAction,
  //SortPresenterAction,
  //image
  Image, CozeImage
} from '@/components/presenter';

// Form 组件
import { InputCompx, SelectFetch } from '@/components/FormItemType';


NamedLayoutSet({
  Flexbox,
  Gridbox,
  AutoGrid,
  GridViewport,

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
  PageCenter, 
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
  //border
  Cart,
  CssCart,
  Outline,
  Border,

  //viewport
  //HCenter,   // move to layout
  //PageCenter,
  Viewport,

  //box
  ChakraBox,
  SquareBox,
  MaskBox,

  //effect cart
  ShadowCart
})

NamedIndicatorSet({
  // RightIconCheckboxIndicatorDefauct,
  // RightIconCheckboxIndicatorSelect,
  // RightIconCheckboxIndicatorSelected,
  // RightIconIndicatorDefault,
  // RightIconIndicatorHover,
  // RightIconIndicatorSelected
  // SelectedCartUpperRightIcon,
  // SelectedCartRightIcon,
  MaskIndicator,

  DownloadIndicator,
  ClickIndicator,
  ManageMenuIndicator,
  ShadowIndicator,
  DeleteIndicator,
  BackIndicator,
  LabelIndicator,
  TipsIndicator,
  TitleIndicator,
  CircularDeleteIndicator,
  PlacementIndicator,
  MultiActionsIndicator,
  NavigationIndicator,
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
  // SortPresenterAction,
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
})


// FormItemTypeSet({
//   "input": InputCompx,
//   "select-fetch": SelectFetch,
//   "checkbox-fetch": CheckboxFetch,
//   "checkbox-modal-fetch": CheckboxModalFetch,
//   "one-many": OneMany,
//   "select": SelectCompx
// })
FormItemTypeSet({
  "input": InputCompx,
  "select-fetch": SelectFetch
});


// default to export core components
export {
  AutoLayout,
  PreviewAutoLayout,
  BootPreviewAutoLayout,

  //
  NamedLayout,
  NamedList,
  NamedCart,
  NamedContainer,
  NamedGateway,
  NamedIndicator,
  NamedSeperator,
  NamedSelector,

  //
  NextIndicator,
  NextCssIndicator,

  // provider
  BootChakraProvider
};

