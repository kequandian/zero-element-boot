const React = require('react');
const NamedLayout = require('@/components/NamedLayout');
const presenter = require('@/components/presenter');
const composition = require('@/components/Composition');
const useLayout = require('@/utils/useLayout');
const GateWay = require('@/components/GateWay');
const requireConfig = require('@/utils/requireConfig');

//TODO 参照 /AutoComponent/index.js
const allComponents = {
  ...presenter,
  ...composition
};

module.exports = function AutoComponentL2(props) {
  const parent = module.parents[0];

  const { config = requireConfig(parent) } = props;
  const { layout, ...restCfg } = config;
  const { children, ...restLayout } = layout;
  const [layoutRef, { getClassName }] = useLayout();

  return <div
    className={getClassName()}
  >
    <NamedLayout {...restLayout} ref={layoutRef}>
      {children.map((child, i) => {
        const { name, span, gateway } = child;
        const C = allComponents[name] || tips(name);
        let gatewayProps = { ...restCfg };
        if (gateway && typeof gateway === 'object' && gateway.props) {
          gatewayProps = { ...gatewayProps, ...gateway.props }
        }

        return <GateWay key={i} {...gatewayProps} span={span}>
          <C name={name} />
        </GateWay>
      })}
    </NamedLayout>
  </div>;
}

function tips(name) {
  return _ => `${name} 未定义`;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          