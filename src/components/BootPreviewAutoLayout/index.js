import React, { useState, useEffect } from 'react';
import PreviewAutoLayout from '../PreviewAutoLayout';

export default function BootPreviewAutoLayout (props) {
  const layoutApi = '/api/auto/boot/preview'
  return (
    <PreviewAutoLayout layoutApi={layoutApi} />
  )
}

