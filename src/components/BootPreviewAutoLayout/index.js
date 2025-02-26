import React, { useState, useEffect } from 'react';
import PreviewAutoLayout from '../PreviewAutoLayout';
import AutoLayout from '../AutoLayout';
import PageCenter from '../cart/PageCenter'
import { VStack } from '@chakra-ui/react';
import { Container } from 'zero-element-boot';

export default function BootPreviewAutoLayout (props) {
  const layoutApi = '/api/auto/boot/preview'
  const layoutData = {
    "presenter": {
        "presenter": {
            "xname": "Avatar",
            "props": {
                "url":"http://local.cdnline.io/master.jpg"
            }
        }
    },
    "cart": "PageCenter"
    }

  return (
    // <PreviewAutoLayout tag='BOOT' layoutApi={layoutApi} layoutData={layoutData} />
      <AutoLayout tag='BOOT' layout={layoutData} />
  )
}

