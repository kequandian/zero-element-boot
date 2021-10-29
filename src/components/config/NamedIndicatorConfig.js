import React from 'react';


const NamedIndicatorSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    NamedIndicatorSet[key] = NodeObj[key];
  })
}

function get() {
  return NamedIndicatorSet;
}

const Render = ({ n, ...restProps }) => {
  const Component = NamedIndicatorSet[n] || (() => <div>未定义的 NamedIndicator: {n}</div>);
  return <Component {...restProps} />
}

export {
  set,
  get,
  Render,
}