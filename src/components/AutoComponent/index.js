const React = require('react');
const { useState, useEffect } = require('react');
const {NamedLayout, NamedGateway, NamedCart} = require('@/components');
const {Gateway} = require('@/components/gateway');


const useLayout = require('@/hooks/useLayout');
const requireConfig = require('@/components/AutoX/requireConfig');
const promiseAjax = require('@/utils/request');

// const presenter = require('@/components/presenter');
// const allComponents = {
//   ...presenter,
// };

module.exports = function (props) {
  const parent = module.parents[0]; //get module name

  const { config = requireConfig(parent), allComponents={} } = props;


  //获取 /public 配置文件所需代码
  //start
  const { cfgLayout={} } = config;
  const { path='' } = cfgLayout;
  const [restartRender, setRestartRender] = useState(0);
  //end

  const cfgData = path?undefined:config;

  const [cfg, setCfg] = useState(cfgData);
  const { layout, ...restCfg } = cfg || {};
  const { children, ...restLayout } = layout || {};
  const [layoutRef, { getClassName }] = useLayout();

  useEffect(_ => {
    if (cfg === undefined) {
      promiseAjax(`/x/${path}/layout.json`, {
        _t: new Date().getTime(),
      })
        .then(data => {
          setCfg(data);
          setRestartRender(restartRender + 1)
        })
    }
  }, []);

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

          // each item has its Named Gateway
          return <Gateway key={i} {...gatewayProps} span={span}>
               <C name={name} />
          </Gateway>
        })}
      </NamedLayout>
    ) : ''}
  </div>;
}

function tips(name) {
  return _ => `${name} 未定义`;
}