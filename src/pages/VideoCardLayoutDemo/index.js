import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import VideoCardLayout from '@/components/layout/VideoCardLayout';
import DefaultPlaceholder from '@/components/presenter/placeholder/DefaultPlaceholder';
import { Cart, ShadowCart } from '@/components/cart';
import { Flexbox } from '@/components/layout';
import { ChakraText, ChakraButton } from '@/components/presenter';

export default function VideoCardLayoutDemo() {
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
          content="VideoCardLayout 演示"
          fontSize="2xl"
          fontWeight="bold"
          color="#2d3748"
          style={{ marginBottom: '20px' }}
        />
        <VideoCardLayout
          maxColumns={5}
          minColumns={1}
          maxCardWidth={400}
          minCardWidth={200}
          aspectRatio="16:9"
          gap={16}
        >
          {Array.from({ length: 50 }, (_, index) => (
            <ShadowCart key={index}>
              <DefaultPlaceholder content={`视频卡片 ${index + 1}`} />
            </ShadowCart>
          ))}
        </VideoCardLayout>
      </Flexbox>
    </ChakraProvider>
  );
}
