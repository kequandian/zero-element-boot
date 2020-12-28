import React from 'react';
const { useState, useEffect } = require('react');
import AutoLayout from "@/components/AutoLayout";

const { UserItem } = require('@/presenter/composition');
const promiseAjax = require('@/utils/request');


/**
 * Demo
 */
export default function index(props) {
  
  const { onItemClickHandle } = props;

  // const endpoint = 'http://192.168.3.236:8888';
  // const accountToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAxMCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgzMCIsInVzZXJUeXBlIjoxMDEsImJVc2VyVHlwZSI6IlNZU1RFTSIsInRlbmFudE9yZ0lkIjoxMDAwMDAwMDAwMDAwMDAwMTAsImFjY291bnQiOiJhZG1pbiIsImV4dHJhVXNlclR5cGUiOjAsImlhdCI6MTYwNzMwNjU3MywianRpIjoiODc2NzA4MDgyNDM3MTk3ODMwIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MDc1NjU3NzN9.6J1ozLxN4PO6TpbGPb1-Y77-AyLxWbGY4kmheDiWkksI0w7SyotNSc7rD358bRk9I7pbpCizyBlVbUDbzcIxwQ';
  const api = '/api/adm/users/testUserList'

  // const callBack = (data) => {
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
  }, []);

  //Cart HoverShadowCart
  const config = {
      items: userList.length > 0 ? userList : [],
      template: {
          container: 'PlainList',
          layout: {
              name: 'Flexbox',
              props: {
                  align: 'start',
                  direction: 'column',
                  justify: 'full',
                  seperator: 'Divider',
              }
          },
          children: [],
          cart:{
              name: 'ItemCart',
              props: {
                  padding: '20px',
              }
          }, 
          gateway: 'Gateway',
          item: 'UserItem'
      }
  };

  const onClick = (item) => {
      // changeUser(item.id)
      console.log(item)
      onItemClickHandle();
  }

  return (
    //   <AutoLayout {...config} onItemClick={onClick}>
    //       <NamedLayout>
    //           <NamedCart name='ItemCart' props={{padding: '12px'}}> 
    //               <UserItem />
    //           </NamedCart>
    //       </NamedLayout>
    //   </AutoLayout>
    <AutoLayout {...config} onItemClick={onClick}>
        <UserItem />
    </AutoLayout>
  )
}
