import React from 'react';
import { List, Row } from 'antd';
export default function SimpleList(props) {
  const {
    children,
    items,
    layout
  } = props;
  const Child = React.Children.only(children);
  return /*#__PURE__*/React.createElement(Row, {
    justify: layout.props.justify
  }, /*#__PURE__*/React.createElement(List, {
    grid: {
      column: layout.props.column ? layout.props.column : 0
    },
    dataSource: items,
    renderItem: item => /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, { ...item
    }) : /*#__PURE__*/React.createElement(Child, item)
  }));
}