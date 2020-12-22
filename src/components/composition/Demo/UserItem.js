import React from 'react';
const AutoComponent = require('@/core/AutoComponent');

const presenter = require('@/components/presenter/default');

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
    <>
      <AutoComponent config={config} allComponents={presenter}/>
    </>
  )

}