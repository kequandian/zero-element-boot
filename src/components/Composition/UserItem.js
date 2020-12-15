import React from 'react';
const AutoComponent = require('@/AutoComponentIssue');

const presenter = require('@/components/presenter');

export default function UserItem(props) {

  const config = {
    layout: {
      name: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        itemStyle:{
          itemAlign:'v-center'
        }
      },
      children: [
        {
          name: 'Avatar',
          gateway: {
            name: 'Gateway',
            props: {
              field: 'avatar',
              converter: {
                avatar: 'avatarIcon'
              }
            }
          }
        },
        {
          name: 'Title',
          gateway: {
            name: 'Gateway',
            props: {
              field: 'account',
              converter: {
                account: 'TitleText'
              }
            }
          }
        },
      ]
    },
    ...props,
  };

  return (
    <div>
      <AutoComponent config={config} allComponents={presenter}/>
    </div>
  )

}