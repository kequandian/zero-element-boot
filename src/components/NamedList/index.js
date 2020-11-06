import React from 'react';
import promiseAjax from '@/utils/request';
import * as NamedListSet from './export';
import formatData from './formatData';

export default function NamedList({ name, API, props, children }) {
  const NamedList = NamedListSet[name] || tips(name);

  function handleQuery(queryData) {
    return promiseAjax(API, queryData).then(response => {
      return formatData(response.data);
    });
  }

  return <NamedList {...props} onQuery={handleQuery}>
    {children}
  </NamedList>

}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}