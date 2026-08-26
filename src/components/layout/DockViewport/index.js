import React, { useMemo } from 'react';

import { normalizePosition, getDockAnchorStyle, getPositionAlignStyle, DOCK_POSITIONS } from './positions';

/**
 * 停靠视窗容器组件
 *
 * present 组件（子组件）可以按配置停靠在父容器的九个方位之一：
 * 左上角 / 顶部中央 / 右上角 / 左侧中央 / 正中央 / 右侧中央 / 左下角 / 底部中央 / 右下角
 *
 * 同 MultiViewport 一样采用"配置驱动"的方式：dockConfig.docks（或 docks 属性）
 * 中的第 i 项描述第 i 个子组件的停靠方位。
 *
 * @param {Object} [dockConfig] 停靠布局配置对象（也支持直接传数组作为 docks 的简写）
 * @param {(string|Object)[]} [dockConfig.docks] 停靠配置数组，与 children 一一对应
 *   - 字符串简写：'top-left'、'右下角'、'nw' 等方位别名
 *   - 对象形式：
 *     {
 *       position: 'bottom-center', // 方位（必填）
 *       offset: '16px',            // 距父容器边缘的停靠边距（margin 为其别名）
 *       width: '80%',              // 停靠区域宽度（可选）
 *       height: '60px',            // 停靠区域高度（可选）
 *       borderRadius: '12px',      // 该停靠项子组件的圆角（可选，覆盖全局 cellBorderRadius）
 *       zIndex: 10,                // 层叠顺序（可选）
 *       style: {...}               // 附加到停靠包装器的行内样式（可选）
 *     }
 * @param {number|string} [dockConfig.offset] 全局默认停靠边距
 * @param {string} [dockConfig.gap] 同一方位多个子组件之间的间距
 * @param {string} [dockConfig.cellBorderRadius] 子组件包装器圆角，向下继承
 * @param {(string|Object)[]} [docks] 停靠配置数组（与 dockConfig.docks 等效，便于简写）
 * @param {string} [background='#000'] 背景颜色
 * @param {string} [padding] 内边距
 * @param {number|string} [width='100vw'] 容器宽度
 * @param {number|string} [height='100vh'] 容器高度
 * @param {string} [gap] 同一方位多个子组件之间的间距（可被 dockConfig 覆盖）
 * @param {string} [cellBorderRadius] 子组件包装器圆角（可被 dockConfig 覆盖）
 * @param {number|string} [offset] 全局默认停靠边距（可被 dockConfig 覆盖）
 *
 * @example
 * // 基本用法：三个子组件分别停靠在左上角、顶部中央、右下角
 * <DockViewport
 *   dockConfig={{
 *     docks: ['top-left', 'top-center', 'bottom-right'],
 *     offset: '24px',
 *     gap: '12px',
 *     cellBorderRadius: '12px'
 *   }}
 * >
 *   <LogoPanel />
 *   <TitleBar />
 *   <StatusBar />
 * </DockViewport>
 *
 * @example
 * // 对象形式：精细控制每个停靠项
 * <DockViewport
 *   dockConfig={[{
 *     position: 'bottom-center',   // 停靠在底部中央
 *     width: '80%',
 *     height: '64px',
 *     offset: '16px',
 *     zIndex: 10
 *   }, {
 *     position: '右上角',
 *     borderRadius: '8px'
 *   }]}
 * >
 *   <Toolbar />
 *   <UserAvatar />
 * </DockViewport>
 */
export default function DockViewport({
  children,
  dockConfig,
  docks,
  background = '#000',
  padding,
  width,
  height,
  gap,
  cellBorderRadius,
  offset
}) {
  // --- 解析停靠配置：dockConfig 可为对象或数组，docks 为等效简写 ---
  const configEntries = Array.isArray(dockConfig)
    ? dockConfig
    : (dockConfig && dockConfig.docks) || docks || [];

  const configObject = (!Array.isArray(dockConfig) && dockConfig) || {};

  // 配置优先级：单项停靠配置 > dockConfig 全局默认 > 组件属性 > 内置默认值
  const globalOffset = configObject.offset !== undefined ? configObject.offset : (offset !== undefined ? offset : 0);
  const globalGap = configObject.gap !== undefined ? configObject.gap : gap;
  const globalBorderRadius = configObject.cellBorderRadius !== undefined ? configObject.cellBorderRadius : cellBorderRadius;

  /**
   * 将停靠配置数组与 children 按顺序配对，并按标准方位分组。
   * 未在 docks 中声明的多余子组件默认停靠在正中央（center）。
   */
  const dockGroups = useMemo(() => {
    const childArray = React.Children.toArray(children);
    const groups = new Map(); // position -> { position, children: [], config: {} }

    const mergeGroup = (position, entryConfig) => {
      if (!groups.has(position)) {
        groups.set(position, { position, children: [], config: {} });
      }
      const group = groups.get(position);
      // 同一方位多次配置时，包装器样式按配置顺序合并（显式属性优先生效）
      group.config = { ...group.config, ...entryConfig };
      return group;
    };

    childArray.forEach((child, index) => {
      const entry = configEntries[index];
      const rawConfig = typeof entry === 'string'
        ? { position: entry }
        : (entry && typeof entry === 'object' ? entry : {});

      const position = normalizePosition(rawConfig.position);
      if (!position) {
        if (rawConfig.position) {
          console.error('DockViewport: unknown dock position:', rawConfig.position, '-> fallback to center');
        }
        // 未指定方位（或无法识别）时，默认停靠在正中央
        mergeGroup('center', {}).children.push(child);
        return;
      }

      // 提取单项配置中的包装器属性
      const entryConfig = {};
      if (rawConfig.offset !== undefined) entryConfig.offset = rawConfig.offset;
      if (rawConfig.margin !== undefined && rawConfig.offset === undefined) entryConfig.offset = rawConfig.margin;
      if (rawConfig.width !== undefined) entryConfig.width = rawConfig.width;
      if (rawConfig.height !== undefined) entryConfig.height = rawConfig.height;
      if (rawConfig.borderRadius !== undefined) entryConfig.borderRadius = rawConfig.borderRadius;
      if (rawConfig.zIndex !== undefined) entryConfig.zIndex = rawConfig.zIndex;
      if (rawConfig.style !== undefined) entryConfig.style = rawConfig.style;

      mergeGroup(position, entryConfig).children.push(child);
    });

    return Array.from(groups.values());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, JSON.stringify(configEntries), JSON.stringify(configObject)]);

  return (
    <div style={{
      position: 'relative',
      width: width || '100vw',
      height: height || '100vh',
      background: `${background}`,
      padding: padding || 0,
      overflow: 'hidden'
    }}>
      {dockGroups.map(group => {
        const { position, children: groupChildren, config } = group;
        const effectiveOffset = config.offset !== undefined ? config.offset : globalOffset;
        const childBorderRadius = config.borderRadius !== undefined ? config.borderRadius : globalBorderRadius;

        return (
          // 停靠区域包装器：绝对定位锚定在对应方位
          <div
            key={position}
            style={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              gap: globalGap || 0,
              maxWidth: '100%',
              maxHeight: '100%',
              ...getPositionAlignStyle(position),
              ...getDockAnchorStyle(position, effectiveOffset),
              ...(config.width !== undefined ? { width: config.width } : {}),
              ...(config.height !== undefined ? { height: config.height } : {}),
              ...(config.zIndex !== undefined ? { zIndex: config.zIndex } : {}),
              ...(config.style || {})
            }}
          >
            {groupChildren.map((child, index) => (
              // 子组件包装器：负责圆角与内容裁剪（与 MultiViewport 单元格包装器保持一致）
              <div
                key={`${position}-item-${index}`}
                style={{
                  borderRadius: childBorderRadius || 0,
                  overflow: 'hidden'
                }}
              >
                {child}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export { DOCK_POSITIONS, normalizePosition };
