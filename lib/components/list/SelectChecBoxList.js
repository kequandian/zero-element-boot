function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useState } from 'react';
import { useSize } from 'ahooks';
import useLayout from "../../hooks/useLayout";
import ContainerContext from "../AutoX/ContainerContext";
export default function SelectChecBoxList(props) {
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
  const [checkedList, setCheckedList] = useState(items);

  function onSelected(props) {
    const {
      checked,
      id
    } = props;
    checkedList.map(item => {
      if (item.id == id) {
        item.checked = !checked;
      }
    });
    setCheckedList(checkedList);
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
  }, checkedList.map((item, i) => /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, { ...item,
    ...layout,
    layout: layout,
    cart: cart,
    key: i,
    ref: layoutRef,
    onItemClick: onItemClick,
    isLastItem: items.length == i + 1 ? true : false,
    onSelected: onSelected
  }) : /*#__PURE__*/React.createElement(Child, _extends({
    key: i
  }, item, layout, {
    layout: layout,
    cart: cart,
    ref: layoutRef,
    onItemClick: onItemClick,
    onSelected: onSelected,
    item_index: i,
    curr_index: curr_index
  })))));
}