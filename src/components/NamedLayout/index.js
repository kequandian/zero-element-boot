const React = require('react');
const { useImperativeHandle, forwardRef } = require('react');
const useLayout = require('@/hooks/useLayout');
const LayoutSet = require('../layout');

module.exports = forwardRef(function NamedLayout({children, name, props, layout={name, props}, isValidLine, ...rest }, ref) {
  const [layoutRef, { getClassName }] = useLayout();
  // console.log('layoutConfig=', layoutConfig, '...layout=', layout)

  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));

  // if (typeof props === 'string') {
  //   layoutConfig = { ...layout, isValidLine };
  // } else {
  //   layoutConfig = { name, ...props, ...layout, isValidLine };
  // }

  // retrieve isValidLine for layout
  const isValidLineConfig = {isValidLine: isValidLine}

  const Layout = LayoutSet[layout.name] || tips(layout.name);

  console.log('layout = ', layout);

  return <Layout {...layout.props} {...isValidLineConfig} ref={layoutRef}>
    {React.Children.toArray(children).map(child => {
      let element = React.cloneElement(child, {
        ...rest,
      })
      return element;
    })}
  </Layout>
})

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}