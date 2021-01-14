import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

import LayoutList from './LayoutList';

export default function ListItem(props) {

  const { item_index, curr_index } = props;

  const allComponents = {
    LayoutList,
  }

  const config = {
    layout:{
        xname: 'Flexbox',
        props: {
          align: 'start',
          direction: 'row',
          justify: 'center'
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