import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteCommonjs as commonjs } from '@originjs/vite-plugin-commonjs';
import path from 'path';

// Demo App 配置（替代 umi dev / umi build）
// 源码大量混用 CJS/ESM：dev 用 viteCommonjs（apply:serve），build 用 commonjsOptions 处理源文件
export default defineConfig({
  plugins: [
    commonjs(), // dev server 阶段转换 require()/module.exports
    react({
      include: /\.(js|jsx)$/,
      babel: {
        babelrc: false,
        configFile: false,
        // React 16.8.6 早于自动 JSX runtime（需 16.14+），用 classic runtime
        presets: [['@babel/preset-react', { runtime: 'classic' }]],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      umi: path.resolve(__dirname, './src/shims/umi.js'), // history shim
    },
  },
  css: {
    preprocessorOptions: { less: {} },
  },
  server: {
    port: 8000, // 匹配 umi 默认端口
    open: true,
  },
  base: './', // 匹配 umi 生产 publicPath
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  optimizeDeps: {
    entries: [path.resolve(__dirname, 'index.html')], // 只扫描根 index.html，忽略 Sandbox/get_started 里的
    esbuildOptions: { loader: { '.js': 'jsx' } },
  },
  esbuild: {
    loader: 'jsx', // 让 esbuild 在 dev 阶段把 .js 当 JSX 处理
    include: /src\/.*\.js$/,
    exclude: [],
  },
  build: {
    outDir: 'dist/nav-ui',
    cssCodeSplit: false,
    commonjsOptions: {
      include: [/node_modules/, /src/], // 同时处理 node_modules 和源文件中的 CJS
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js',
        chunkFileNames: 'bundle-[name].js',
        assetFileNames: 'bundle-[name][extname]',
        manualChunks: undefined,
      },
    },
  },
});
