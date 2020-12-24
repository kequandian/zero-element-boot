import React from 'react';
const AutoComponent = require('@/components/AutoComponent');

const presenter = require('@/presenter/default');

export default function Demo(props) {

  // AutoLoadList && LoadMoreList
  // return <NamedList name="AutoLoadList" API="/api/adm/stat/meta/template/table" spin={Spin}>
  //   <NamedLayout name="Align" props={{ align: 'leftAndLastRight' }}>
  //     <GetField dataField="data">
  //       <Test />
  //     </GetField>
  //   </NamedLayout>
  // </NamedList>

  return <AutoComponent/>
}


function Test() {
  return <h2 style={{ width: 200, border: '1px solid', margin: 8 }}>Demo</h2>
}
