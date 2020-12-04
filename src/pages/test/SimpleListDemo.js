import React from 'react';

import NamedList from '@/components/NamedList';
import NamedLayout from '@/components/NamedLayout';

const { CartItem } = require('@/components/Composition')

export default function SimpleListDemo(props){

    const config = {
      items:[
        {icon:'',  title:'title111',  subTitle:'subTitle111',},
        {icon:'',  title:'title222',  subTitle:'subTitle222',}
      ],
      layout: {
        props: {
          justify: 'start', //start | end | center | space-around | space-between
          column: 0, //可选
        },
      },
    };

    return (
        <NamedList name='SimpleList' props={config} >
            <CartItem />
        </NamedList>
    )
}