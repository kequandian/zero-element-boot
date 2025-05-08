import React, { useState, useEffect } from 'react';
import PreviewAutoLayout from '../PreviewAutoLayout';
import AutoLayout from '../AutoLayout';
import PageCenter from '../cart/PageCenter'
import { VStack } from '@chakra-ui/react';
import { Container } from 'zero-element-boot';

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
        "cart": "SquareBox"
      },
      "xname": "PageCenter"
    }

  return (
    // <PreviewAutoLayout tag='BOOT' layoutApi={layoutApi}  />
      <PreviewAutoLayout tag='BOOT' layout={layoutData} />
  )
}
