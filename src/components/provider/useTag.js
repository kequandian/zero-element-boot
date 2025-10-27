import React from 'react';
import { BootChakraContext } from './BootChakraProvider';

// hook
export const useTag = () => React.useContext(BootChakraContext);

// 统一的 tagged 日志函数，供所有组件复用
export const tagged = (usedTag, TAG, tag, data) => {
  if (!usedTag) { return }
  if (tag) {
    console.log(`TAG-${TAG}-${tag}`);
  }
  if (data) {
    console.log('userdata=', data.userdata ? data.userdata : data);
  }
};
export default useTag;