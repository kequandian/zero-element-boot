import React from 'react';
import NamedLayout from '@/components/NamedLayout';
import * as presenter from '@/components/presenter';
import useLayout from '@/utils/useLayout';

const allComponents = {
  ...presenter,
};

export default function AutoComponent(props) {
  const { config } = props;
  const { layout, items, children } = config;
  const [layoutRef, { getClassName }] = useLayout();

  return <div
    className={getClassName()}
  >
    <NamedLayout {...layout} ref={layoutRef}>
      {children.map((child, i) => {
        const { name, span, gateway } = child;
        const C = allComponents[name] || tips(name);
        const data = items[i] || {};
        return <C key={i} name={name} span={span} {...data} />
      })}
    </NamedLayout>
  </div>;
}

function tips(name) {
  return _ => `${name} 未定义`;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          