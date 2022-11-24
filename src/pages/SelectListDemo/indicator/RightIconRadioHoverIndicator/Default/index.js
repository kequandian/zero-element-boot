import React from 'react';

/**
 */

export default function Index(props, ref) {

  const { children, onHover, isSelected, getHoverStyles, getSelectStyles } = props;

  const styles = {
    position: 'relative',
    margin: '1px 6px 1px 6px',
    padding: '5px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    boxShadow: '0 0px 6px rgba(255, 255, 255, 1)',
  }
  
  let changeStyle = styles;
  if(onHover){
    changeStyle = {
      ...styles,
      ...getHoverStyles(),
    }
  }
  if(isSelected){
    changeStyle = {
      ...styles,
      ...getSelectStyles()
    }
  }

  return React.Children.map(children, child => {

    return (
      <div style={changeStyle}>
        {child}
      </div>

    )
  })
}