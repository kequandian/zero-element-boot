function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useState, useEffect } from 'react';
import { useSize } from 'ahooks';
import useLayout from "../hooks/useLayout";
import ContainerContext from "../AutoX/ContainerContext";
import checkBoxTool from "../utils/checkBoxTool";
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
  const [checkedList, setCheckedList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  useEffect(() => {
    setCheckedList(items);
  }, [items]);

  function onSelected(item) {
    const {
      checked,
      id
    } = item;
    const newCheckedList = [];

    for (let i = 0; i < checkedList.length; i++) {
      const item = checkedList[i];
      const orgCheckedItems = checkedItems;

      if (item.id == id) {
        item.checked = !checked;

        if (item.checked) {
          checkedItems.push(item);
          setCheckedItems(checkedItems);
        } else {
          const newCheckedItems = orgCheckedItems.filter(item => item.id !== id);
          setCheckedItems(newCheckedItems);
        }
      }

      newCheckedList.push(item);
    }

    setCheckedList(newCheckedList);
  } // console.log('checkedItems = ', checkedItems)


  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      position: 'relative'
    },
    className: getClassName(),
    ref: containerRef
  }, /*#__PURE__*/React.createElement(ContainerContext.Provider, {
    value: size
  }, checkedList.map((item, i) => {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onSelected(item)
    }, /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, { ...item,
      ...layout,
      layout: layout,
      cart: cart,
      key: i,
      ref: layoutRef,
      onItemClick: onItemClick,
      isLastItem: items.length == i + 1 ? true : false,
      checkedItems: checkedItems
    }) : /*#__PURE__*/React.createElement(Child, _extends({
      key: i
    }, item, layout, {
      layout: layout,
      cart: cart,
      ref: layoutRef,
      onItemClick: onItemClick,
      checkedItems: checkedItems
    })));
  })));
}