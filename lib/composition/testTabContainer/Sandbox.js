import React, { useState, useEffect } from 'react';
import useTokenRequest from "../../components/hooks/useTokenRequest";
import TabContainer from "./index";
export default function (props) {
  // let api = '/dev/dependency/decompile/json';
  let api = '/dev/dependency/json'; // if (process.env.NODE_ENV === 'development') {
  //   api = `http://192.168.3.12:8000${api}`;
  // }

  const [data] = useTokenRequest({
    api
  });
  const newData = [];
  data.map((item, index) => {
    // if(item.indexOf('.jar') > -1){
    const newItem = {};
    newItem.id = index + 1;
    newItem.value = item;
    newData.push(newItem); // }
  });
  return data.length > 0 ? /*#__PURE__*/React.createElement(TabContainer, {
    items: []
  }) : /*#__PURE__*/React.createElement(React.Fragment, null);
}