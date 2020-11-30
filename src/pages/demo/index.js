import React from 'react';
import GetField from '@/components/GetField';
import AutoCombination from '@/components/AutoCombination';
import NamedList from '@/components/NamedList';

import AutoComponent from '@/AutoComponent';

export default function Demo(props) {

  // AutoLoadList
  // return <NamedList name="LoadMoreList" API="/api/adm/stat/meta/template/table">
  //   <NamedLayout name="Align" props={{ align: 'rightAndLastCenter' }}>
  //     <GetField dataField="data">
  //       <Test />

  //     </GetField>
  //   </NamedLayout>
  // </NamedList>
  return <AutoComponent config={demoConfig} />
}

const demoConfig = {
  items: [
    { test: 123 },
    { test: 456 },
  ],
  tabs: {},
  layout: {
    name: 'Grid',
    props: {
      col: 4
    }
  },
  children: [
    {
      name: 'NamedList',
      span: 1,
      gateway: {
        name: 'Gateway',
        props: {
          field: 'items',
          converter: {
            key: 'name',
            value: 'option'
          }
        }
      }
    },
    {
      name: 'Tab',
      span: 1,
      gateway: {
        name: 'Gateway',
        props: {
          field: 'items'
        }
      }
    },
    {
      name: "Tab",
      span: 1,
      gateway: "MyDefinedGateway"
    }
  ]
};

function Test() {
  return <h2 style={{ width: 200, border: '1px solid', margin: 8 }}>Demo</h2>
}