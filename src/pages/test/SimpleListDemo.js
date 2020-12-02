import React from 'react';

import NamedList from '@/components/NamedList';
import NamedLayout from '@/components/NamedLayout';

export default function SimpleListDemo(props){

    const config = {
        layout: {
            size: 500,
            props: {
                col: 4,
            },
        },
        data: [
            {
              name: 'CartItem11',
              span: 1,
            },
            {
              name: 'CartItem22',
              span: 1,
            },
            {
              name: 'CartItem33',
              span: 1,
            },
          ]
      };

    return (
        <NamedList name='SimpleList' props={config} >
            <Test />
        </NamedList>
    )
}

function Test(props) {

    return <h2 key={props.name} style={{ width: 200, border: '1px solid', margin: 8 }}>{props.name + props.span}</h2>
  }