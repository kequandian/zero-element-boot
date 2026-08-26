/**
 * DockViewport 停靠位置定义与工具
 *
 * 九宫格方位（canonical position）:
 *
 *   top-left      top-center      top-right
 *   middle-left   center          middle-right
 *   bottom-left   bottom-center   bottom-right
 *
 * 支持英文别名（kebab-case / camelCase / 连写）与中文别名，以及罗盘缩写：
 *   nw, n, ne, w, c, e, sw, s, se
 */

// 九个标准停靠方位
export const DOCK_POSITIONS = [
  'top-left', 'top-center', 'top-right',
  'middle-left', 'center', 'middle-right',
  'bottom-left', 'bottom-center', 'bottom-right',
];

// 别名 -> 标准方位（key 一律为小写、去除空格/中划线/下划线后的形式）
export const POSITION_ALIASES = {
  // 左上角
  'topleft': 'top-left', 'lefttop': 'top-left', 'upperleft': 'top-left',
  'topleftcorner': 'top-left', '左上角': 'top-left', '左上': 'top-left',
  'nw': 'top-left',
  // 顶部中央
  'topcenter': 'top-center', 'topmiddle': 'top-center', 'top': 'top-center',
  '上': 'top-center', '顶部': 'top-center', '顶部中央': 'top-center',
  '上中': 'top-center', 'n': 'top-center',
  // 右上角
  'topright': 'top-right', 'righttop': 'top-right', 'upperright': 'top-right',
  'toprightcorner': 'top-right', '右上角': 'top-right', '右上': 'top-right',
  'ne': 'top-right',
  // 左侧中央
  'middleleft': 'middle-left', 'leftcenter': 'middle-left', 'leftmiddle': 'middle-left',
  'left': 'middle-left', '左': 'middle-left', '左侧中央': 'middle-left',
  '左中': 'middle-left', 'w': 'middle-left',
  // 正中央
  'centre': 'center', 'middle': 'center', 'middlecenter': 'center',
  'centercenter': 'center', '中央': 'center', '中心': 'center',
  '居中': 'center', '正中': 'center', 'c': 'center',
  // 右侧中央
  'middleright': 'middle-right', 'rightcenter': 'middle-right', 'rightmiddle': 'middle-right',
  'right': 'middle-right', '右': 'middle-right', '右侧中央': 'middle-right',
  '右中': 'middle-right', 'e': 'middle-right',
  // 左下角
  'bottomleft': 'bottom-left', 'leftbottom': 'bottom-left', 'lowerleft': 'bottom-left',
  'bottomleftcorner': 'bottom-left', '左下角': 'bottom-left', '左下': 'bottom-left',
  'sw': 'bottom-left',
  // 底部中央
  'bottomcenter': 'bottom-center', 'bottommiddle': 'bottom-center', 'bottom': 'bottom-center',
  '下': 'bottom-center', '底部': 'bottom-center', '底部中央': 'bottom-center',
  '下中': 'bottom-center', 's': 'bottom-center',
  // 右下角
  'bottomright': 'bottom-right', 'rightbottom': 'bottom-right', 'lowerright': 'bottom-right',
  'bottomrightcorner': 'bottom-right', '右下角': 'bottom-right', '右下': 'bottom-right',
  'se': 'bottom-right',
};

/**
 * 将任意形式的方位描述归一化为标准方位
 * 支持传入 'Top Left' / 'topLeft' / 'top-left' / '左上角' / 'nw' 等
 * @param {*} position 方位描述
 * @returns {string|null} 标准方位；无法识别时返回 null
 */
export function normalizePosition(position) {
  if (!position || typeof position !== 'string') return null;
  const key = position.trim().toLowerCase().replace(/[\s_-]+/g, '');
  if (DOCK_POSITIONS.includes(key)) return key;
  const mapped = POSITION_ALIASES[key];
  return mapped || null;
}

/**
 * 获取某个标准方位的绝对定位锚点样式
 * @param {string} position 标准方位
 * @param {number|string} offset 停靠边距（距父容器边缘的距离）
 * @returns {Object} React style 片段
 */
export function getDockAnchorStyle(position, offset = 0) {
  switch (position) {
    case 'top-left':
      return { top: offset, left: offset };
    case 'top-center':
      return { top: offset, left: '50%', transform: 'translateX(-50%)' };
    case 'top-right':
      return { top: offset, right: offset };
    case 'middle-left':
      return { top: '50%', left: offset, transform: 'translateY(-50%)' };
    case 'center':
      return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
    case 'middle-right':
      return { top: '50%', right: offset, transform: 'translateY(-50%)' };
    case 'bottom-left':
      return { bottom: offset, left: offset };
    case 'bottom-center':
      return { bottom: offset, left: '50%', transform: 'translateX(-50%)' };
    case 'bottom-right':
      return { bottom: offset, right: offset };
    default:
      return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
  }
}

/**
 * 获取某个标准方位在（指定了 width/height 的）停靠区域内
 * 子组件的对齐方式（flex 容器的 alignItems / justifyContent）
 * @param {string} position 标准方位
 * @returns {Object} React style 片段
 */
export function getPositionAlignStyle(position) {
  switch (position) {
    case 'top-left':
      return { alignItems: 'flex-start', justifyContent: 'flex-start' };
    case 'top-center':
      return { alignItems: 'center', justifyContent: 'flex-start' };
    case 'top-right':
      return { alignItems: 'flex-end', justifyContent: 'flex-start' };
    case 'middle-left':
      return { alignItems: 'flex-start', justifyContent: 'center' };
    case 'center':
      return { alignItems: 'center', justifyContent: 'center' };
    case 'middle-right':
      return { alignItems: 'flex-end', justifyContent: 'center' };
    case 'bottom-left':
      return { alignItems: 'flex-start', justifyContent: 'flex-end' };
    case 'bottom-center':
      return { alignItems: 'center', justifyContent: 'flex-end' };
    case 'bottom-right':
      return { alignItems: 'flex-end', justifyContent: 'flex-end' };
    default:
      return { alignItems: 'center', justifyContent: 'center' };
  }
}
