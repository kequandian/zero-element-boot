const React = require('react');
const { useImperativeHandle, forwardRef,  } = require('react');
const useLayout = require('@/hooks/useLayout');
const CartSet = require('../cart');

export default forwardRef(function NamedCart({ name, props, children, ...rest }, ref) {

  const [CartRef, { getClassName }] = useLayout();


  useImperativeHandle(ref, () => ({
    getClassName: getClassName,
  }));


  // if (typeof props === 'string') {
  //   CartConfig = {
  //     ...Cart,
  //     name: props,
  //   };
  // } else {
  //   CartConfig = { ...Cart };
  // }


  const NamedCart = CartSet[name] || tips(name);

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