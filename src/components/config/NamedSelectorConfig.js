import React from 'react';


const NamedSelectorSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    NamedSelectorSet[key] = NodeObj[key];
  })
}

function get() {
  return NamedSelectorSet;
}

const Render = ({ n, ...restProps }) => {
  const Component = NamedSelectorSet[n] || (() => <div>未定义的 NamedSelector: {n}</div>);
  return <Component {...restProps} />
}

export {
  set,
  get,
  Render,
}