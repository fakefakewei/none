import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizData, Question } from '@/lib/quizData';
import { cn } from '@/lib/utils';

export default function QuizPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  // 状态管理
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [categoryName, setCategoryName] = useState('');
  
  // 从题库中随机抽取10道题
  useEffect(() => {
    if (!categoryId || !quizData[categoryId]) {
      navigate('/categories');
      return;
    }
    
    // 获取类别名称
    const categories = {
      'daily': '日常生活',
      'movies': '影视',
      'games': '游戏',
      'sports': '体育',
      'music': '音乐',
      'science': '科学'
    };
    setCategoryName(categories[categoryId] || '未知类别');
    
    // 获取该类别下的所有题目
    const allQuestions = quizData[categoryId];
    
    // 如果题目数量不足10道，直接使用所有题目
    if (allQuestions.length <= 10) {
      setQuestions(allQuestions);
      return;
    }
    
    // 随机抽取10道不重复的题目
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
  }, [categoryId, navigate]);
  
  // 处理选项选择
  const handleOptionSelect = (optionIndex: number) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(optionIndex);
    }
  };
  
  // 处理答案提交
  const handleAnswerSubmit = () => {
    if (selectedOption === null) return;
    
    // 记录用户答案
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(newAnswers);
    
    // 检查答案是否正确
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    
    setIsAnswerSubmitted(true);
  };
  
  // 处理下一题
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // 所有题目完成，跳转到结果页面
      navigate('/results', { 
        state: { 
          score, 
          total: questions.length,
          userAnswers,
          questions,
          categoryName
        } 
      });
    }
  };
  
  // 处理返回类别选择
  const handleGoBack = () => {
    navigate('/categories');
  };
  
  // 获取当前题目
  const currentQuestion = questions[currentQuestionIndex];
  
  // 计算进度百分比
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <i className="fa-solid fa-spinner fa-spin text-3xl text-blue-500 mb-4"></i>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">加载题目中...</h2>
          <p className="text-gray-600 dark:text-gray-400">请稍候，我们正在为您准备题目</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 顶部导航和进度 */}
        <div className="mb-8">
          <button
            onClick={handleGoBack}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4 inline-flex items-center"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            返回类别选择
          </button>
          
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {categoryName} · 题目 {currentQuestionIndex + 1}/{questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              得分: {score}
            </span>
          </div>
          
          {/* 进度条 */}
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        
        {/* 题目卡片 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 transform transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {currentQuestion.question}
          </h2>
          
          {/* 选项列表 */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={cn(
                  "p-4 rounded-lg border transition-all duration-200 cursor-pointer",
                  // 基础样式
                  "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750",
                  // 选中状态
                  selectedOption === index 
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                    : "",
                  // 提交后状态
                  isAnswerSubmitted && index === currentQuestion.correctAnswer
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : "",
                  isAnswerSubmitted && selectedOption === index && selectedOption !== currentQuestion.correctAnswer
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : "",
                  // 禁用状态
                  isAnswerSubmitted ? "cursor-default" : "cursor-pointer"
                )}
              >
                <div className="flex items-center">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0",
                    // 选中状态
                    selectedOption === index 
                      ? "bg-blue-500 text-white border-blue-500" 
                      : "bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600",
                    // 提交后状态
                    isAnswerSubmitted && index === currentQuestion.correctAnswer
                      ? "bg-green-500 text-white border-green-500"
                      : "",
                    isAnswerSubmitted && selectedOption === index && selectedOption !== currentQuestion.correctAnswer
                      ? "bg-red-500 text-white border-red-500"
                      : ""
                  )}>
                    {isAnswerSubmitted && index === currentQuestion.correctAnswer ? (
                      <i className="fa-solid fa-check text-xs"></i>
                    ) : isAnswerSubmitted && selectedOption === index && selectedOption !== currentQuestion.correctAnswer ? (
                      <i className="fa-solid fa-times text-xs"></i>
                    ) : (
                      <span className="text-xs text-gray-500 dark:text-gray-400">{index + 1}</span>
                    )}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">{option}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* 答案解析 */}
          {isAnswerSubmitted && currentQuestion.explanation && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-750 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <i className="fa-solid fa-info-circle text-blue-500 mr-1"></i>解析:
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
        
        {/* 操作按钮 */}
        <div className="flex justify-between">
          <button
            onClick={handleGoBack}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>返回
          </button>
          
          {isAnswerSubmitted ? (
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              {currentQuestionIndex === questions.length - 1 ? (
                <>查看结果 <i className="fa-solid fa-arrow-right ml-2"></i></>
              ) : (
                <>下一题 <i className="fa-solid fa-arrow-right ml-2"></i></>
              )}
            </button>
          ) : (
            <button
              onClick={handleAnswerSubmit}
              disabled={selectedOption === null}
              className={cn(
                "px-6 py-2 font-medium rounded-lg shadow transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800",
                selectedOption === null 
                  ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed" 
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-md transform hover:-translate-y-0.5 focus:ring-blue-500"
              )}
            >
              提交答案 <i className="fa-solid fa-check ml-2"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}