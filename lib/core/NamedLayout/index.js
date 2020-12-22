function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = require('react');

const {
  useImperativeHandle,
  forwardRef
} = require('react');

const useLayout = require("../../hooks/useLayout");

const LayoutSet = require("../../components/layout");

module.exports = forwardRef(function NamedLayout({
  name,
  props,
  layout,
  cart = {},
  isValidLine = true,
  children,
  ...rest
}, ref) {
  const [layoutRef, {
    getClassName
  }] = useLayout();
  useImperativeHandle(ref, () => ({
    getClassName: getClassName
  }));
  let layoutConfig = { ...layout
  };

  if (typeof props === 'string') {
    layoutConfig = { ...layout,
      isValidLine
    };
  } else {
    layoutConfig = {
      name,
      ...props,
      ...layout,
      isValidLine
    };
  }

  const Layout = LayoutSet[layoutConfig.name] || tips(layoutConfig.name);
  return /*#__PURE__*/React.createElement(Layout, _extends({}, layoutConfig, {
    ref: layoutRef
  }), React.Children.toArray(children).map(child => {
    return React.cloneElement(child, { ...rest,
      cart
    });
  }));
});

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}