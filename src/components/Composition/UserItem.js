import React from 'react';
const AutoComponent = require('@/AutoComponent');

const presenter = require('@/components/presenter');

export default function UserItem(props) {

  const config = {
    layout: {
      name: 'Grid',
      props: {
        col: 3,
      },
      children: [
        {
          name: 'Avatar',
          align: 'center',
          span: 1,
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
          span: 1,
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
        {
          name: 'Title',
          span: 1,
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
    <div style={{ minWidth: '500px' }}>
      <AutoComponent config={config} allComponents={presenter}/>
    </div>
  )

}