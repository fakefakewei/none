import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      {/* 装饰元素 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 transition-all duration-10000 ease-in-out"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 transition-all duration-10000 ease-in-out delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 transition-all duration-10000 ease-in-out delay-4000"></div>
      </div>

      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6">
          知识挑战
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          测试你的知识储备，挑战各类题目，与朋友一较高下！
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          从多个类别中选择，每次随机抽取10道题目，看看谁是真正的知识达人！
        </p>
        
        <Link
          to="/categories"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          开始答题
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </Link>
      </div>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-2xl">
        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <i className="fa-solid fa-question-circle text-2xl text-blue-500 mb-2"></i>
          <span className="text-sm text-gray-600 dark:text-gray-300">海量题库</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <i className="fa-solid fa-tags text-2xl text-purple-500 mb-2"></i>
          <span className="text-sm text-gray-600 dark:text-gray-300">多类题目</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <i className="fa-solid fa-users text-2xl text-green-500 mb-2"></i>
          <span className="text-sm text-gray-600 dark:text-gray-300">多人参与</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <i className="fa-solid fa-chart-line text-2xl text-yellow-500 mb-2"></i>
          <span className="text-sm text-gray-600 dark:text-gray-300">记录进度</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <i className="fa-solid fa-trophy text-2xl text-red-500 mb-2"></i>
          <span className="text-sm text-gray-600 dark:text-gray-300">挑战自我</span>
        </div>
      </div>
    </div>
  );
}