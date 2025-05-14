import React from 'react';
import AutoLayout from '@/components/AutoLayout';

/**
 * 
 * @param {String} avatar 头像
 * @param {String} title  头衔, 账户
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
        justify: 'center',
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
      ]
    },
    ...props,
  };

  return (
    <>
      <AutoLayout {...config} /*allComponents={allComponents}*/ />
    </>
  )

}