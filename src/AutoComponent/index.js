const React = require('react');
const { useState, useEffect } = require('react');
const NamedLayout = require('@/components/NamedLayout');
// const presenter = require('@/components/presenter');
const useLayout = require('@/utils/useLayout');
const GateWay = require('@/components/GateWay');
const requireConfig = require('@/utils/requireConfig');
const promiseAjax = require('@/utils/request');

// const allComponents = {
//   ...presenter,
// };

module.exports = function AutoX(props) {
  const parent = module.parents[0];

  const { config = requireConfig(parent), allComponents={} } = props;
  const [cfg, setCfg] = useState(config);
  const { layout, ...restCfg } = cfg || {};
  const { children, ...restLayout } = layout || {};
  const [layoutRef, { getClassName }] = useLayout();

  useEffect(_ => {
    const reg = /.\/src\/pages\/([\w\/]+)\/[\w.]+$/.exec(parent);
    let parentPath
    if (reg) {
      parentPath = reg[1];
    }

    
    console.log('parent111 = ', parent)
    console.log('reg111 = ', reg)
    console.log('parentPath111 = ', parentPath)

    if (cfg === undefined) {
      promiseAjax(`/${parentPath}/layout.json`, {
        _t: new Date().getTime(),
      })
        .then(data => {
          setCfg(data);
        })
    }
  }, []);
  
  // console.log('cfg = ', cfg)

  // console.log('getClassName = ', getClassName())

  return <div
    className={getClassName()}
  >
    {cfg ? (
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
    ) : ''}
  </div>;
}

function tips(name) {
  return _ => `${name} 未定义`;
}