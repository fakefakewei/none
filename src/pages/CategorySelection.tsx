import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// 定义答题类别类型
interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

// 答题类别数据
const categories: Category[] = [
  {
    id: 'daily',
    name: '日常生活',
    description: '关于日常生活常识和实用知识的题目',
    icon: 'fa-home',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'movies',
    name: '影视',
    description: '电影、电视剧和娱乐圈相关知识题目',
    icon: 'fa-film',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'games',
    name: '游戏',
    description: '电子游戏、桌游和游戏文化相关题目',
    icon: 'fa-gamepad',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'sports',
    name: '体育',
    description: '各类体育运动和体育赛事相关题目',
    icon: 'fa-futbol',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'music',
    name: '音乐',
    description: '音乐流派、歌手和音乐知识相关题目',
    icon: 'fa-music',
    color: 'from-red-500 to-rose-500'
  },
  {
    id: 'science',
    name: '科学',
    description: '科学知识和自然现象相关题目',
    icon: 'fa-flask',
    color: 'from-teal-500 to-cyan-500'
  }
];

export default function CategorySelection() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            选择答题类别
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            从以下类别中选择一个开始答题挑战，每个类别将随机抽取10道题目
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/quiz/${category.id}`}
              className="group"
            >
              <div className={cn(
                "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1",
                "border border-gray-100 dark:border-gray-700"
              )}>
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 text-white text-2xl`}>
                    <i className={`fa-solid ${category.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                  <div className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                    开始挑战
                    <i className="fa-solid fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}