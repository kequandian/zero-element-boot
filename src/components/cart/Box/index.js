import React from 'react';
import { Box } from '@chakra-ui/react';


/**
 * 
 * @param {}
 */

export default function Index(props) {

  const { children, w, h, bg, p, color, maxW, maxH, minW, minH, borderWidth, borderRadius, overflow, display, alignItems, justifyContent, fontWeight,
    letterSpacing, fontSize, textTransform, ml, mt, ps, lineHeight, isTruncated }=props;

  const boxStyles = { w, h, bg, p, color, maxW, maxH, minW, minH, borderWidth, borderRadius, overflow, display, alignItems, justifyContent, fontWeight,
    letterSpacing, fontSize, textTransform, ml, mt, ps, lineHeight, isTruncated }

  return React.Children.map(children, child => {
    return <Box {...boxStyles} >
      {child}
    </Box>
  })
}