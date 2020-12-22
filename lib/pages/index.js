import React from 'react';
import TestUserSelection from "./TestUserSelectionDemo/TestUserSelection";
import ImageAnimationDemo from "./Demo/ImageAnimationDemo";
import PlainListDemo from "./Demo/PlainListDemo";
import PublicLayoutDemo from "./Demo/PublicLayoutDemo";
import SelectedListDemo from "./Demo/SelectedListDemo";
import UserListDemo from "./Demo/UserListDemo";
export default function index(props) {
  const onItemClickHandle = () => {
    console.log('event to dismiss the component');
  };

  return /*#__PURE__*/React.createElement(TestUserSelection, {
    onItemClickHandle: onItemClickHandle
  });
}