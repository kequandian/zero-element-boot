import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { Avatar, Title } = require('@/presenter/demo');

/**
 * 
 * @param {} avatar 头像
 * @param {} title  头衔, 账户
 * @param {} subtitle 副标题，显示名称
 */
export default function UserItem(props) {

  const allComponents = {
    Avatar,
    Title
  }

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        justify: 'center'
      },
      children: [
        {
          presenter: 'Avatar',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                avatar: 'avatarIcon'
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
                title: 'TitleText'
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