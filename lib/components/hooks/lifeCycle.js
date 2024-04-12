/* eslint-disable react-hooks/exhaustive-deps */
import { useReducer, useEffect, useMemo } from 'react';
export { useWillMount, useDidMount, useWillUnmount, useForceUpdate };

// 组件挂载前
function useWillMount(func) {
  useMemo(() => void func(), []);
}

// 组件挂载后
function useDidMount(func) {
  useEffect(() => void func(), []);
}

// 组件卸载前
function useWillUnmount(func) {
  useEffect(() => func, []);
}

// 强制更新
function useForceUpdate() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  return forceUpdate;
}