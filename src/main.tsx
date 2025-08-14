import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'sonner';
import App from "./App.tsx";
import "./index.css";

import ErrorBoundary from './components/ErrorBoundary.tsx';

console.log("Main script loaded successfully");

// 错误日志记录函数
const logError = (error: Error, context: string) => {
  const errorDetails = {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString()
  };
  
  console.error(`[${context}] Error:`, errorDetails);
  
  // 保存到localStorage以便调试
  try {
    const existingErrors = JSON.parse(localStorage.getItem('appErrors') || '[]');
    existingErrors.push(errorDetails);
    localStorage.setItem('appErrors', JSON.stringify(existingErrors));
  } catch (e) {
    console.error("Failed to save error to localStorage:", e);
  }
};

// 全局错误处理
window.addEventListener('error', (event) => {
  logError(event.error, 'Global error event');
});

window.addEventListener('unhandledrejection', (event) => {
  logError(event.reason as Error, 'Unhandled promise rejection');
});

// 检查root元素是否存在
const rootElement = document.getElementById("root");
if (!rootElement) {
  const error = new Error("Root element not found");
  logError(error, 'Root element check');
  
  // 创建临时根元素作为后备
  const tempRoot = document.createElement('div');
  tempRoot.id = 'root';
  tempRoot.style.minHeight = '100vh';
  tempRoot.style.display = 'flex';
  tempRoot.style.alignItems = 'center';
  tempRoot.style.justifyContent = 'center';
  tempRoot.style.backgroundColor = '#f9fafb';
  tempRoot.innerHTML = `
    <div class="text-center p-6 bg-white rounded-lg shadow-md max-w-md">
      <div class="text-red-500 text-4xl mb-4">
        <i class="fa-solid fa-exclamation-circle"></i>
      </div>
      <h2 class="text-xl font-bold text-gray-900 mb-2">应用加载错误</h2>
      <p class="text-gray-600 mb-4">未找到页面根元素，请刷新页面重试</p>
      <button onclick="window.location.reload()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        刷新页面
      </button>
    </div>
  `;
  document.body.appendChild(tempRoot);
} else {
  try {
    // 添加加载指示器
    rootElement.innerHTML = `
      <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div class="text-center">
          <div class="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p class="text-gray-600 dark:text-gray-400">加载中...</p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">版本: ${new Date().toISOString().slice(0, 10)}</p>
        </div>
      </div>
    `;

    console.log("Initializing React root");
    
    // 创建根组件并渲染应用
    const root = createRoot(rootElement);
    
    // 包装App组件添加额外的错误处理
    const AppWithErrorHandling = () => {
      useEffect(() => {
        console.log("App component mounted");
        return () => console.log("App component unmounted");
      }, []);
      
      return <App />;
    };
    
    root.render(
      <StrictMode>
        <ErrorBoundary fallback={
          <div className="min-h-screen flex items-center justify-center p-4">
            <div class="text-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-md w-full">
              <div class="text-red-500 text-4xl mb-4">
                <i class="fa-solid fa-exclamation-circle"></i>
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">应用加载失败</h2>
              <p class="text-gray-600 dark:text-gray-400 mb-4">页面在加载过程中遇到错误</p>
              <button 
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                刷新页面重试
              </button>
            </div>
          </div>
        }>
          <BrowserRouter>
            <AppWithErrorHandling />
            <Toaster />
          </BrowserRouter>
        </ErrorBoundary>
      </StrictMode>
    );
    
    console.log("React root rendered successfully");
  } catch (error) {
    logError(error as Error, 'React root initialization');
    
    if (rootElement) {
      rootElement.innerHTML = `
        <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
          <div class="text-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-md w-full">
            <div class="text-red-500 text-4xl mb-4">
              <i class="fa-solid fa-exclamation-circle"></i>
            </div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">初始化错误</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">应用在初始化过程中遇到错误</p>
            <button onclick="window.location.reload()" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              刷新页面
            </button>
          </div>
        </div>
      `;
    }
  }
}
