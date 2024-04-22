import React, { useState, useEffect } from 'react';
import { HStack, Box } from '@chakra-ui/react';
import { bindingConvert } from "../../gateway/Binding";
import doFilter from "../../gateway/doFilter.mjs";
const useLayout = require("../../hooks/useLayout");
import { LS } from 'zero-element/lib/utils/storage';

/**
 * 
 * @param   Children        两个子组件
 * @param   currentside   接收为 AutoLayout   layout参数
 * @param   anotherside  接收别一个 AutoLayout  layout参数
 * @param   converter      item数据转换器，相当于 binding
 * 
 */
export default function DataFlowContainer(props) {
  const {
    children,
    currentside,
    anotherside,
    converter,
    ...rest
  } = props;
  const [onRefresh, setOnRefresh] = useState(false);
  const [configData, setConfigData] = useState({});
  const [layoutRef, {
    getClassName
  }] = useLayout();
  useEffect(() => {
    if (onRefresh) {
      setOnRefresh(false);
    }
  }, [onRefresh]);
  const firstChildItemClick = item => {
    // console.log('first child item click = ', item)
    setConfigData('');
    if (item.isSelected) {
      setOnRefresh(true);
      if (converter && JSON.stringify(converter) != '{}') {
        const bindingData = bindingConvert(converter, item);
        const filterData = doFilter(converter, bindingData);
        setConfigData(filterData);
      } else {
        setConfigData(item);
      }
    }
  };
  const firstChildActionCompleted = data => {
    console.log('first child item action click = ', data);
    setConfigData('');
    setTimeout(() => {
      LS.set('commonData', {
        layoutName: data.moduleName
      });
      setConfigData({
        layoutName: data.moduleName
      });
      setOnRefresh(true);
    }, 100);
  };
  const secondChildItemClick = item => {
    console.log('second child item click = ', item);
  };

  // console.log('CoupleSideContainer configData= ', configData, rest)

  function renderChildren(children) {
    return React.Children.map(children, (child, childIndex) => {
      if ( /*#__PURE__*/React.isValidElement(child)) {
        if (childIndex === 0) {
          return /*#__PURE__*/React.cloneElement(child, {
            ...rest,
            onItemClick: firstChildItemClick,
            onActionCompleted: firstChildActionCompleted
          });
        } else {
          if (childIndex === 1 && !onRefresh) {
            return /*#__PURE__*/React.cloneElement(child, {
              ...rest,
              ...configData,
              onItemClick: secondChildItemClick
            });
          } else {
            return /*#__PURE__*/React.createElement("div", null);
          }
        }
      } else {
        return child;
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    },
    className: getClassName()
  }, React.Children.toArray(children).map((child, childIndex) => {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        ref: layoutRef,
        children: renderChildren(child.props.children),
        ...rest
      });
    }
  }));
}