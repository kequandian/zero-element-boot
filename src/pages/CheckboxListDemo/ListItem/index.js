import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

// import layout from './layout';
import LayoutList from '../LayoutList';

export default function ListItem(props) {

  const { onItemClick } = props;

  const allComponents = {
    LayoutList,
  }

  const config = {
    layout:{
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'row',
        justify: 'center',
        onItemClick
      },
      children: [
        {
          presenter: 'LayoutList',
          gateway: {
            xname: 'Binding',
            props: {
              binding: {
                componentName: 'componentName',
                records: 'records'
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