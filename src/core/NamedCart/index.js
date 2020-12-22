const React = require('react');
const { useImperativeHandle, forwardRef,  } = require('react');
const useLayout = require('@/hooks/useLayout');
const CartSet = require('../../components/cart');

export default forwardRef(function NamedCart({ cart, children, ...rest }, ref) {

  const [CartRef, { getClassName }] = useLayout();


  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));


  let CartConfig = { ...cart, ...cart.props };

  // if (typeof props === 'string') {
  //   CartConfig = {
  //     ...Cart,
  //     name: props,
  //   };
  // } else {
  //   CartConfig = { ...Cart };
  // }


  const Cart = CartSet[CartConfig.name] || tips(CartConfig.name);

  return (
      <Cart {...CartConfig} ref={CartRef}>
        {React.Children.toArray(children).map(child => {
          return React.cloneElement(child, {
            ...rest
          })
        })}
      </Cart>
  )

})

function tips(name) {
  return _ => `NamedCart ${name} 未定义`;
}