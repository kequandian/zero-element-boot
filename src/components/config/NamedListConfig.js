import React from 'react';


const namedListSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    namedListSet[key] = NodeObj[key];
  })
}

function get() {
  return namedListSet;
}

const Render = ({ n, ...restProps }) => {
  const Component = namedListSet[n] || (() => <div>未定义的 namedCart: {n}</div>);
  return <Component {...restProps} />
}

export {
  set,
  get,
  Render,
}