import { useState, useEffect } from 'react';

const usePosition = (alignment = 'left') => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {

      let style = {}

      switch (alignment) {

        case 'top':
          style = {
            top: 0,
            left: '50%',
            transform: 'translate(-50%)'
          }
          break;
        case 'right':
          style = {
            top: ' 50%',
            right: 0,
            transform: 'translateY(-50%)'
          }
          break;
        case 'left':
          style = {
            top: ' 50%',
            left: 0,
            transform: 'translateY(-50%)'
          }
          break;
        case 'bottom':
          style = {
            bottom: 0,
            left: '50%',
            transform: 'translate(-50%)'
          }
          break;
        case 'topLeft':
          style = {
            top: 0,
            left: 0
          };
          break;
        case 'topRight':
          style = {
            top: 0,
            right: 0,
          }
          break;
        case 'bottomLeft':
          style = {
            bottom: 0,
            left: 0,
          }
          break;
        case 'bottomRight':
          style = {
            bottom: 0,
            right: 0,
          }
          break;
        default:
          break;
      }

      setPosition({
        position: 'absolute',
        ...style,
      });
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [alignment]);

  return position;
};

export default usePosition;