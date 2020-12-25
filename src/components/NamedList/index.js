const React = require('react');
const NamedListSet = require('../list');

//export default function NamedList({ name, API, props, children, spin = '' }) {
export default function NamedList({ name, props, children, ...rest}) {

  const NamedList = NamedListSet[name] || tips(name);

  // function handleQuery(queryData) {
  //   return promiseAjax(API, queryData).then(response => {
  //     return formatData(response.data);
  //   });
  // }

  //return <NamedList {...props} onQuery={handleQuery} spin={spin}>
  return <NamedList {...props} {...rest}>
    {children}
  </NamedList>
}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}