const React = require('react');
const { useImperativeHandle, forwardRef,  } = require('react');
const useLayout = require('@/hooks/useLayout');
const CartSet = require('../cart');

export default forwardRef(function NamedCart({ name, props, children, ...rest }, ref) {

  const [CartRef, { getClassName }] = useLayout();

  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));

  const nameValue = name || rest.cart.name

  const NamedCart = CartSet[nameValue] || tips(nameValue);

  return (
      <NamedCart {...props} ref={CartRef}>
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