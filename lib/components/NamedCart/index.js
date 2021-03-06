function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = require('react');

const {
  useImperativeHandle,
  forwardRef
} = require('react');

const useLayout = require("../../utils/useLayout");

const CartSet = require("./export");

export default forwardRef(function NamedContainer({
  cart,
  children,
  ...rest
}, ref) {
  const [CartRef, {
    getClassName
  }] = useLayout();
  useImperativeHandle(ref, () => ({
    getClassName: getClassName
  }));
  let CartConfig = { ...cart,
    ...cart.props
  }; // if (typeof props === 'string') {
  //   CartConfig = {
  //     ...Cart,
  //     name: props,
  //   };
  // } else {
  //   CartConfig = { ...Cart };
  // }

  const Cart = CartSet[CartConfig.name] || tips(CartConfig.name);
  return /*#__PURE__*/React.createElement(Cart, _extends({}, CartConfig, {
    ref: CartRef
  }), React.Children.toArray(children).map(child => {
    return React.cloneElement(child, { ...rest
    });
  }));
});

function tips(name) {
  return _ => `Cart ${name} 未定义`;
}