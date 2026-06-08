// Vite 入口 — 必须先执行 global.js 的副作用（注册 NamedConfig、设置 endpoint）
import './global.js';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/index.js';

// React 16.8.6 — 用 ReactDOM.render（非 React 18 的 createRoot）
ReactDOM.render(<App />, document.getElementById('root'));
