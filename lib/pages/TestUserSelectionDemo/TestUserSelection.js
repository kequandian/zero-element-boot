function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import { NamedContainer, NamedGateway, NamedList, NamedLayout, NamedCart } from "../../components"; // import AutoLayout from '@/components/AutoLayout'

import { AutoLayout } from "../../export";

const {
  UserItem
} = require("../../composition"); // const useUaasTestUser = require('@/pages/TestUserSelectionDemo/hooks/useUaasTestUser');


const promiseAjax = require("../../utils/request");
/**
 * hook callback 参考
 * https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react
 * 
 * 注意: callback 函数需要在调用 hook 函数前 声明, 否则会报错
 */


export default function TestUserSelection(props) {
  const {
    onItemClickHandle
  } = props; // const endpoint = 'http://192.168.3.236:8888';
  // const accountToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAxMCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgzMCIsInVzZXJUeXBlIjoxMDEsImJVc2VyVHlwZSI6IlNZU1RFTSIsInRlbmFudE9yZ0lkIjoxMDAwMDAwMDAwMDAwMDAwMTAsImFjY291bnQiOiJhZG1pbiIsImV4dHJhVXNlclR5cGUiOjAsImlhdCI6MTYwNzMwNjU3MywianRpIjoiODc2NzA4MDgyNDM3MTk3ODMwIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MDc1NjU3NzN9.6J1ozLxN4PO6TpbGPb1-Y77-AyLxWbGY4kmheDiWkksI0w7SyotNSc7rD358bRk9I7pbpCizyBlVbUDbzcIxwQ';

  const api = '/api/adm/users/testUserList'; // const callBack = (data) => {
  //     console.log('token = ', data.token)
  //     console.log('permissions = ', data.permissions)
  // }
  // const [users, changeUser] = useUaasTestUser({ endpoint, accountToken }, callBack);

  const [userList, setUserList] = useState([]);

  function handleQuery(API, queryData) {
    return promiseAjax(API, queryData).then(response => {
      if (response && response.code === 200) {
        setUserList(response.data);
      }
    });
  }

  useEffect(_ => {
    handleQuery(api);
  }, []); //Cart HoverShadowCart

  const config = {
    items: userList.length > 0 ? userList : [],
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        justify: 'full',
        seperator: 'Divider'
      },
      //children:[],
      gateway: {
        xname: 'Binding',
        props: {
          binding: {
            avatar: 'avatar',
            account: 'title',
            name: 'subtitle'
          }
        }
      },
      cart: {
        xname: 'ItemCart',
        props: {
          padding: '10px'
        }
      },
      // presenter: 'UserItem',
      container: 'PlainList'
    }
  };

  const onClick = item => {
    // changeUser(item.id)
    console.log(item);
    onItemClickHandle();
  };

  const allComponents = {
    UserItem
  }; // return (
  //     <AutoLayout {...config} onItemClick={onClick} allComponents={allComponents} />
  // )

  return /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onClick
  }), /*#__PURE__*/React.createElement(UserItem, null)); // return (
  //     <NamedList name='PlainList' items={config.items} onItemClick={onClick}>
  //         <NamedLayout name='Flexbox' props={config.layout.props}>
  //             <NamedGateway name='Gateway'>
  //                 <NamedCart name='ItemCart' props={{padding: '12px'}}> 
  //                     <UserItem />
  //                 </NamedCart>
  //             </NamedGateway>
  //         </NamedLayout>
  //     </NamedList>
  // )
}