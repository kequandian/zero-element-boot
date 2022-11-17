import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { UserAvatar, Title } = require('@/presenter/demo');

export default function SelectUpperRightItem(props) {
  
  const allComponents = {
    UserAvatar, Title,
  }
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
          align: 'start',
          direction: 'column',
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
          presenter: 'Title',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                name: 'titleText'
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