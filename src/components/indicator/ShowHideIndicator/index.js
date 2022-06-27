import React from 'react';

/**
 * @param {hide} hide 隐藏
 * 
 */
  
export default function Index(props) {

  const { children, hide, ...rest } = props;

  const display = hide ? 'none' : null
  const stylebase = {
    display: `${display}`,
  }

  return (

    <div style={stylebase}>
       {
       React.Children.map(children, child => {
        return React.cloneElement(child, {
        ...rest
        })
    })
      }
    </div>
  )
}
