const React = require('react');
const { useImperativeHandle, forwardRef } = require('react');
const useLayout = require('@/utils/useLayout');
const LayoutSet = require('./export');
require('./index.less');

module.exports = forwardRef(function NamedLayout({ name, props, layout, children, ...rest }, ref) {
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