import { useState, useEffect } from 'react';

const usePosition = (alignment = 'left', offsetx = 0, offsety = 0) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {

      let style = {}

      switch (alignment) {

        case 'top':
          style = {
            top: `${offsety || 0}px`,
            left: `calc(50% + ${offsetx}px)`,
            transform: `translateX(-50%)`,
          }
          break;
        case 'right':
          style = {
            top: `calc(50% + ${offsety}px)`,
            right: `${offsetx || 0}px`,
            transform: `translateY(-50%)`,
          }
          break;
        case 'left':
          style = {
            top: `calc(50% + ${offsety}px)`,
            left: `${offsetx || 0}px`,
            transform: `translateY(-50%)`,
          }
          break;
        case 'bottom':
          style = {
            bottom: `${offsety || 0}px`,
            left: `calc(50% + ${offsetx}px)`,
            transform: `translateX(-50%)`,
          }
          break;
        case 'topleft':
          style = {
            top: `${offsety || 0}px`,
            left: `${offsetx || 0}px`
          };
          break;
        case 'topright':
          style = {
            top: `${offsety || 0}px`,
            right:`${offsetx || 0}px`,
          }
          break;
        case 'bottomleft':
          style = {
            bottom: `${offsety || 0}px`,
            left: `${offsetx || 0}px`,
          }
          break;
        case 'bottomright':
          style = {
            bottom: `${offsety || 0}px`,
            right: `${offsetx || 0}px`,
          }
          break;
        default:
          break;
      }

      setPosition({
        position: 'absolute',
        ...style,
        zIndex: 1000,
      });
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [alignment]);

  return position;
};

export default usePosition;