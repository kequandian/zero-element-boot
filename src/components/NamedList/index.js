const React = require('react');
const NamedListSet = require('../list');

//export default function NamedList({ name, API, props, children, spin = '' }) {
export default function NamedList({ xname, props, children, ...data}) {

  const NamedList = NamedListSet[xname] || tips(xname);

  // function handleQuery(queryData) {
  //   return promiseAjax(API, queryData).then(response => {
  //     return formatData(response.data);
  //   });
  // }

  //return <NamedList {...props} onQuery={handleQuery} spin={spin}>
  return <NamedList {...props} {...data}>
    {children}
  </NamedList>
}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}