import React from 'react';

import NamedList from '@/components/NamedList';
import NamedLayout from '@/components/NamedLayout';

const { Button } = require('@/components/presenter')

export default function ButtonList(props){

    const config = {
      layout: {
          props: {
            justify: 'end', //start | end | center | space-around | space-between
            column: 0, //可选
          },
      },
      data: [
          {
            name: '提交',
            type: 'primary',
          },
          {
            name: '返回',
            type: 'default',
          },
          {
            name: '重置',
            type: 'default',
          },
        ]
      };

    return (
        <NamedList name='SimpleList' props={config} >
            <Button />
        </NamedList>
    )
}