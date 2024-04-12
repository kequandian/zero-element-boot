import React from 'react';
import _ from 'lodash';
import { formatParams } from "../utils/tools";

/**
 * @string replacing 替换掉所有属性的包含字符串，如 {"api": "/api/modules/(moduleId)", "moduleId": 100}, api属性值被替换后为 /api/modules/100
 */
export default function Replacing({
  children,
  replacing,
  dataSource,
  ...rest
}) {
  const data = dataSource || rest || {};
  const convertData = doReplace(replacing, data);
  const childrenList = React.Children.toArray(children);
  return childrenList.map(child => /*#__PURE__*/React.cloneElement(child, {
    ...rest,
    ...convertData
  }));
}
export const useReplacing = data => {
  // {} means for all
  return doReplace({}, data);
};

// doBind
function doReplace(replacing, data) {
  const replacement = replacing || {};

  //TODO, {} for all, else just the specific key

  const convertData = {};
  Object.keys(data).forEach(key => {
    if (data[key] && typeof data[key] === 'string' && data[key].indexOf('(') != -1 && data[key].indexOf(')') != -1) {
      convertData[key] = formatParams(data[key], data);
    } else if (data[key] && typeof data[key] === 'object') {
      const childObject = {};
      Object.keys(data[key]).forEach(k => {
        if (data[key][k] && typeof data[key][k] === 'string' && data[key][k].indexOf('(') != -1 && data[key][k].indexOf(')') != -1) {
          const childConvertValue = formatParams(data[key][k], data);
          childObject[k] = childConvertValue;
          convertData[key] = childObject;
        }
      });
    }
  });
  return {
    ...data,
    ...convertData
  };
}