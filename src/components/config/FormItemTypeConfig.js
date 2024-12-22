import React from 'react';


const FormItemTypeSet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    FormItemTypeSet[key] = NodeObj[key];
  })
}

function get() {
  return FormItemTypeSet;
}

const Render = ({ n, ...restProps }) => {
  const Component = FormItemTypeSet[n] || (() => <div>未定义的 FormItemType: {n}</div>);
  return <Component {...restProps} />
}

export {
  set,
  get,
  Render,
}