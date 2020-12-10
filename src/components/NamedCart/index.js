const React = require('react');
const { useImperativeHandle, forwardRef,  } = require('react');
const useLayout = require('@/utils/useLayout');
const CartSet = require('./export');

export default forwardRef(function NamedContainer({ cart, children, ...rest }, ref) {

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
  return _ => `Cart ${name} 未定义`;
}