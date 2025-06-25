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
  { name: 'Beige', color: '#D7CCC8' },

  //palette#2
  { "name": "LightPink", "color": "#FFC1D5" },
  { "name": "DarkPink", "color": "#D81B60" },
  { "name": "HotPink", "color": "#FF4081" },
  { "name": "RosePink", "color": "#F8BBD0" },
  { "name": "BlushPink", "color": "#F06292" },
  { "name": "PastelPink", "color": "#FCE4EC" },
  { "name": "DustyPink", "color": "#E91E63" },
  { "name": "NeonPink", "color": "#FF6EC7" },
  { "name": "CoralPink", "color": "#FF77A9" },
  { "name": "MagentaPink", "color": "#FF00AA" },

  //palette#3
  { "name": "PeachPink", "color": "#FFDAB9" },
  { "name": "CottonCandyPink", "color": "#FFB6C1" },
  { "name": "BubblegumPink", "color": "#FF69B4" },
  { "name": "SalmonPink", "color": "#FF91A4" },
  { "name": "RaspberryPink", "color": "#E30B5D" },
  { "name": "FuchsiaPink", "color": "#FF00FF" },
  { "name": "LavenderPink", "color": "#FBAED2" },
  { "name": "WatermelonPink", "color": "#FC6C85" },
  { "name": "PowderPink", "color": "#FFB8D1" },
  { "name": "RubyPink", "color": "#E0115F" },
  { "name": "CherryBlossomPink", "color": "#FFDFE3" },
  { "name": "StrawberryPink", "color": "#FF2D7A" },
  { "name": "MauvePink", "color": "#D473D4" },
  { "name": "TaffyPink", "color": "#FFA6C9" },
  { "name": "CarnationPink", "color": "#FFA6C9" }
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
