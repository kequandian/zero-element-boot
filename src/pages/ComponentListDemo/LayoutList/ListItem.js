import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { ImageAnimation, Title } = require('@/presenter/demo');

export default function ListItem(props) {

  const allComponents = {
    ImageAnimation,
    Title
  }

  const config = {
    layout:{
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
                    imageUrl: 'imgUrl'
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
                    name: 'TitleText',
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