import React, { useState, useEffect } from 'react';

import PreviewAutoLayout from './index'

export default function (props) {

  let api = '/api/crud/fieldModel/fieldModels'
  let layoutJsonApi = 'layoutJson'
  let layoutName = 'layoutJson'

  return (
      <PreviewAutoLayout {...props} api={api} layoutApi={layoutJsonApi} layoutName={layoutName} />
  )
}