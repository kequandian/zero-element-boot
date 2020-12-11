import React from 'react';
import { Spin } from 'antd';
import GetField from '@/components/GetField';
import AutoCombination from '@/components/AutoCombination';
import NamedList from '@/components/NamedList';
import NamedLayout from '@/components/NamedLayout';
const AutoComponent = require('@/AutoComponent');


export default function Demo(props) {

  // AutoLoadList && LoadMoreList
  return <NamedList name="AutoLoadList" API="/api/adm/stat/meta/template/table" spin={Spin}>
    <NamedLayout name="Align" props={{ align: 'leftAndLastRight' }}>
      <GetField dataField="data">
        <Test />
      </GetField>
    </NamedLayout>
  </NamedList>
  return <AutoComponent />
}


function Test() {
  return <h2 style={{ width: 200, border: '1px solid', margin: 8 }}>Demo</h2>
}