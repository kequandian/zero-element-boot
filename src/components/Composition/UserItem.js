import React from 'react';
const AutoComponent = require('@/AutoComponent');

const presenter = require('@/components/presenter');

export default function UserItem(props) {

  const config = {
    layout: {
      name: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
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
        // {
        //   name: 'Detailed',
        //   span: 4,
        //   gateway: {
        //     name: 'Gateway',
        //     props: {
        //       field: 'subTitle',
        //       converter: {
        //         subTitle: 'text'
        //       }
        //     }
        //   }
        // },
      ]
    },
    ...props,
  };

  return (
    <div style={{ minWidth: '300px' }}>
      <AutoComponent config={config} allComponents={presenter}/>
    </div>
  )

}