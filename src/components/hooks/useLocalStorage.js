import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // 从 localStorage 中读取值，如果不存在则使用初始值
  const storedValue = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue;

  // 创建状态变量来存储当前值
  const [value, setValue] = useState(storedValue);

  // 将新值写入 localStorage
  const setLocalStorageValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalStorageValue];
}

export default useLocalStorage;