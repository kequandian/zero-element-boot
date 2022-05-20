import { setEndpoint, setToken } from "./components/config/common"; // import { set as NamedCartSet } from '@/config/NamedCartConfig';

import { set as NamedIndicatorSet } from "./components/config/NamedIndicatorConfig";
import { set as NamedPresenterSet } from "./components/config/NamedPresenterConfig";
import { set as FormItemTypeSet } from "./components/config/formItemTypeConfig"; // //cart
// import Cart from '@/components/cart/Cart';
//indicator

import MyIndicatorSelect from "./components/indicator/MyIndicatorSelect";
import MyIndicatorSelected from "./components/indicator/MyIndicatorSelected";
import RightIconCheckboxSelect from "./components/indicator/RightIconCheckboxIndicator/Select";
import RightIconCheckboxSelected from "./components/indicator/RightIconCheckboxIndicator/Selected";
import RightIconCheckboxDefauct from "./components/indicator/RightIconCheckboxIndicator/Defauct"; //presenter

import ImageAnimation from "./pages/PresenterTestDemo/components/presenter/item/ItemAvatar";
import ContentText from "./pages/PresenterTestDemo/plugins/TodoList/TodoItem/Content_text";
import ContentFinish from "./pages/PresenterTestDemo/components/presenter/item/ItemIconAction";
import { Avatar, Title } from "./presenter/demo";
import PregressBody from "./composition/StatisticsContainer/ProgressList/PregressBody";
import JarItem from "./composition/Standalone/JarItem";
import { InputCompx, SelectFetch } from "./components/formItemType"; // NamedCartSet({
//   Cart
// })
//开发模式设置endpoint, token

if (process.env.NODE_ENV == 'development') {
  // setEndpoint('http://app1.console.smallsaas.cn:8001');
  setEndpoint('http://demo.smallsaas.cn:8001');
  setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEiLCJ1c2VySWQiOiIxIiwidGVuYW50T3JnSWQiOjEsImFjY291bnQiOiJhZG1pbiIsInVzZXJUeXBlIjoxMDAsImRldlVzZXJUeXBlIjowLCJiVXNlclR5cGUiOiJTWVNURU0iLCJpYXQiOjE2NTMwMTE3OTEsImp0aSI6IjEiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTY1MzI3MDk5MX0._reFJnx631UymWNINrZTfwE3S9uBlsfIpR-ZiLskZNXf54bRdhe1y7ku8T3xk0REQ1aLosHZ5Ukh81fcb726kQ');
}

NamedIndicatorSet({
  MyIndicatorSelect,
  MyIndicatorSelected,
  RightIconCheckboxSelect,
  RightIconCheckboxSelected,
  RightIconCheckboxDefauct
});
NamedPresenterSet({
  Avatar,
  Title,
  ImageAnimation,
  ContentText,
  ContentFinish,
  PregressBody,
  JarItem
}); //注入表单组件

FormItemTypeSet({
  "input": InputCompx,
  "select-fetch": SelectFetch
});