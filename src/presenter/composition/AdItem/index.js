import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { ImageAnimation } = require('@/presenter/demo');

const { TextContent, FootContent } = require('./components');

export default function AdItem(props) {

  const allComponents = {
    ImageAnimation,
    TextContent,
    FootContent,
  }

  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        justify: 'center'
      },
      children: [
        {
          presenter: 'ImageAnimation',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                url: 'imgUrl'
              }
            }
          }
        },
        {
          presenter: 'TextContent',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                title: 'title',
                describe: 'describe'
              }
            }
          }
        },
        {
          presenter: 'FootContent',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                adType: 'adType',
                createTime: 'createTime'
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
      <AutoComponent {...config} allComponents={allComponents}/>
    </>
  )

}