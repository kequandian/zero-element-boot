const React = require('react');
const { useImperativeHandle, forwardRef,  } = require('react');
const useLayout = require('@/hooks/useLayout');
const DefaultCartSet = require('../cart');

/**
 * NamedCart负责处理数据传递，具体的Cart[ItemCart, OffsetCart, ...] 不负责处理数据传递
 */
export default forwardRef(function NamedCart({children, name, props, cart={name, props}, cartSet, ...rest }, ref) {
  const [cartRef, { getClassName }] = useLayout();

  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));

  const _CartSet = cartSet ? cartSet : DefaultCartSet

  const cartName = (typeof cart === 'string') ? cart : cart.name
  const NamedCart = _CartSet[cartName] || tips(cartName);

  // ensure only child
  const Child = React.Children.only(children)

  return (
      <NamedCart {...cart.props} ref={cartRef}>
        {React.Children.toArray(children).map(child => {
          return React.cloneElement(child, {
            ...rest
          })
        })}
      </NamedCart>
  )

})

function tips(name) {
  return _ => `NamedCart ${name} 未定义`;
}