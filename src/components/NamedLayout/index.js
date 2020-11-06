import React, { useImperativeHandle, forwardRef } from 'react';
import * as LayoutSet from './export';
import useLayout from '@/utils/useLayout';
import './index.less';

export default forwardRef(function NamedLayout({ name, props, layout, children, ...rest }, ref) {
  const [layoutRef, { getClassName }] = useLayout();

  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));

  let layoutConfig = { ...layout };

  if (typeof props === 'string') {
    layoutConfig = {
      ...layout,
      name: props,
    };
  } else {
    layoutConfig = { name, ...props, ...layout };
  }

  const Layout = LayoutSet[layoutConfig.name] || tips(layoutConfig.name);

  return <Layout {...layoutConfig} ref={layoutRef}>
    {React.Children.toArray(children).map(child => {
      return React.cloneElement(child, {
        ...rest
      })
    })}
  </Layout>
})

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}