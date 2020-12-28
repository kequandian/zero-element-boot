const React = require('react');
const { useImperativeHandle, forwardRef } = require('react');
const useLayout = require('@/hooks/useLayout');
const DefaultLayoutSet = require('../layout');

// change history
// CR.2020-12-26 custom LayoutSet

/**
 * NameLayout 负责处理数据传递，具体的 Layout[Flexbox,...] 不负责处理数据传递
 * @param {命名组件名称} name 
 * @param {命名组件自定义属性} props
 * @param {命名组件的 [name, props] 通过 layout 传递 } layout
 */
module.exports = forwardRef(function NamedLayout({children, name, props, layout={name, props}, isValidLine, layoutSet, ...rest }, ref) {
  const [layoutRef, { getClassName }] = useLayout();

  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));

  // custom layoutSet first
  const _LayoutSet = layoutSet ? layoutSet : DefaultLayoutSet

  // retrieve isValidLine for layout
  const isValidLineConfig = {isValidLine: isValidLine}

  const layoutName = (typeof layout === 'string') ? layout : layout.name
  const Layout = _LayoutSet[layoutName] || tips(layoutName);

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
