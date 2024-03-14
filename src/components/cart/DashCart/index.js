import React from 'react';
import Cart from '../Cart';


/**
 * 
 */
export default function DashCart(props) {

  const { children }=props;

  const styles = {
    width: "100%",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return React.Children.map(children, child => {
    return <Cart  style={styles} >
      {child}
    </Cart>
  })
}