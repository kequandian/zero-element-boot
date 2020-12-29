const React = require('react');
const DefaultLayoutSet = require('../layout');

// change history
// CR.2020-12-26 custom LayoutSet

/**
 * NameLayout [,NamedCart] 负责处理数据传递，具体的 Layout[Flexbox,...] 不负责处理数据传递
 * 区别于 NamedGateway 数据传递由具体的 Gateway 处理
 * @param {命名组件名称} name 
 * @param {命名组件自定义属性} props
 * @param {命名组件的 [name, props] 通过 layout 传递 } layout
 */
module.exports = function NamedLayout({children, name, props, layout={name, props}, isValidLine, layoutSet, ...rest}) {

  // custom layoutSet first
  const LayoutSet = layoutSet || DefaultLayoutSet

  // retrieve isValidLine for layout
  const isValidLineConfig = {isValidLine: isValidLine}

  const layoutName = (typeof layout === 'string') ? layout : layout.name
  const Layout = LayoutSet[layoutName] || tips(layoutName);

  return <Layout {...layout.props} {...isValidLineConfig}>
    {React.Children.toArray(children).map(child => {
      let element = React.cloneElement(child, {
        ...rest,
      })
      return element;
    })}
  </Layout>
}

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}
