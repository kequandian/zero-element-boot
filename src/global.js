// import { set as NamedCartSet } from '@/config/NamedCartConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';

// //cart
// import Cart from '@/components/cart/Cart';

//presenter
import ImageAnimation from '@/pages/PresenterTestDemo/components/presenter/item/ItemAvator'
import ContentText from '@/pages/PresenterTestDemo/plugins/TodoList/TodoItem/Content_text'
import ContentFinish from '@/pages/PresenterTestDemo/components/presenter/item/ItemIconAction'

import {Avator, Title} from '@/presenter/demo'

// NamedCartSet({
//   Cart
// })

NamedPresenterSet({
  Avator,
  Title,

  ImageAnimation,
  ContentText,
  ContentFinish
})

