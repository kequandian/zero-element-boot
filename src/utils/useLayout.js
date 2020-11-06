import { useRef } from 'react';

export default function useLayout() {
  const layoutRef = useRef();

  function getClassName() {
    if (layoutRef.current && layoutRef.current.getClassName) {
      return layoutRef.current.getClassName();
    }
  }

  return [layoutRef, {
    getClassName,
  }]
}
