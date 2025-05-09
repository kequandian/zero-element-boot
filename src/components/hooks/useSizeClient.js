	
import React, { useState ,useEffect ,useCallback } from 'react';

/**
 * 返回子组件大小
 * @param {} param0 
 * @returns 
 */
export default function useSizeClient({ ref: parentRef }){
    const [ size , setSize] = useState({})
  
    useEffect(() => {
      //获取父元素宽高
      const resizeHandler = () => {
        if (parentRef.current) {
          const width = parentRef.current.getBoundingClientRect().width;
          const height = parentRef.current.getBoundingClientRect().height;
          setSize({
            width: width,
            height: height
        })
        }
      };
  
      const handleFirstRender = () => {
        setTimeout(resizeHandler, 0);
      };
  
      window.addEventListener('resize', resizeHandler);
      handleFirstRender(); // Delay the first render
      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    }, []);
 
    return size;
}

