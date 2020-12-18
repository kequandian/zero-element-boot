import React from 'react';
const AutoComponent = require('@/AutoComponent');
const presenter = require('@/components/presenter');

export default function SelectItem(props) {

  const { item_index, curr_index } = props;

  const config = {
    layout: {
      name: 'Grid',
      props: {
        col: 1,
      },
      children: [
        {
          name: 'Title',
          span: 1,
          gateway: {
            name: 'Gateway',
            props: {
              field: 'title',
              converter: {
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
    <div style={{ minWidth: '200px'}} >
      <AutoComponent config={config} allComponents={presenter}/>
    </div>
  )

}