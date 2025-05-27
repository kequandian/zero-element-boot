import React, { useState, useEffect } from 'react';
import PreviewAutoLayout from '../PreviewAutoLayout';
import Viewport from '../cart/MultiViewport';
import DefaultPlaceholder from '../presenter/placeholder/DefaultPlaceholder';

export default function BootPreviewAutoLayout (props) {
  const layoutApi = '/api/auto/boot/preview'
  const layoutData = 
    {
      "xkey": "b87efc94-f1c4-4610-a051-cea43a874097",
      "presenter": {
        "presenter": {
          "xname": "Avatar",
          "props": {
            "url": "http://local.cdnline.io/master.jpg"
          }
        },
        // "cart": {"xname": "Outline", "props":{"shape":"box"}}
        "xname": "Gridbox",
        "props":{"columns": 5}
      },
      "cart": "Viewport"
    }

  return (
    // <PreviewAutoLayout tag='BOOT' layoutApi={layoutApi}  />
    <PreviewAutoLayout tag='BOOT' layout={layoutData} />
    
  )
}
