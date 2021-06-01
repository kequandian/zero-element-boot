import React from 'react';

const namedLayoutSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    namedLayoutSet[key] = NodeObj[key];
  })
}

function get() {
  return namedLayoutSet;
}

const Render = ({ n, ...restProps }) => {
  const Component = namedLayoutSet[n] || (() => <div>未定义的 namedLayout: {n}</div>);
  return <Component {...restProps} />
}

export {
  set,
  get,
  Render,
}