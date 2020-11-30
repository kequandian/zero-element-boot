import React from 'react';
import GetField from '@/components/GetField';
import AutoCombination from '@/components/AutoCombination';
import NamedList from '@/components/NamedList';
import APIContainer from '@/components/APIContainer';
import CombinationDemo01 from '../demo/CombinationDemo01';

export default function Demo(props) {

  // AutoLoadList
  // return <NamedList name="LoadMoreList" API="/api/adm/stat/meta/template/table">
  //   <NamedLayout name="Align" props={{ align: 'rightAndLastCenter' }}>
  //     <GetField dataField="data">
  //       <Test />
  //       <DemoText />
  //     </GetField>
  //   </NamedLayout>
  // </NamedList>

  // return <APIContainer API="/api/adm/stat/meta/template/table" queryData={{}}>
  //   <AutoCombination>
  //     <GetField dataField="data">
  //       <CombinationDemo01 />
  //     </GetField>
  //   </AutoCombination>
  // </APIContainer>

  return <CombinationDemo01 />
}

function DemoText(props) {
  console.log('props = ', props);
  return <h2 style={{ width: 200, border: '1px solid', margin: 8 }}>DemoText</h2>
}

function Test(props) {
  console.log('props1111 = ', props);
  return <h2 style={{ width: 200, border: '1px solid', margin: 8 }}>Text</h2>
}