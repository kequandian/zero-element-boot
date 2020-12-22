const React = require('react');
const promiseAjax = require('@/utils/request');
const NamedListSet = require('./export');
const formatData = require('./formatData');

export default function NamedList({ name, API, props, children, spin = '' }) {
  const NamedList = NamedListSet[name] || tips(name);

  function handleQuery(queryData) {
    return promiseAjax(API, queryData).then(response => {
      return formatData(response.data);
    });
  }

  return <NamedList {...props} onQuery={handleQuery} spin={spin}>
    {children}
  </NamedList>

}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}