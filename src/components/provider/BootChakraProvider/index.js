import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// A lightweight app-level context to pass boot flags.
export const BootChakraContext = React.createContext({ usedTag: false });

// useTag has been moved to '@/components/provider/useTag' for standalone import

export default function BootChakraProvider({
  children,
  // Context value for consumers; default to { usedTag: false }
  value = { usedTag: false },
  // Forward common ChakraProvider props if needed
  theme,
  resetCSS,
  cssVarsRoot,
  portalZIndex,
  ...rest
}) {
  return (
    <ChakraProvider theme={theme} resetCSS={resetCSS} cssVarsRoot={cssVarsRoot} portalZIndex={portalZIndex} {...rest}>
      <BootChakraContext.Provider value={value}>
        {children}
      </BootChakraContext.Provider>
    </ChakraProvider>
  );
}