import React from 'react';


const namedCartSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    namedCartSet[key] = NodeObj[key];
  })
}

function get() {
  return namedCartSet;
}

const Render = ({ n, ...restProps }) => {
  const Component = namedCartSet[n] || (() => <div>未定义的 namedCart: {n}</div>);
  return <Component {...restProps} />
}

export {
  set,
  get,
  Render,
}