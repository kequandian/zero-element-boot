import NamedLayout from "./NamedLayout";
import NamedList from "./NamedList";
import NamedCart from "./NamedCart";
import NamedContainer from "./NamedContainer";
import NamedSeperator from "./NamedSeperator";
import NamedGateway from "./NamedGateway"; // AutoComponent

import AutoLayout from "./AutoLayout"; // import  { CloneAutoLayout }  from './CloneAutoLayout';

import AutoComponent from "./AutoComponent";
import APIContainer from "./container/APIContainer"; //set components config

import { set as NamedLayoutSet } from "./config/NamedLayoutConfig";
import { set as NamedCartSet } from "./config/NamedCartConfig";
import { set as NamedPresenterSet } from "./config/NamedPresenterConfig";
import { set as NamedIndicatorSet } from "./config/NamedIndicatorConfig";
import { set as FormItemTypeSet } from "./config/formItemTypeConfig"; //layout

import Flexbox from "./layout/Flexbox";
import Itembox from "./layout/Itembox";
import Gridbox from "./layout/Gridbox";
import Wrap from "./layout/Wrap";
import Stack from "./layout/Stack";
import Round from "./layout/Round"; //cart 

import Cart from "./cart/Cart";
import HightlightCart from "./cart/HightlightCart";
import HoverShadowCart from "./cart/HoverShadowCart";
import SelectCart from "./cart/SelectCart";
import SelectIndicatorCart from "./indicator/SelectIndicatorCart";
import CheckBoxIndicatorCart from "./indicator/CheckBoxIndicatorCart";
import Circle from "./cart/Circle";
import Corner from "./cart/Corner"; // import indicator from './cart/indicator';

import PageCart from "./cart/PageCart";
import Rectangle from "./cart/Rectangle";
import RoundCart from "./cart/Round";
import Page from "./cart/Page";
import SelectedCartUpperRightIcon from "./indicator/SelectedCartUpperRightIcon";
import SelectedCartRightIcon from "./indicator/SelectedCartRightIcon";
import DefaultHoverIndicator from "./indicator/DefaultHoverIndicator";
import MyIndicatorSelect from "./indicator/MyIndicatorSelect";
import MyIndicatorSelected from "./indicator/MyIndicatorSelected";
import RightIconCheckboxIndicatorDefauct from "./indicator/RightIconCheckboxIndicator/Defauct";
import RightIconCheckboxIndicatorSelect from "./indicator/RightIconCheckboxIndicator/Select";
import RightIconCheckboxIndicatorSelected from "./indicator/RightIconCheckboxIndicator/Selected";
import RightIconIndicatorDefault from "./indicator/RightIconIndicatorDefault";
import RightIconIndicatorHover from "./indicator/RightIconIndicatorHover";
import RightIconIndicatorSelected from "./indicator/RightIconIndicatorSelected";
import { Avatar, DownloadButton, ItemPlaceholder } from "./presenter";
import { Title, Subtitle } from "../presenter/demo"; // Form 组件

import { InputCompx, SelectFetch, CheckboxFetch, CheckboxModalFetch } from "./formItemType";
NamedLayoutSet({
  Flexbox,
  Itembox,
  Gridbox,
  Wrap,
  Stack,
  Round
});
NamedCartSet({
  Cart,
  HightlightCart,
  HoverShadowCart,
  SelectCart,
  SelectIndicatorCart,
  CheckBoxIndicatorCart,
  Circle,
  Corner,
  // indicator,
  PageCart,
  Page,
  Rectangle,
  Round: RoundCart,
  SelectedCartUpperRightIcon,
  SelectedCartRightIcon,
  DefaultHoverIndicator,
  MyIndicatorSelect,
  MyIndicatorSelected
});
NamedIndicatorSet({
  RightIconCheckboxIndicatorDefauct,
  RightIconCheckboxIndicatorSelect,
  RightIconCheckboxIndicatorSelected,
  RightIconIndicatorDefault,
  RightIconIndicatorHover,
  RightIconIndicatorSelected
});
NamedPresenterSet({
  Avatar,
  Title,
  Subtitle,
  DownloadButton,
  ItemPlaceholder
});
FormItemTypeSet({
  "input": InputCompx,
  "select-fetch": SelectFetch,
  "checkbox-fetch": CheckboxFetch,
  "checkbox-modal-fetch": CheckboxModalFetch
}); // default to export core components

export { AutoLayout // CloneAutoLayout,
, AutoComponent, NamedLayout, NamedList, NamedCart, NamedContainer, NamedSeperator, NamedGateway //
, APIContainer };