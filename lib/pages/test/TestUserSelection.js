function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react'; // import PlainList from '@/components/NamedList/PlainList';
// import NamedLayout from '@/components/NamedLayout';
// import NamedCart from '@/components/NamedCart';

const {
  UserItem
} = require("../../components/Composition");

import { PlainList, NamedLayout, NamedCart } from "../../export";
import listData from "./data/UserListData";

const useUaasTestUser = require("../../utils/useUaasTestUser");
/**
 * hook callback 参考
 * https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react
 * 
 * 注意: callback 函数需要在调用 hook 函数前 声明, 否则会报错
 */


export default function TestUserSelection(props) {
  const {
    onItemClickHandle
  } = props;
  const endpoint = 'http://192.168.3.236:8888';
  const accountToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAxMCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgzMCIsInVzZXJUeXBlIjoxMDEsImJVc2VyVHlwZSI6IlNZU1RFTSIsInRlbmFudE9yZ0lkIjoxMDAwMDAwMDAwMDAwMDAwMTAsImFjY291bnQiOiJhZG1pbiIsImV4dHJhVXNlclR5cGUiOjAsImlhdCI6MTYwNzMwNjU3MywianRpIjoiODc2NzA4MDgyNDM3MTk3ODMwIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MDc1NjU3NzN9.6J1ozLxN4PO6TpbGPb1-Y77-AyLxWbGY4kmheDiWkksI0w7SyotNSc7rD358bRk9I7pbpCizyBlVbUDbzcIxwQ';

  const callBack = data => {
    console.log('token = ', data.token);
    console.log('permissions = ', data.permissions);
  }; ///


  const [users, changeUser] = useUaasTestUser({
    endpoint,
    accountToken
  }, callBack);
  const config = {
    items: users.length > 0 ? users : listData.data,
    layout: {
      name: 'Box',
      props: {
        align: 'start',
        direction: 'column'
      }
    },
    cart: {
      name: 'Cart',
      props: {
        margin: '0px'
      }
    }
  };

  const onClick = item => {
    changeUser(item.id);
    onItemClickHandle();
  };

  return /*#__PURE__*/React.createElement(PlainList, _extends({}, config, {
    onItemClick: onClick
  }), /*#__PURE__*/React.createElement(NamedLayout, null, /*#__PURE__*/React.createElement(NamedCart, null, /*#__PURE__*/React.createElement(UserItem, null))));
}