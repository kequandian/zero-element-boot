const React = require('react');
import { get as NamedListSet } from '@/components/config/NamedListConfig';
//const NamedListSet = require('../list');

//export default function NamedList({ name, API, props, children, spin = '' }) {
export default function NamedList({ xname, props, children, ...data}) {

  const _List = NamedListSet[xname] || tips(xname);

  // function handleQuery(queryData) {
  //   return promiseAjax(API, queryData).then(response => {
  //     return formatData(response.data);
  //   });
  // }

  //return <NamedList {...props} onQuery={handleQuery} spin={spin}>
  return <_List {...props} {...data}>
    {children}
  </_List>
}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}