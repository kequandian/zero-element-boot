import React from 'react'; // import checkOff from '@/assets/check_off.svg';

import checkOn from "../../../assets/check_on.svg";
/**
 */

export default function Index(props) {
  const {
    children,
    defaultSelectedStyles = {}
  } = props;
  const styles = {
    position: 'relative',
    margin: '1px 6px 1px 6px',
    padding: '5px',
    borderRadius: '8px',
    borderWidth: '2px',
    borderStyle: 'solid',
    backgroundColor: '#f1f1f1',
    borderColor: 'transparent',
    boxShadow: '0 0px 6px rgba(255, 255, 255, 1)',
    ...defaultSelectedStyles
  };
  return /*#__PURE__*/React.createElement("div", {
    style: styles
  }, /*#__PURE__*/React.createElement("div", {
    className: 'right_icon_on'
  }, /*#__PURE__*/React.createElement("img", {
    src: checkOn
  })), React.Children.map(children, child => child));
}