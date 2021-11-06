import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { UserAvatar, UserName } = require('@/presenter/demo');

export default function SelectUpperRightItem(props) {
  const allComponents = {
    UserAvatar, UserName,
  }
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
          align: 'start',
          direction: 'row',
          justify: 'center',
          spacing: 10
      },
      children: [
        {
          presenter: 'UserAvatar',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                avatar: 'url'
              }
            }
          }
        },
        {
          presenter: 'UserName',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                name: 'body'
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
      <AutoComponent {...config} allComponents={allComponents} />
    </>
  )

}