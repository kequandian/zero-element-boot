import React, { useState, useEffect } from 'react';
import PreviewAutoLayout from '../PreviewAutoLayout';
import Viewport from '../cart/Viewport';
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
      // <PreviewAutoLayout tag='BOOT' layout={layoutData} />
      <Viewport 
          horizontalWeights={[2, 2, 1]}
          verticalWeights={[3, 1]}>
          <DefaultPlaceholder>Left</DefaultPlaceholder>
          <DefaultPlaceholder>Top</DefaultPlaceholder>
          <DefaultPlaceholder>Right</DefaultPlaceholder>
          <DefaultPlaceholder/>
          <DefaultPlaceholder/>
          <DefaultPlaceholder/>
        </Viewport>
  )

}
