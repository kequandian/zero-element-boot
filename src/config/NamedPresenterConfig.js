import React from 'react';


const namedPresenterSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    namedPresenterSet[key] = NodeObj[key];
  })
}

function get() {
  return namedPresenterSet;
}

const Render = ({ n, ...restProps }) => {
  const Component = namedPresenterSet[n] || (() => <div>未定义的 namedCart: {n}</div>);
  return <Component {...restProps} />
}

export {
  set,
  get,
  Render,
}