import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // 从路由状态中获取数据
  const { score, total, userAnswers, questions, categoryName } = location.state || {
    score: 0,
    total: 0,
    userAnswers: [],
    questions: [],
    categoryName: '未知类别'
  };
  
  // 计算正确率
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;
  
  // 状态管理
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  
  // 准备图表数据
  const chartData = [
    { name: '正确', value: score, color: '#10B981' }, // 绿色
    { name: '错误', value: total - score, color: '#EF4444' } // 红色
  ];
  
  // 导航处理函数
  const handleRestartQuiz = () => {
    navigate(`/quiz/${location.pathname.split('/')[2]}`);
  };
  
  const handleBackToCategories = () => {
    navigate('/categories');
  };
  
  const handleViewQuestion = (index: number) => {
    setActiveQuestionIndex(index);
  };
  
  // 如果没有题目数据，重定向到类别选择页面
  if (questions.length === 0) {
    navigate('/categories');
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 顶部导航 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            答题完成！
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {categoryName} · {total}道题
          </p>
        </div>
        
        {/* 结果摘要卡片 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-12 transform transition-all duration-500 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block md:block mb-4 p-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
                <div className="bg-white dark:bg-gray-800 rounded-full p-6 md:p-8">
                  <span className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                    {score}
                  </span>
                  <span className="text-xl text-gray-500 dark:text-gray-400">/{total}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {accuracy}% 正确率
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {accuracy >= 80 
                  ? '太棒了！你的知识储备非常丰富！' 
                  : accuracy >= 60 
                    ? '不错的成绩，继续努力！' 
                    : '继续加油，多学习相关知识！'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  <i className="fa-solid fa-redo mr-2"></i>再答一次
                </button>
                
                <button
                  onClick={handleBackToCategories}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <i className="fa-solid fa-th-large mr-2"></i>选择其他类别
                </button>
              </div>
            </div>
            
            {/* 正确率图表 */}
            <div className="flex justify-center">
              <div className="w-64 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={1500}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        
        {/* 答题详情 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            答题详情
          </h2>
          
          {/* 题目导航 */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-8">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleViewQuestion(index)}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200",
                  activeQuestionIndex === index 
                    ? "ring-2 ring-blue-500 scale-110 z-10" 
                    : "hover:scale-105",
                  userAnswers[index] === questions[index].correctAnswer
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                )}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          {/* 当前选中题目详情 */}
          <div className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-750/50">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              第{activeQuestionIndex + 1}题
            </h3>
            
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              {questions[activeQuestionIndex].question}
            </p>
            
            <div className="space-y-2 mb-4">
              {questions[activeQuestionIndex].options.map((option, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-3 rounded border text-sm",
                    // 正确答案样式
                    index === questions[activeQuestionIndex].correctAnswer
                      ? "border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/10"
                      : "border-gray-200 dark:border-gray-700",
                    // 用户选择样式
                    userAnswers[activeQuestionIndex] === index && 
                    index !== questions[activeQuestionIndex].correctAnswer
                      ? "border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/10"
                      : ""
                  )}
                >
                  <div className="flex items-center">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 text-xs",
                      index === questions[activeQuestionIndex].correctAnswer
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : userAnswers[activeQuestionIndex] === index
                          ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                          : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                    )}>
                      {index === questions[activeQuestionIndex].correctAnswer
                        ? <i className="fa-solid fa-check"></i>
                        : userAnswers[activeQuestionIndex] === index
                          ? <i className="fa-solid fa-times"></i>
                          : index + 1}
                    </div>
                    <span className={cn(
                      "text-gray-700 dark:text-gray-300",
                      index === questions[activeQuestionIndex].correctAnswer
                        ? "font-medium"
                        : ""
                    )}>
                      {option}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {questions[activeQuestionIndex].explanation && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <i className="fa-solid fa-info-circle text-blue-500 mr-1"></i>解析:
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {questions[activeQuestionIndex].explanation}
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* 底部操作按钮 */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleBackToCategories}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>返回类别选择
          </button>
          
          <button
            onClick={handleRestartQuiz}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center justify-center"
          >
            <i className="fa-solid fa-redo mr-2"></i>再答一次
          </button>
        </div>
      </div>
    </div>
  );
}