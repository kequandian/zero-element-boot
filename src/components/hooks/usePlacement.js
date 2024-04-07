import { useState, useEffect } from 'react';

function usePlacement(targetRef, overlayRef, alignment = 'right', offsetX = 0, offsetY = 0) {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    const updatePosition = () => {
      if (targetRef.current && overlayRef.current) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const overlayRect = overlayRef.current.getBoundingClientRect();

        let top, left;

        switch (alignment) {
          case 'left':
            top = targetRect.top + targetRect.height / 2 - overlayRect.height / 2;
            left = targetRect.left - overlayRect.width - offsetX;
            break;
          case 'right':
            top = targetRect.top + targetRect.height / 2 - overlayRect.height / 2;
            left = targetRect.right + offsetX;
            break;
          case 'top':
            top = targetRect.top - overlayRect.height - offsetY;
            left = targetRect.left + targetRect.width / 2 - overlayRect.width / 2;
            break;
          case 'bottom':
            top = targetRect.bottom + offsetY;
            left = targetRect.left + targetRect.width / 2 - overlayRect.width / 2;
            break;
          case 'topleft':
            top = targetRect.top - offsetY;
            left = targetRect.left - offsetX;
            break;
          case 'topright':
            top = targetRect.top - offsetY;
            left = targetRect.right - overlayRect.width + offsetX;
            break;
          case 'bottomleft':
            top = targetRect.bottom - overlayRect.height + offsetY;
            left = targetRect.left - offsetX;
            break;
          case 'bottomright':
            top = targetRect.bottom - overlayRect.height + offsetY;
            left = targetRect.right - overlayRect.width + offsetX;
            break;
          default:
            top = targetRect.top + targetRect.height / 2 - overlayRect.height / 2;
            left = targetRect.right + offsetX;
        }

        setStyles({
          position: 'absolute',
          top: `${top}px`,
          left: `${left}px`,
          zIndex: 1000, // Adjust as needed
        });
      }
    };

    updatePosition();

    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [targetRef, overlayRef, alignment, offsetX, offsetY]);

  return styles;
}

export default usePlacement;
