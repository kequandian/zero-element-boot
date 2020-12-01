import React from 'react';
import NamedLayout from '@/components/NamedLayout';
import * as presenter from '@/components/presenter';
import useLayout from '@/utils/useLayout';
import GateWay from '@/components/GateWay';

const allComponents = {
  ...presenter,
};

export default function AutoComponent(props) {
  const { config } = props;
  const { layout, children, ...restCfg } = config;
  const [layoutRef, { getClassName }] = useLayout();

  return <div
    className={getClassName()}
  >
    <NamedLayout {...layout} ref={layoutRef}>
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