import NamedLayout from './NamedLayout';
import NamedList from './NamedList';
import NamedCart from './NamedCart';
import NamedContainer from './NamedContainer';
import NamedSeperator from './NamedSeperator';
import NamedGateway from './NamedGateway';

// AutoComponent
import AutoLayout from './AutoLayout';
// import  { CloneAutoLayout }  from './CloneAutoLayout';
import AutoComponent from './AutoComponent';

import APIContainer from './container/APIContainer';

//set components config
import { set as NamedLayoutSet } from '@/components/config/NamedLayoutConfig';
import { set as NamedCartSet } from '@/components/config/NamedCartConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';

//layout
import Flexbox from '@/components/layout/Flexbox';
import Itembox from '@/components/layout/Itembox';
import Gridbox from '@/components/layout/Gridbox';
import Wrap from '@/components/layout/Wrap';
import Stack from '@/components/layout/Stack';
import Round from '@/components/layout/Round';

//cart 
import Cart from './cart/Cart';
import HightlightCart from './cart/HightlightCart';
import HoverShadowCart from './cart/HoverShadowCart';
import SelectCart from './cart/SelectCart';
import SelectIndicatorCart from './indicator/SelectIndicatorCart';
import CheckBoxIndicatorCart from './indicator/CheckBoxIndicatorCart';
import Circle from './cart/Circle';
import Corner from './cart/Corner';
// import indicator from './cart/indicator';
import PageCart from './cart/PageCart';
import Rectangle from './cart/Rectangle';
import RoundCart from './cart/Round';
import Shape from './cart/Shape';
import Page from './cart/Page';

import SelectedCartUpperRightIcon from './indicator/SelectedCartUpperRightIcon';
import SelectedCartRightIcon from './indicator/SelectedCartRightIcon';

import {Avatar, Title} from '@/presenter/demo';

NamedLayoutSet({
  Flexbox,
  Itembox,
  Gridbox,
  Wrap,
  Stack,
  Round
})

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
  Shape,
  SelectedCartUpperRightIcon,
  SelectedCartRightIcon
})

NamedPresenterSet({
  Avatar,
  Title
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
    APIContainer
};
