import { useState, useEffect } from 'react';

// 定义色板
const COLOR_PALETTE = [
  { name: 'Gray', color: '#9E9E9E' },
  { name: 'Red', color: '#EF9A9A' },
  { name: 'Blue', color: '#90CAF9' },
  { name: 'Green', color: '#A5D6A7' },
  { name: 'Yellow', color: '#FFF59D' },
  { name: 'Purple', color: '#CE93D8' },
  { name: 'Orange', color: '#FFCC80' },
  { name: 'Cyan', color: '#80DEEA' },
  { name: 'Pink', color: '#F48FB1' },
  { name: 'Brown', color: '#BCAAA4' },
  { name: 'Indigo', color: '#7986CB' },
  { name: 'Beige', color: '#D7CCC8' }
];

export default function usePalette() {
  const [color, setColor] = useState({});

  useEffect(() => {
    getRandomColor();
  }, []);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLOR_PALETTE.length);
    const selectedColor = COLOR_PALETTE[randomIndex];
    setColor(selectedColor);
  };

  return color;
}
