function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, useState, useEffect } from 'react';
import { useSize } from 'ahooks';
import { VStack, HStack, Button } from '@chakra-ui/react';
import useLayout from "../../hooks/useLayout";
import ContainerContext from "../../AutoX/ContainerContext";
import checkBoxTool from "../../utils/checkBoxTool";
export default function SelectCheckboxList(props) {
  const {
    children,
    items,
    layout,
    cart,
    onItemClick,
    onOkClick,
    containerHeight = '',
    isScroll = false,
    ...rest
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
    // const selectCheckedList = [];
    for (let i = 0; i < checkedList.length; i++) {
      const item = checkedList[i];
      if (item.id == id) {
        item.checked = !checked;
        if (item.checked) {
          checkedItems.push(item);
          setCheckedItems(checkedItems);
          // selectCheckedList.push(item)
        }
        // else{
        //   selectCheckedList = selectCheckedList.filter(item => item.id !== id)
        //   // setCheckedItems(newCheckedItems);
        // }
      }
      newCheckedList.push(item);
    }
    setCheckedList(newCheckedList);
    // if(onItemClick && selectCheckedList && selectCheckedList.length > 0){
    // onItemClick(newCheckedList.filter(item => item.checked == true))
    // }
  }

  //发送数据
  const sendData = () => {
    if (checkedItems && checkedItems.length > 0) {
      const newData = [];
      checkedItems.forEach(item => {
        checkedList.forEach(item2 => {
          if (item2.checked && item2.id === item.id) {
            newData.push(item2);
          }
        });
      });
      setCheckedItems(newData);
      onOkClick(newData);
    } else {
      console.log('当前选择为0');
    }
  };
  return /*#__PURE__*/React.createElement(VStack, null, onOkClick ? /*#__PURE__*/React.createElement(HStack, {
    w: '100%',
    justifyContent: 'space-between'
  }, /*#__PURE__*/React.createElement("div", null, " "), /*#__PURE__*/React.createElement("div", null, " "), /*#__PURE__*/React.createElement(Button, {
    colorScheme: "teal",
    size: "sm",
    onClick: () => sendData()
  }, "\u786E\u8BA4")) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("div", {
    id: "multi-select-list",
    style: {
      width: '100%',
      overflowX: 'hidden',
      overflowY: 'scroll',
      height: `${containerHeight && containerHeight - 32 || isScroll && window.innerHeight}px`
    },
    className: getClassName(),
    ref: containerRef
  }, /*#__PURE__*/React.createElement(ContainerContext.Provider, {
    value: size
  }, checkedList && checkedList.length && checkedList.map((item, i) => {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onSelected(item)
    }, /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, {
      ...rest,
      ...item,
      // ...layout,
      // layout:layout,
      // cart:cart,
      key: i,
      ref: layoutRef,
      // onItemClick: onItemClick,
      // isLastItem: items.length == (i+1) ? true : false,
      // checkedItems: checkedItems,
      isSelected: item.checked
    }) : /*#__PURE__*/React.createElement(Child, _extends({
      key: i
    }, item, layout, {
      layout: layout,
      ref: layoutRef,
      isSelected: item.checked
    })));
  }))));
}