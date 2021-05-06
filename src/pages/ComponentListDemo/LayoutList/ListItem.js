import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const { ImageAnimation, Title } = require('@/presenter/demo');

export default function ListItem(props) {

  const { onListItemClick } = props;

  const allComponents = {
    ImageAnimation,
    Title
  }

  const config = {
    layout:{
        xname: 'Itembox',
        props: {
          align: 'start',
          direction: 'column',
          justify: 'center',
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

  // function onItemClickAction (v) {
  //   console.log(v)
  //   if(onItemClick){
  //     console.log('click = ', v)
  //     onItemClick(v)
  //   }
  // }

  return (
    <>
      <AutoComponent {...config} allComponents={allComponents} onItemClick={onListItemClick}/>
    </>
  )

}