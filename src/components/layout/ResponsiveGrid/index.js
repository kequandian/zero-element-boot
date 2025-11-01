import React, { useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
require('./index.less');

/**
 * ResponsiveGrid - 响应式网格布局组件（原 YouTubeGridLayout）
 *
 * 适配 AutoLayout/Container：通过 forwardRef 暴露 getClassName，
 * 外层容器可获取布局类名；内部再使用一个实际的 grid 容器来承载动态样式。
 *
 * @param {number} [minCardWidth=250] - 卡片最小宽度（px）
 * @param {number} [gap=16] - 卡片间距（px）
 * @param {string} [aspectRatio="16:9"] - 卡片高宽比
 * @param {string} [className] - 自定义样式类名（将附加在内部 grid 容器上）
 * @param {Object} [style] - 自定义样式对象（将附加在内部 grid 容器上）
 * @param {boolean} [centerContent=false] - 是否居中显示内容
 */
const ResponsiveGrid = forwardRef(function ResponsiveGrid(props, ref) {
  const {
    children,
    minCardWidth = 250,
    gap = 16,
    aspectRatio = '16:9',
    centerContent = false,
    ...rest
  } = props;

  // 供 Container 读取并设置到外层包裹节点（容器负责布局，组件仅提供标识与变量）
  useImperativeHandle(ref, () => ({
    getClassName: () => 'l-ResponsiveGrid',
    // 返回用于容器应用的 CSS 变量，驱动响应式列宽与间距
    getHoverStyles: () => ({
      '--minCardWidth': `${minCardWidth}px`,
      '--gap': `${gap}px`,
      '--justifyContent': centerContent ? 'center' : 'start',
      // 若未来需要，用于比值：例如 16/9 或 9/16
      '--aspectRatio': aspectRatio,
    })
  }));

  // 不在此处创建内部网格容器，避免与 ManageList 的容器重复；
  // 直接渲染子内容，由容器通过类名 + CSS 变量控制布局。
  return (
    <>
      {children}
    </>
  );
});

// PropTypes 类型检查
ResponsiveGrid.propTypes = {
  /** 子元素 */
  children: PropTypes.node,
  
  /** 卡片最小宽度（px） */
  minCardWidth: PropTypes.number,
  
  /** 网格间距（px） */
  gap: PropTypes.number,
  
  /** 卡片高宽比（如 "16/9", "1/1", "4/3"） */
  aspectRatio: PropTypes.string,
  
  /** 是否自动高度（适用于内容高度不固定的卡片） */
  autoHeight: PropTypes.bool,
  
  /** 图片填充方式（cover | contain | fill | none | scale-down） */
  objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  
  /** 容器自定义类名 */
  className: PropTypes.string,
  
  /** 容器自定义样式 */
  containerStyle: PropTypes.object,
  
  /** 每个卡片的自定义样式 */
  itemStyle: PropTypes.object,
  
  /** 加载状态 */
  loading: PropTypes.bool,
  
  /** 骨架屏数量 */
  skeletonCount: PropTypes.number,
  
  /** 自定义骨架屏组件 */
  SkeletonComponent: PropTypes.elementType,
  
  /** 响应式配置 */
  responsive: PropTypes.shape({
    mobile: PropTypes.shape({
      minCardWidth: PropTypes.number,
      gap: PropTypes.number
    }),
    tablet: PropTypes.shape({
      minCardWidth: PropTypes.number,
      gap: PropTypes.number
    }),
    desktop: PropTypes.shape({
      minCardWidth: PropTypes.number,
      gap: PropTypes.number
    })
  }),
  
  /** 是否居中最后一行（当项目数量不能整除列数时） */
  centerLastRow: PropTypes.bool
};

export default ResponsiveGrid;
