import React from 'react';

/**
 * YouTubeGridLayout - YouTube 风格的响应式网格布局组件
 * 
 * 基于 CSS Grid 的 auto-fill 和 minmax() 实现自适应列数，
 * 完全模拟 YouTube 官网的视频列表布局效果。
 * 
 * @param {number} [minCardWidth=250] - 卡片最小宽度（px）
 * @param {number} [gap=16] - 卡片间距（px）
 * @param {string} [aspectRatio="16:9"] - 卡片高宽比
 * @param {string} [className] - 自定义样式类名
 * @param {Object} [style] - 自定义样式对象
 * @param {boolean} [centerContent=false] - 是否居中显示内容
 * @returns {JSX.Element}
 */
export default function YouTubeGridLayout({
  children,
  minCardWidth = 250,
  gap = 16,
  aspectRatio = "16:9",
  className,
  style,
  centerContent = false
}) {
  // 解析高宽比
  const parseAspectRatio = (ratio) => {
    const [width, height] = ratio.split(':').map(Number);
    return width / height;
  };

  const aspectRatioValue = parseAspectRatio(aspectRatio);
  const cardHeight = minCardWidth / aspectRatioValue;

  // 构建 CSS Grid 样式
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${minCardWidth}px, 1fr))`,
    gap: `${gap}px`,
    width: '100%',
    padding: `${gap}px`,
    boxSizing: 'border-box',
    justifyContent: centerContent ? 'center' : 'start',
    ...style
  };

  // 渲染视频卡片
  const renderVideoCards = () => {
    return React.Children.map(children, (child, index) => {
      if (!child) return null;
      
      return (
        <div
          key={index}
          style={{
            width: '100%',
            height: `${cardHeight}px`,
            minWidth: `${minCardWidth}px`,
            boxSizing: 'border-box',
            transition: 'all 0.3s ease-in-out'
          }}
        >
          {child}
        </div>
      );
    });
  };

  return (
    <div
      className={className}
      style={gridStyle}
    >
      {renderVideoCards()}
    </div>
  );
}
