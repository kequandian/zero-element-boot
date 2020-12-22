import React from 'react';
import * as componentSet from '@/export';
import NamedLayout from '../NamedLayout';

export default function AutoChart(props) {
  const { layout, children } = props;
  
  if (!Array.isArray(children)) {
    console.warn('未传入 children 或传入的 children 非数组. props: ', props);

    return null;
  }

  let layoutConfig = {};

  if (typeof layout === 'string') {
    layoutConfig = {
      name: layout,
    };
  } else {
    layoutConfig = { ...layout };
  }

  return <NamedLayout {...layoutConfig}>
    {children.map(child => {
      const { presenter, field } = child;
      const ComponentName = presenter.replace(/^\S/, s => s.toUpperCase());
      const Component = componentSet[ComponentName] || Tips(ComponentName);
      const data = props[field] || {};

      if (!props[field]) {
        console.warn(`未能读取到数据 field: ${field}`, props);
      }

      return <Component key={field} {...data} />
    })}
  </NamedLayout>
}

function Tips(name) {
  return function () {
    return `组件 ${name} 未定义`
  }
}