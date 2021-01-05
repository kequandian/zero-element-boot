import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { ImageAnimation } = require('@/presenter/demo');

const TextContext = require('./components/textContent');

const FootContent = require('./components/FootContent');

export default function AdItem(props) {

  const allComponents = {
    ImageAnimation,
    TextContext,
    FootContent,
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
          presenter: 'TextContext',
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
        // {
        //   name: 'FootContent',
        //   span: 1,
        // },
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