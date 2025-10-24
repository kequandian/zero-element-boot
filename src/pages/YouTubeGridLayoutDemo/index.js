import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { YouTubeGridLayout } from '@/components/layout';
import DefaultPlaceholder from '@/components/presenter/placeholder/DefaultPlaceholder';
import { Cart, ShadowCart } from '@/components/cart';
import { Flexbox } from '@/components/layout';
import { ChakraText, ChakraButton } from '@/components/presenter';

export default function YouTubeGridLayoutDemo() {
  return (
    <ChakraProvider>
      <Flexbox
        direction="column"
        style={{
          width: '100vw',
          height: '100vh',
          padding: '20px',
          backgroundColor: '#f7fafc',
          overflow: 'auto'
        }}
      >
        <ChakraText
          content="YouTubeGridLayout 演示"
          fontSize="2xl"
          fontWeight="bold"
          color="#2d3748"
          style={{ marginBottom: '20px' }}
        />

        <YouTubeGridLayout
          minCardWidth={250}
          gap={16}
          aspectRatio="16:9"
          centerContent={false}
        >
          {Array.from({ length: 50 }, (_, index) => (
            <ShadowCart key={index}>
              <DefaultPlaceholder content={`YouTube 视频 ${index + 1}`} />
            </ShadowCart>
          ))}
        </YouTubeGridLayout>
      </Flexbox>
    </ChakraProvider>
  );
}
