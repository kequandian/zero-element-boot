import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

// import from global
// const { Avatar, Title, Subtitle } = require('@/presenter/demo');

/**
 * 
 * @param {String} avatar 头像
 * @param {String} title  头衔, 账户
 * @param {String} subtitle 副标题，显示名称
 */
export default function AvatarItem(props) {

  // const allComponents = {
  //   Avatar,
  //   Title,
  //   Subtitle
  // }

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
                title: 'body'
              }
            }
          }
        },
        {
          presenter: 'Subtitle',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                title: 'body'
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
      <AutoComponent {...config} /*allComponents={allComponents}*/ />
    </>
  )

}