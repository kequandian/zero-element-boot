import React from 'react';
export default function Index(props) {
  const {
    children,
    color = '#8e72ff',
    minWidth,
    solid,
    outline,
    none,
    plain,
    dash
  } = props;
  const bg = solid ? `${color}` : outline && plain ? '#ffffff' : outline && none || outline && dash || outline ? `${color}26` : null;
  const border = dash && outline ? `2px ${color} dashed` : outline && none ? null : outline && plain || outline ? `2px ${color} solid` : null;
  const colors = solid ? '#ffffff' : `${color}`;
  const baseStyle = {
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '150px',
    backgroundColor: `${bg}`,
    color: `${colors}`,
    border: `${border}`,
    minWidth: `${minWidth}`
  };
  return /*#__PURE__*/React.createElement("div", {
    style: baseStyle
  }, React.Children.map(children, child => child));
}