import React from 'react';
import GetField from '@/components/GetField';
import AutoCombination from '@/components/AutoCombination';
import NamedList from '@/components/NamedList';
const AutoComponent = require('@/AutoComponent');

export default function Demo(props) {

  // AutoLoadList
  // return <NamedList name="LoadMoreList" API="/api/adm/stat/meta/template/table">
  //   <NamedLayout name="Align" props={{ align: 'rightAndLastCenter' }}>
  //     <GetField dataField="data">
  //       <Test />

  //     </GetField>
  //   </NamedLayout>
  // </NamedList>
  return <AutoComponent config={config} />
}

const config = {
  items: { test: 456 },
  tabs: {},
  layout: {
    name: 'Grid',
    props: {
      col: 1
    },
    children: [
      {
        name: 'DiffCompose',
        span: 1,
        gateway: {
          name: 'Gateway',
          props: {
            field: 'items',
            converter: {
            }
          }
        }
      },
    ]
  },
};

function Test() {
  return <h2 style={{ width: 200, border: '1px solid', margin: 8 }}>Demo</h2>
}