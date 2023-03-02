// import React from 'react';
const namedGatewaySet = {};

function set(NodeObj) {
  Object.keys(NodeObj).forEach(key => {
    namedGatewaySet[key] = NodeObj[key];
  });
}

function get() {
  return namedGatewaySet;
}

export { set, get };