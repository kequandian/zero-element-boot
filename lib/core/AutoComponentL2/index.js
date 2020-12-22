function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const React = require('react');

const NamedLayout = require("../NamedLayout");

const presenter = require("../../components/presenter/default");

const composition = require("../../components/composition/Demo");

const useLayout = require("../../hooks/useLayout");

const GateWay = require("../../components/gateway/GateWay");

const requireConfig = require("../../utils/requireConfig"); //TODO 参照 /AutoComponent/index.js


const allComponents = { ...presenter,
  ...composition
};

module.exports = function AutoComponentL2(props) {
  const parent = module.parents[0];
  const {
    config = requireConfig(parent)
  } = props;
  const {
    layout,
    ...restCfg
  } = config;
  const {
    children,
    ...restLayout
  } = layout;
  const [layoutRef, {
    getClassName
  }] = useLayout();
  return /*#__PURE__*/React.createElement("div", {
    className: getClassName()
  }, /*#__PURE__*/React.createElement(NamedLayout, _extends({}, restLayout, {
    ref: layoutRef
  }), children.map((child, i) => {
    const {
      name,
      span,
      gateway
    } = child;
    const C = allComponents[name] || tips(name);
    let gatewayProps = { ...restCfg
    };

    if (gateway && typeof gateway === 'object' && gateway.props) {
      gatewayProps = { ...gatewayProps,
        ...gateway.props
      };
    }

    return /*#__PURE__*/React.createElement(GateWay, _extends({
      key: i
    }, gatewayProps, {
      span: span
    }), /*#__PURE__*/React.createElement(C, {
      name: name
    }));
  })));
};

function tips(name) {
  return _ => `${name} 未定义`;
}