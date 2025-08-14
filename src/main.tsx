import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App.tsx";
import "./index.css";

import ErrorBoundary from './components/ErrorBoundary.tsx';

// 检查root元素是否存在
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// 添加加载指示器
rootElement.innerHTML = `
  <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="text-center">
      <div class="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p class="text-gray-600 dark:text-gray-400">加载中...</p>
    </div>
  </div>
`;

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary fallback={<div className="min-h-screen flex items-center justify-center text-red-500">应用加载失败，请刷新页面重试</div>}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
