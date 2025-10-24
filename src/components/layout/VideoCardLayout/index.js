import React, { useState, useEffect, useCallback, useRef } from 'react';

/**
 * VideoCardLayout - 视频卡片布局组件
 * 基于 Flex Wrap 的智能响应式布局，类似 YouTube 视频卡片
 * 
 * @param {Object} props
 * @param {React.ReactNode[]} props.children 卡片组件数组
 * @param {number} [props.maxColumns=5] 最大列数
 * @param {number} [props.minColumns=1] 最小列数
 * @param {number} [props.maxCardWidth=400] 卡片最大宽度（px）
 * @param {number} [props.minCardWidth=200] 卡片最小宽度（px）
 * @param {string} [props.aspectRatio="16:9"] 卡片高宽比
 * @param {number} [props.gap=16] 卡片间距（px）
 * @param {string} [props.className] 自定义样式类名
 * @param {Object} [props.style] 自定义样式对象
 * @returns {JSX.Element}
 */
export default function VideoCardLayout({
  children,
  maxColumns = 5,
  minColumns = 1,
  maxCardWidth = 400,
  minCardWidth = 200,
  aspectRatio = "16:9",
  gap = 16,
  className,
  style
}) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [layoutConfig, setLayoutConfig] = useState({
    columns: 1,
    cardWidth: 200,
    cardHeight: 112.5
  });

  // 解析高宽比
  const parseAspectRatio = useCallback((ratio) => {
    const [width, height] = ratio.split(':').map(Number);
    return width / height;
  }, []);

  // 计算最佳布局配置
  const calculateOptimalLayout = useCallback(() => {
    console.log('calculateOptimalLayout called, dimensions:', dimensions);
    if (!dimensions.width) {
      console.log('No dimensions.width, returning default');
      return {
        columns: minColumns,
        cardWidth: minCardWidth,
        cardHeight: minCardWidth / parseAspectRatio(aspectRatio)
      };
    }

    const viewportWidth = dimensions.width;
    const aspectRatioValue = parseAspectRatio(aspectRatio);
    console.log('viewportWidth:', viewportWidth, 'aspectRatioValue:', aspectRatioValue);

    // 核心算法：动态计算最佳列数
    let optimalColumns = minColumns;
    
    // 从最大列数开始，逐步减少列数，直到找到最佳配置
    for (let cols = maxColumns; cols >= minColumns; cols--) {
      // 计算当前列数下的卡片宽度
      const totalGapWidth = gap * (cols - 1);
      const availableWidth = viewportWidth - totalGapWidth;
      const cardWidth = availableWidth / cols;
      
      console.log(`cols: ${cols}, totalGapWidth: ${totalGapWidth}, availableWidth: ${availableWidth}, cardWidth: ${cardWidth}`);
      
      // 检查是否满足最小宽度约束
      if (cardWidth >= minCardWidth) {
        // 检查是否超过最大宽度约束
        if (cardWidth <= maxCardWidth) {
          optimalColumns = cols;
          console.log(`optimalColumns updated to: ${cols}`);
          break; // 找到最佳配置，退出循环
        } else {
          // 如果超过最大宽度，继续减少列数
          console.log(`cardWidth ${cardWidth} > maxCardWidth ${maxCardWidth}, trying fewer columns`);
          continue;
        }
      } else {
        // 如果小于最小宽度，继续减少列数
        console.log(`cardWidth ${cardWidth} < minCardWidth ${minCardWidth}, trying fewer columns`);
        continue;
      }
    }
    
    // 计算最终卡片尺寸
    const totalGapWidth = gap * (optimalColumns - 1);
    const availableWidth = viewportWidth - totalGapWidth;
    const finalCardWidth = availableWidth / optimalColumns;
    const finalCardHeight = finalCardWidth / aspectRatioValue;
    
    const result = {
      columns: optimalColumns,
      cardWidth: finalCardWidth,
      cardHeight: finalCardHeight
    };
    
    console.log('Final layout config:', result);
    return result;
  }, [dimensions.width, maxCardWidth, minCardWidth, maxColumns, minColumns, gap, aspectRatio, parseAspectRatio]);

  // 监听容器尺寸变化
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        console.log('Container rect:', rect);
        setDimensions({
          width: rect.width,
          height: rect.height
        });
      } else {
        console.log('containerRef.current is null');
      }
    };

    // 延迟初始设置，确保DOM已渲染
    const timer = setTimeout(() => {
      updateDimensions();
    }, 100);

    // 监听窗口大小变化
    window.addEventListener('resize', updateDimensions);
    
    // 使用 ResizeObserver 监听容器尺寸变化
    let resizeObserver;
    if (containerRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateDimensions);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  // 更新布局配置
  useEffect(() => {
    const newConfig = calculateOptimalLayout();
    if (newConfig) {
      setLayoutConfig(newConfig);
    }
  }, [calculateOptimalLayout]);

  // 渲染卡片
  const renderCards = () => {
    console.log('renderCards called, children count:', React.Children.count(children));
    console.log('layoutConfig:', layoutConfig);
    
    return React.Children.map(children, (child, index) => {
      if (!child) {
        console.log(`Child ${index} is null`);
        return null;
      }
      
      console.log(`Rendering child ${index}`);
      return (
        <div
          key={index}
          style={{
            width: `${layoutConfig.cardWidth}px`,
            height: `${layoutConfig.cardHeight}px`,
            flexShrink: 0,
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
      ref={containerRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: `${gap}px`,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        ...style
      }}
    >
      {renderCards()}
    </div>
  );
}
