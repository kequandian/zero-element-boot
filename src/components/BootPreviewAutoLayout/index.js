import React, { useState, useEffect } from 'react';
import PreviewAutoLayout from '../PreviewAutoLayout';
import Viewport from '../layout/GridViewport';
import DefaultPlaceholder from '../presenter/placeholder/DefaultPlaceholder';

export default function BootPreviewAutoLayout (props) {
  const layoutApi = '/api/auto/boot/preview'

  return (
    <PreviewAutoLayout tag='BOOT' layoutApi={layoutApi}  />
  )
}
