import React from 'react';

/**
 */

export default function Index(props) {

  const { children ,fill='#0a7cba', color='#ffffff'} = props;

  const styles = {
    position: 'relative',
    padding: '0',
    borderRadius: '10px',
    borderWidth: '3px',
    borderStyle: 'solid',
    width:'500px',
    height:'500px',
    backgroundColor: 'transparent',
  }


  return (
    <div style={styles}>
        <svg  width='100%' height='100%'>
            <rect width="50%" height="50%" x="15%" y="25%" fill={fill}></rect>
            {/* <circle cx="40%" cy="50%" r="28%" stroke="transparent" stroke-width="3" fill={fill}/> */}
            <line x1="39.7%" y1="33.5%" x2="57%" y2="43%" stroke="#7cbf16" strokeWidth='2.27%' />
            <line x1="40.8%" y1="33.5%" x2="22.3%" y2="43%" stroke="#7cbf16" strokeWidth='2.27%' />
            <line x1="26%" y1="41.4%" x2="26%" y2="64.38%" stroke="#7cbf16 "strokeWidth='3.67%' />
            <line x1="24.2%" y1="63.33%" x2="55.3%" y2="63.33%" stroke="#7cbf16" strokeWidth='2.27%' />
            <line x1="34.2%" y1="45.38%" x2="50%" y2="45.38%" stroke={color} strokeWidth='2.27%' />
            <line x1="35.8%" y1="44.33%" x2="35.8%" y2="58.67%" stroke={color} strokeWidth='3.30%' />
            <line x1="40.67%" y1="50%" x2="49.8%" y2="50%" stroke={color} strokeWidth='2.27%' />
            <line x1="48.15%" y1="50%" x2="48.15%" y2="58.67%" stroke={color} strokeWidth='3.27%' />
        </svg>
    </div>
  )
}
