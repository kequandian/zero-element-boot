import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteCommonjs as commonjs } from '@originjs/vite-plugin-commonjs';
import path from 'path';

// 组件库构建配置（替代 gulp + babel）
// 使用 Vite library mode + preserveModules 保留目录结构
export default defineConfig({
  plugins: [
    commonjs(),
    react({
      include: /\.(js|jsx)$/,
      babel: {
        babelrc: false,
        configFile: false,
        presets: [['@babel/preset-react', { runtime: 'classic' }]],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      umi: path.resolve(__dirname, './src/shims/umi.js'),
    },
  },
  publicDir: false, // lib 模式不复制 public/ 到输出目录
  css: { preprocessorOptions: { less: {} } },
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      formats: ['cjs'],
      fileName: () => 'index.js',
    },
    outDir: 'lib',
    emptyOutDir: true,
    cssCodeSplit: false,
    commonjsOptions: {
      include: [/node_modules/, /src/],
      transformMixedEsModules: true,
    },
    rollupOptions: {
      // 外部化 peer 依赖 — 由消费者提供
      external: [
        'react', 'react-dom', 'react/jsx-runtime',
        '@chakra-ui/react', '@chakra-ui/avatar', '@chakra-ui/layout', '@chakra-ui/system',
        '@emotion/react', '@emotion/styled',
        'framer-motion', 'ahooks', '@loadable/component', 'react-hook-form',
        'lodash', 'zero-element', '@uidotdev/usehooks',
        'prop-types', '@babel/runtime',
        /^@chakra-ui\//, /^@emotion\//,
        /^zero-element\//, // 深度导入如 zero-element/lib/utils/storage
      ],
      output: {
        preserveModules: true, // 保留目录结构
        preserveModulesRoot: 'src',
        format: 'cjs',
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
        exports: 'named',
      },
      plugins: [
        {
          // 外部化 .less/.css/.png 等资源，让 require('./index.less') 保留
          // 资源文件由 copy-assets.js 单独拷贝（匹配 gulp 现行为）
          name: 'externalize-assets',
          resolveId(source) {
            if (/\.(less|css|png|svg|jpe?g|gif)$/.test(source)) {
              return { id: source, external: true };
            }
            return null;
          },
        },
      ],
    },
  },
});
