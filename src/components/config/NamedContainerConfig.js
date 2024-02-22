import React from 'react';


const NamedContainerConfig = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    NamedContainerConfig[key] = NodeObj[key];
  })
}

function get() {
  return NamedContainerConfig;
}

const Render = ({ n, ...restProps }) => {
  const Component = NamedContainerConfig[n] || (() => <div>未定义的 namedContainer: {n}</div>);
  return <Component {...restProps} />
}

export {
  set,
  get,
  Render,
}