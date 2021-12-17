import React from 'react';

const AutoComponent = require('@/components/AutoComponent');

const presenter = require('@/composition/testUserSelection/presenter');

export default function UserItem(props) {

  const allComponents = {...presenter};

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        // itemStyle:{
        //   itemAlign:'v-center'
        // }
      },
      children: [
        {
          presenter: 'Avatar',
          // span: 2,
          gateway: {
            xname: 'Binding',
            props: {
              binding:{
                avatar:'avatar'
              }
              // field: 'avatar',
              // converter: {
              //   avatar: 'avatarIcon'
              // }
            }
          }
        },
        {
          presenter: 'ContentText',
          // span: 2,
          gateway: {
            xname: 'Binding',
            props: {
              binding:{
                account:"title",
                subtitle:"description",
              }
              // field: 'account',
              // converter: {
              //   account: 'TitleText'
              // }
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