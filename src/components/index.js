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

NamedCartSet({
  Cart,
  ItemCart,
  HightlightCart,
  HoverShadowCart,
  SelectCart,
  SelectIndicatorCart
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
