// import { set as NamedCartSet } from '@/config/NamedCartConfig';
import { set as NamedIndicatorSet } from '@/components/config/NamedIndicatorConfig';
import { set as NamedPresenterSet } from '@/components/config/NamedPresenterConfig';

// //cart
// import Cart from '@/components/cart/Cart';

//indicator
import MyIndicatorSelect from '@/components/indicator/MyIndicatorSelect';
import MyIndicatorSelected from '@/components/indicator/MyIndicatorSelected';
import RightIconCheckboxSelect from '@/components/indicator/RightIconCheckboxIndicator/Select';
import RightIconCheckboxSelected from '@/components/indicator/RightIconCheckboxIndicator/Selected';

//presenter
import ImageAnimation from '@/pages/PresenterTestDemo/components/presenter/item/ItemAvator'
import ContentText from '@/pages/PresenterTestDemo/plugins/TodoList/TodoItem/Content_text'
import ContentFinish from '@/pages/PresenterTestDemo/components/presenter/item/ItemIconAction'

import {Avator, Title} from '@/presenter/demo';

import PregressBody from '@/composition/StatisticsContainer/ProgressList/PregressBody';

// NamedCartSet({
//   Cart
// })

NamedIndicatorSet({
  MyIndicatorSelect,
  MyIndicatorSelected,
  RightIconCheckboxSelect,
  RightIconCheckboxSelected
})

NamedPresenterSet({
  Avator,
  Title,

  ImageAnimation,
  ContentText,
  ContentFinish,

  PregressBody
})

