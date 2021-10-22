import NamedCart from './NamedCart';

//set components config
import { set as NamedCartSet } from '@/components/config/NamedCartConfig';

//cart 
import Cart from './hoverCart/Cart';
import HightlightCart from './cart/HightlightCart';
import HoverShadowCart from './cart/HoverShadowCart';
import SelectCart from './cart/SelectCart';
import SelectIndicatorCart from './indicator/SelectIndicatorCart';
import CheckBoxIndicatorCart from './indicator/CheckBoxIndicatorCart';
import Circle from './cart/Circle';
import Corner from './cart/Corner';
// import indicator from './cart/indicator';
import PageCart from './hoverCart/PageCart';
import Rectangle from './cart/Rectangle';
import RoundCart from './cart/Round';
import Shape from './cart/Shape';

import SelectedCartUpperRightIcon from './selectedCart/SelectedCartUpperRightIcon';
import SelectedCartRightIcon from './selectedCart/SelectedCartRightIcon';

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
  Rectangle,
  Round: RoundCart,
  Shape,
  SelectedCartUpperRightIcon,
  SelectedCartRightIcon
})

// default to export core components
export {
    NamedCart,
};
