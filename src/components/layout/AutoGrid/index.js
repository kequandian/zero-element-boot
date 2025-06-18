/**
 * @description 响应式网格布局 alias YoutubeGrid
 * 用 20 行 css 实现一个完全响应的 grid 流体布局
 * https://mp.weixin.qq.com/s/kLBMzWfo6lCa7WlixqljXw
 * @author 
 * @date 2025-06-18
 */
import React, { useImperativeHandle, forwardRef } from 'react';

require('./index.less');

/**
 * @param {设置行间距} gridRowGapSize
 * @param {设置列间距} gridColumnGapSize
 * @param {子项样式} itemStyle
 */
export default forwardRef(function Gridbox(props, ref) {

  const { children, gridRowGapSize = '10px', gridColumnGapSize = '10px', itemStyle={} } = props;

  useImperativeHandle(ref, () => ({
    getClassName: () => {
      return `l-AutoGrid`;
    }
  }));

  return (
    <>
      {
        React.Children.map(children, (child, index) => {
          return (
            <>
              <div className={`l-AutoGridItem`} style={{ ...itemStyle }}>
                {child}
              </div>
            </>
          )
        })
      }
    </>
  )
})
