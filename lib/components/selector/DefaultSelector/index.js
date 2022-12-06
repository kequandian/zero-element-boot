import React from 'react';
import OverlaySelector from "../../OverlaySelector";
import CircularCheckboxIndicator from "../../indicator/CircularCheckboxIndicator";
/**
 * @param {boolean} overlay  hover状态效果是否叠加, 默认为不叠加
 * @param {*} children  自定义子组件
 * @returns 
 */

export default function index(props) {
  const {
    children,
    overlay = false,
    ...rest
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(OverlaySelector, {
      selected: true,
      defaultIndicator: CircularCheckboxIndicator,
      selectedIndicator: CircularCheckboxIndicator,
      selectedIndicatorProps: {
        state: 'checked'
      },
      hoverIndicator: CircularCheckboxIndicator,
      hoverIndicatorProps: {
        state: 'outline'
      },
      overlay: overlay
    }, /*#__PURE__*/React.cloneElement(child, { ...rest
    }));
  });
}