import React from 'react';
import useNormalize from "../hooks/useNormalize";
export default function Normalizing({
  children,
  keysMap = {},
  dataSource,
  ...rest
}) {
  const data = dataSource || rest || {};
  const normalizeData = useNormalize(data, keysMap);
  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => /*#__PURE__*/React.cloneElement(child, {
    ...rest,
    ...normalizeData
  }));
}