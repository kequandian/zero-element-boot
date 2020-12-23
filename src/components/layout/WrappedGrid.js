import React, { useImperativeHandle, forwardRef, useContext, useRef } from 'react';
import ContainerContext from '@/components/NamedList/ContainerContext';

export default forwardRef(function WrappedGrid({ children, col = 3 }, ref) {
  const size = useContext(ContainerContext);
  const initWidth = useRef(size.width / col - 16);

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return 'l-WrappedGrid';
    }
  }));

  return React.Children.map(children, child => {
    return <div className="l-WrappedGridItem" style={{ width: initWidth.current || 0 }}>
      {child}
    </div>
  })
}
)