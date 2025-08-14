import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined,
    errorInfo: undefined
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ error, errorInfo });
    
    // 在生产环境中可以将错误发送到错误监控服务
    if (process.env.NODE_ENV === 'production') {
      console.error('Production error:', error.message);
      // 添加错误日志到localStorage以便调试
      localStorage.setItem('lastError', JSON.stringify({
        message: error.message,
        stack: error.stack,
        time: new Date().toISOString()
      }));
    }
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      // 显示自定义错误信息
      console.error('Rendering error fallback:', this.state.error);
      
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-50 dark:bg-gray-900">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-exclamation-triangle text-2xl text-red-500"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">页面加载出错</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              很抱歉，页面在加载过程中遇到问题。
            </p>
            {this.state.error && (
              <p className="text-sm text-red-500 mb-6">错误信息: {this.state.error.message}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all"
                onClick={() => window.location.reload()}
              >
                <i className="fa-solid fa-refresh mr-2"></i>刷新页面
              </button>
              <Link
                to="/"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
              >
                <i className="fa-solid fa-home mr-2"></i>返回首页
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;