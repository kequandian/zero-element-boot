import React from 'react';
import TestUserSelection from "./TestUserSelection";
export default function UserListDemo(props) {
  const onItemClickHandle = () => {
    console.log('event to dismiss the component');
  };

  return /*#__PURE__*/React.createElement(TestUserSelection, {
    onItemClickHandle: onItemClickHandle
  });
}