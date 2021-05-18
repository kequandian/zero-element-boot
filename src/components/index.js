import NamedLayout from './NamedLayout';
import NamedList from './NamedList';
import NamedCart from './NamedCart';
import NamedContainer from './NamedContainer';
import NamedSeperator from './NamedSeperator';
import NamedGateway from './NamedGateway';

// AutoComponent
import AutoLayout from './AutoLayout';
import AutoComponent from './AutoComponent';

import APIContainer from './container/APIContainer';

//set components config
import { set as NamedCartSet } from '@/config/NamedCartConfig';

//cart 
import Cart from './cart/Cart';
import ItemCart from './cart/ItemCart';
import HightlightCart from './cart/HightlightCart';
import HoverShadowCart from './cart/HoverShadowCart';
import SelectCart from './cart/SelectCart';
import SelectIndicatorCart from './cart/indicator/SelectIndicatorCart';
import CheckBoxIndicatorCart from './cart/indicator/CheckBoxIndicatorCart';
import Circle from './cart/Circle';
import Corner from './cart/Corner';
// import indicator from './cart/indicator';
import PageCart from './cart/PageCart';
import Rectangle from './cart/Rectangle';
import Round from './cart/Round';
import Shape from './cart/Shape';

NamedCartSet({
  Cart,
  ItemCart,
  HightlightCart,
  HoverShadowCart,
  SelectCart,
  SelectIndicatorCart,
  CheckBoxIndicatorCart,
  Circle,
  Corner,
  // indicator,
  PageCart,
  Rectangle,
  Round,
  Shape,
})

// default to export core components
export {
        AutoLayout,
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
