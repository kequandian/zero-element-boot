const React = require('react');
const { useImperativeHandle, forwardRef } = require('react');
const useLayout = require('@/hooks/useLayout');
const LayoutSet = require('../layout');

module.exports = forwardRef(function NamedLayout({ name, props, layout, cart={}, isValidLine=true, children, ...rest }, ref) {
  const [layoutRef, { getClassName }] = useLayout();

  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));

  let layoutConfig = { ...layout };

  if (typeof props === 'string') {
    layoutConfig = {
      ...layout,
      isValidLine
    };
  } else {
    layoutConfig = { name, ...props, ...layout, isValidLine };
  }

  const Layout = LayoutSet[layoutConfig.name] || tips(layoutConfig.name);

  return <Layout {...layoutConfig} ref={layoutRef}>
    {React.Children.toArray(children).map(child => {
      return React.cloneElement(child, {
        ...rest,
        cart,
      })
    })}
  </Layout>
})

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}