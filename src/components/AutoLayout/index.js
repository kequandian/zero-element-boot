const React = require('react');
const {NamedContainer, NamedLayout, NamedGateway, NamedCart} = require('@/components');
const useLayout = require('@/hooks/useLayout');
// const requireConfig = require('@/components/AutoX/requireConfig');
// requreTemplate
const Container = require('@/components/container/Container')

// change history
//CR.2020-12-26 init

/**
 * 自动布局复合组件，自定义抽象参数如下说明
 * @param {*} props 
 * @param {布局} layout
 * @param {修饰} cart [shape, decorator, behavior, ...]
 * @param {分隔} seperator
 * @param {数据传递与绑定} gateway
 */
module.exports = function AutoLayout(props) {
  const [layoutRef, { getClassName }] = useLayout();

  // get template first
  const {template, items, children, allComponents={}, onItemClick= () => {console.log('未设置onItemClick点击事件')}, ...data } = props;

  // handle template
  const {container, item, layout, cart, gateway, ...childrenData } = template || {};
  const _Container = container ? NamedContainer : Container
  const _cart = cart
  const _gateway = gateway
  // console.log('AutoLayout:_Container=', _Container)
  const containerProps = (container && (typeof container === 'string'? {name: container} : container) ) || {}

  
  // if template contains childrenData, means this is for auto component
  const hasChildrenData = childrenData && Array.isArray(childrenData) && Array.hasChildren(childrenData)
  const ListChild = hasChildrenData? null : (item? allComponents[item]  : React.Children.only(children) )

  // get children for auto component or get data for list
  const _children = hasChildrenData? childrenData : {...data}
  console.log('AutoLayout:_children=', _children)


  // restLayout means layout props
  // child iterator from children contains: [name, span, width, gateway, cart, [,seperator]]
  return <_Container {...containerProps}>
    <div 
       className={getClassName()}
    >
        <NamedLayout {...layout} ref={layoutRef}>
          {items.map((child, i) => {
            const { name, span, gateway, cart } = child;
            const C = allComponents[name] || ListChild || tips(name);

            //get gateway name, use default gateway if child has no gateway defined
            const __gateway = gateway ? gateway : _gateway
            const gatewayName = __gateway ? (typeof __gateway === 'string' ? __gateway : __gateway.name) : 'Gateway' 
            const gatewayProps = (__gateway && __gateway.props) || {} 

            //get cart name
            const __cart =  cart ? cart : _cart
            const cartName = __cart ? (typeof __cart === 'string' ? __cart : __cart.name) : '' 
            const cartProps = (__cart && __cart.props) || {}

            // each item has its Named Gateway
            // {*} data will send down to NamedCart and then NamedCart to Child Component
            return <NamedGateway key={i} name={gatewayName} {...gatewayProps} {...data} span={span}>
              {cart?
                <NamedCart key={i} name={cartName} {...cartProps} >
                  <C />
                </NamedCart>
              :
                <C /> }
            </NamedGateway>
          })}
        </NamedLayout> 
    </div>
  </_Container>
}


function tips(name) {
  return _ => `${name} 未定义`;
}
