import React from 'react';

export default function () {
  return React.Children.map(children, child => {
    return <div>
      {child}
    </div>
  })
}
