function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useState } from 'react';
import { useSize } from 'ahooks';
import useLayout from "../hooks/useLayout";
import ContainerContext from "../AutoX/ContainerContext";
export default function SelectedList(props) {
  const {
    children,
    items,
    layout,
    cart,
    onItemClick = () => {
      console.log('未设置SelectedList onItemClick点击事件');
    }
  } = props;
  const [layoutRef, {
    getClassName
  }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);
  const Child = React.Children.only(children);
  const [currIndex, setCurrIndex] = useState(0);

  function onSelected(index) {
    setCurrIndex(index);
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      position: 'relative'
    },
    className: getClassName(),
    ref: containerRef
  }, /*#__PURE__*/React.createElement(ContainerContext.Provider, {
    value: size
  }, items.map((item, i) => {
    const [onHover, setOnHover] = useState(false);

    const toggleHover = () => {
      const result = !onHover;
      setOnHover(result);
    };

    const fill = '#ffffff';
    const margin = '6px';
    const padding = '5px';
    const hoverColor = '#EAEAEA';
    const activeColor = hoverColor;
    let bgColor = `${fill}`;

    if (onHover) {
      bgColor = `${hoverColor}80`;
    } else {
      bgColor = `${fill}ff`;
    }

    if (i == currIndex) {
      bgColor = activeColor;
    }

    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onSelected(i),
      style: {
        position: 'relative',
        margin: `${margin}`,
        padding: `${padding}`,
        backgroundColor: `${bgColor}`
      },
      onMouseEnter: () => toggleHover(),
      onMouseLeave: () => toggleHover()
    }, /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, { ...item,
      ...layout,
      layout: layout,
      cart: cart,
      key: i,
      ref: layoutRef,
      onItemClick: onItemClick,
      isLastItem: items.length == i + 1 ? true : false,
      isSelected: i == currIndex ? true : false
    }) : /*#__PURE__*/React.createElement(Child, _extends({
      key: i
    }, item, layout, {
      layout: layout,
      cart: cart,
      ref: layoutRef,
      onItemClick: onItemClick,
      isSelected: i == currIndex ? true : false
    })));
  })));
}