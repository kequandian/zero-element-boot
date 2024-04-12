import { useState } from 'react';

/**
 * 
 * 使用方法
 * 
 * 在组件中像使用 useState 一样来读写 localStorage 中的值
 * 例如: 
 * import useLocalStorage from '{path}/useLocalStorage';
 * 
 * ...
 * 初始值为 'Guest'
 * const [name, setName] = useLocalStorage('name', 'Guest');
 * ...
 */

function useLocalStorage(key, initialValue) {
  // 从 localStorage 中读取值，如果不存在则使用初始值
  const storedValue = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue;

  // 创建状态变量来存储当前值
  const [value, setValue] = useState(storedValue);

  // 将新值写入 localStorage
  const setLocalStorageValue = newValue => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setLocalStorageValue];
}
export default useLocalStorage;