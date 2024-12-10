import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// 创建根元素
const root = createRoot(document.getElementById('root'));

// 渲染应用
root.render(
  <StrictMode>
    <App />
  </StrictMode>
); 