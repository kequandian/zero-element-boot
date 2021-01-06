import React from 'react';
import Container from "../../components/container/Container";
import UserItem from "../../presenter/composition/UserItem";
export default function NamedCartTest(props) {
  const config = {
    "avatar": "https://media.geeksforgeeks.org/wp-content/uploads/20200403151026/adblur_gfg.png",
    "title": "admin"
  };
  return /*#__PURE__*/React.createElement(Container, config, /*#__PURE__*/React.createElement(UserItem, null));
}