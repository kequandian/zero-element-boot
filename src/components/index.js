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
import { set as NamedPresenterSet } from '@/config/NamedPresenterConfig';

//cart
import ItemCart from './cart/ItemCart';
import HightlightCart from './cart/HightlightCart';
import HoverShadowCart from './cart/HoverShadowCart';
import SelectCart from './cart/SelectCart';

NamedCartSet({
  ItemCart,
  HightlightCart,
  HoverShadowCart,
  SelectCart
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
