// 定义题目类型
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// 定义题库类型
export interface QuizData {
  [category: string]: Question[];
}

// 题库数据
export const quizData: QuizData = {
  // 日常生活类别题目
  daily: [
    {
      id: 1,
      question: '下列哪种食物富含维生素C？',
      options: ['苹果', '香蕉', '橙子', '葡萄'],
      correctAnswer: 2,
      explanation: '橙子是维生素C的优质来源，每100克橙子含有约53毫克维生素C。'
    },
    {
      id: 2,
      question: '正常成年人的心率范围是多少？',
      options: ['40-60次/分钟', '60-100次/分钟', '100-120次/分钟', '120-140次/分钟'],
      correctAnswer: 1,
      explanation: '正常成年人在静息状态下的心率通常在60-100次/分钟之间。'
    },
    {
      id: 3,
      question: '下列哪种方法不能有效去除冰箱异味？',
      options: ['放置活性炭', '放入柠檬片', '喷洒香水', '放置咖啡渣'],
      correctAnswer: 2,
      explanation: '喷洒香水只能暂时掩盖异味，不能真正去除异味，而其他选项都有吸附异味的作用。'
    },
    {
      id: 4,
      question: '煮鸡蛋时，怎样更容易剥壳？',
      options: ['冷水下锅', '热水下锅', '加盐', '加醋'],
      correctAnswer: 0,
      explanation: '冷水下锅煮鸡蛋，蛋白会从外向内凝固，蛋膜与蛋壳更容易分离，剥壳更方便。'
    },
    {
      id: 5,
      question: '下列哪种物品不适合放入微波炉加热？',
      options: ['陶瓷碗', '玻璃容器', '不锈钢饭盒', '纸质餐盒'],
      correctAnswer: 2,
      explanation: '金属容器不能放入微波炉，会产生火花并可能损坏微波炉。'
    },
    {
      id: 6,
      question: '以下哪种方式最能有效节约用水？',
      options: ['用流水洗碗', '缩短淋浴时间', '使用浴缸泡澡', '频繁洗车'],
      correctAnswer: 1,
      explanation: '缩短淋浴时间是日常生活中最有效的节约用水方法之一。'
    },
    {
      id: 7,
      question: '下列哪种食物储存时间最长？',
      options: ['新鲜蔬菜', '面包', '蜂蜜', '牛奶'],
      correctAnswer: 2,
      explanation: '纯蜂蜜具有抗菌特性，可以在适宜条件下保存数十年甚至更久。'
    },
    {
      id: 8,
      question: '熨烫丝绸衣物时，应该使用哪种温度？',
      options: ['高温', '中温', '低温', '蒸汽模式'],
      correctAnswer: 2,
      explanation: '丝绸是敏感面料，应使用低温熨烫以避免损坏纤维。'
    },
    {
      id: 9,
      question: '下列哪种做法有助于延长电池寿命？',
      options: ['一直充满电', '经常完全放电', '保持电量在20%-80%之间', '频繁充电'],
      correctAnswer: 2,
      explanation: '保持电池电量在20%-80%之间有助于延长锂离子电池的使用寿命。'
    },
    {
      id: 10,
      question: '以下哪种方法能有效去除衣服上的油渍？',
      options: ['直接用水洗', '用洗洁精预处理', '用热水浸泡', '暴晒后清洗'],
      correctAnswer: 1,
      explanation: '洗洁精含有表面活性剂，能有效分解油脂，预处理后更容易洗净油渍。'
    },
    {
      id: 11,
      question: '下列哪种习惯有助于保护眼睛健康？',
      options: ['长时间盯着屏幕', '在昏暗环境下阅读', '定时远眺放松', '用手揉眼睛'],
      correctAnswer: 2,
      explanation: '定时远眺放松可以缓解眼疲劳，有助于保护眼睛健康。'
    },
    {
      id: 12,
      question: '烹饪米饭时，米和水的比例通常是多少？',
      options: ['1:1', '1:1.5', '1:2', '1:3'],
      correctAnswer: 1,
      explanation: '一般情况下，大米和水的比例为1:1.5时，煮出的米饭口感最佳。'
    },
    {
      id: 13,
      question: '下列哪种做法可以防止切菜时打滑？',
      options: ['快速切', '刀面保持干燥', '食材先冷冻', '用湿抹布垫在砧板下'],
      correctAnswer: 3,
      explanation: '用湿抹布垫在砧板下可以防止砧板滑动，增加切菜时的安全性。'
    },
    {
      id: 14,
      question: '以下哪种方法能有效去除水中的氯味？',
      options: ['煮沸后晾置', '快速搅拌', '冷冻后融化', '过滤咖啡'],
      correctAnswer: 0,
      explanation: '将自来水煮沸后晾置一段时间，可以有效去除水中的氯味。'
    },
    {
      id: 15,
      question: '下列哪种物品不适合用真空袋储存？',
      options: ['羽绒服', '羊毛衫', '丝绸衣物', '棉被'],
      correctAnswer: 2,
      explanation: '丝绸衣物质地柔软脆弱，真空压缩可能导致纤维损坏和变形。'
    }
  ],
  
  // 影视类别题目
  movies: [
    {
      id: 1,
      question: '电影《泰坦尼克号》的导演是谁？',
      options: ['詹姆斯·卡梅隆', '史蒂文·斯皮尔伯格', '克里斯托弗·诺兰', '马丁·斯科塞斯'],
      correctAnswer: 0,
      explanation: '《泰坦尼克号》由詹姆斯·卡梅隆执导，于1997年上映。'
    },
    {
      id: 2,
      question: '下列哪部电影不是漫威电影宇宙的一部分？',
      options: ['《钢铁侠》', '《蝙蝠侠：黑暗骑士》', '《复仇者联盟》', '《黑豹》'],
      correctAnswer: 1,
      explanation: '《蝙蝠侠：黑暗骑士》属于DC漫画宇宙，而非漫威电影宇宙。'
    },
    {
      id: 3,
      question: '电影《肖申克的救赎》改编自哪位作家的作品？',
      options: ['斯蒂芬·金', 'J·K·罗琳', '海明威', '马克·吐温'],
      correctAnswer: 0,
      explanation: '《肖申克的救赎》改编自斯蒂芬·金的中篇小说《丽塔·海华丝与肖申克的救赎》。'
    },
    {
      id: 4,
      question: '下列哪位演员没有出演过《教父》系列电影？',
      options: ['马龙·白兰度', '阿尔·帕西诺', '罗伯特·德尼罗', '莱昂纳多·迪卡普里奥'],
      correctAnswer: 3,
      explanation: '莱昂纳多·迪卡普里奥没有出演过《教父》系列电影。'
    },
    {
      id: 5,
      question: '电影《阿凡达》上映于哪一年？',
      options: ['2005年', '2009年', '2012年', '2015年'],
      correctAnswer: 1,
      explanation: '《阿凡达》于2009年12月上映，由詹姆斯·卡梅隆执导。'
    },
    {
      id: 6,
      question: '下列哪部电影获得了第91届奥斯卡最佳影片奖？',
      options: ['《黑豹》', '《罗马》', '《绿色书》', '《波西米亚狂想曲》'],
      correctAnswer: 2,
      explanation: '《绿色书》获得了第91届奥斯卡最佳影片奖。'
    },
    {
      id: 7,
      question: '在电影《星球大战》系列中，"愿原力与你同在"的英文原句是？',
      options: ['"May the Force be with you"', '"May the Power be with you"', '"May the Strength be with you"', '"May the Energy be with you"'],
      correctAnswer: 0,
      explanation: '"May the Force be with you"是《星球大战》系列的经典台词。'
    },
    {
      id: 8,
      question: '电影《黑客帝国》中，主角尼奥最初的职业是什么？',
      options: ['程序员', '警察', '建筑师', '记者'],
      correctAnswer: 0,
      explanation: '尼奥在现实世界中的职业是程序员，同时也是一名黑客。'
    },
    {
      id: 9,
      question: '下列哪部动画电影不是宫崎骏的作品？',
      options: ['《千与千寻》', '《龙猫》', '《你的名字》', '《风之谷》'],
      correctAnswer: 2,
      explanation: '《你的名字》是新海诚的作品，而非宫崎骏。'
    },
    {
      id: 10,
      question: '电影《指环王：护戒使者》中，佛罗多需要将魔戒带到哪里销毁？',
      options: ['艾森加德', '米那斯提力斯', '魔多', '瑞文戴尔'],
      correctAnswer: 2,
      explanation: '佛罗多的任务是将魔戒带到魔多的末日火山销毁。'
    },
    {
      id: 11,
      question: '下列哪位演员饰演了《哈利·波特》系列中的赫敏·格兰杰？',
      options: ['艾玛·沃特森', '艾玛·斯通', '安妮·海瑟薇', '凯拉·奈特莉'],
      correctAnswer: 0,
      explanation: '艾玛·沃特森在《哈利·波特》系列电影中饰演赫敏·格兰杰。'
    },
    {
      id: 12,
      question: '电影《侏罗纪公园》中，科学家通过什么提取到了恐龙DNA？',
      options: ['恐龙骨骼', '琥珀中的蚊子', '化石', '史前树脂'],
      correctAnswer: 1,
      explanation: '电影中，科学家从琥珀中保存的吸食过恐龙血的蚊子体内提取到了恐龙DNA。'
    },
    {
      id: 13,
      question: '下列哪部电影不是克里斯托弗·诺兰执导的？',
      options: ['《盗梦空间》', '《星际穿越》', '《速度与激情7》', '《敦刻尔克》'],
      correctAnswer: 2,
      explanation: '《速度与激情7》由温子仁执导，不是克里斯托弗·诺兰的作品。'
    },
    {
      id: 14,
      question: '电影《 Forrest Gump》的中文译名是什么？',
      options: ['《阿甘正传》', '《雨人》', '《肖申克的救赎》', '《当幸福来敲门》'],
      correctAnswer: 0,
      explanation: '《Forrest Gump》的中文标准译名为《阿甘正传》。'
    },
    {
      id: 15,
      question: '下列哪部电影的背景设定在未来的2049年？',
      options: ['《银翼杀手2049》', '《终结者2》', '《少数派报告》', '《机器人总动员》'],
      correctAnswer: 0,
      explanation: '《银翼杀手2049》的故事背景设定在2049年。'
    }
  ],
  
  // 游戏类别题目
  games: [
    {
      id: 1,
      question: '《超级马里奥》系列中，马里奥的标志性服装颜色是什么？',
      options: ['红帽蓝衣', '绿帽红衣', '蓝帽绿衣', '黄帽蓝衣'],
      correctAnswer: 0,
      explanation: '马里奥的标志性服装是红色帽子和蓝色背带裤。'
    },
    {
      id: 2,
      question: '下列哪款游戏不是《英雄联盟》中的英雄？',
      options: ['亚索', '盖伦', '劳拉', '劫'],
      correctAnswer: 2,
      explanation: '劳拉是《古墓丽影》系列的主角，不是《英雄联盟》中的英雄。'
    },
    {
      id: 3,
      question: '《我的世界》(Minecraft)的创始人是谁？',
      options: [' Notch', 'Gabe Newell', 'Shigeru Miyamoto', 'Hideo Kojima'],
      correctAnswer: 0,
      explanation: '《我的世界》由瑞典程序员Markus Persson(Notch)创建。'
    },
    {
      id: 4,
      question: '下列哪款游戏不是任天堂开发的？',
      options: ['《塞尔达传说》', '《精灵宝可梦》', '《最终幻想》', '《动物森友会》'],
      correctAnswer: 2,
      explanation: '《最终幻想》系列由Square Enix开发，不是任天堂。'
    },
    {
      id: 5,
      question: '《CS:GO》中，下列哪种武器不是步枪？',
      options: ['AK-47', 'M4A4', 'AWP', 'Galil AR'],
      correctAnswer: 2,
      explanation: 'AWP是狙击步枪，不是突击步枪。'
    },
    {
      id: 6,
      question: '《王者荣耀》中，以下哪位英雄是坦克定位？',
      options: ['鲁班七号', '韩信', '程咬金', '妲己'],
      correctAnswer: 2,
      explanation: '程咬金在《王者荣耀》中是典型的坦克英雄。'
    },
    {
      id: 7,
      question: '《塞尔达传说：旷野之息》中，主角的名字是什么？',
      options: ['林克', '塞尔达', '盖侬', '米法'],
      correctAnswer: 0,
      explanation: '《塞尔达传说》系列的主角通常是名为林克的英雄。'
    },
    {
      id: 8,
      question: '下列哪款游戏不是开放世界游戏？',
      options: ['《GTA V》', '《赛博朋克2077》', '《黑暗之魂3》', '《巫师3：狂猎》'],
      correctAnswer: 2,
      explanation: '《黑暗之魂3》是线性关卡设计，不是开放世界游戏。'
    },
    {
      id: 9,
      question: '《宝可梦》系列中，皮卡丘属于什么属性？',
      options: ['火属性', '水属性', '电属性', '草属性'],
      correctAnswer: 2,
      explanation: '皮卡丘是电属性的宝可梦，被称为"电气老鼠宝可梦"。'
    },
    {
      id: 10,
      question: '《守望先锋》中，"午时已到"是谁的大招语音？',
      options: ['源氏', '麦克雷', '半藏', '士兵76'],
      correctAnswer: 1,
      explanation: '"午时已到"是麦克雷使用终极技能"维和者"时的语音。'
    },
    {
      id: 11,
      question: '下列哪款游戏不是MOBA类型游戏？',
      options: ['《DOTA2》', '《英雄联盟》', '《守望先锋》', '《王者荣耀》'],
      correctAnswer: 2,
      explanation: '《守望先锋》是团队射击游戏，不是MOBA游戏。'
    },
    {
      id: 12,
      question: '《黑暗之魂》系列的开发商是哪家公司？',
      options: ['FromSoftware', 'Capcom', 'Bandai Namco', 'Square Enix'],
      correctAnswer: 0,
      explanation: '《黑暗之魂》系列由日本开发商FromSoftware开发。'
    },
    {
      id: 13,
      question: '《英雄联盟》中，每年举办的全球总决赛奖杯名称是什么？',
      options: ['召唤师杯', '冠军盾', '王者杯', '联盟之冠'],
      correctAnswer: 0,
      explanation: '《英雄联盟》全球总决赛的冠军奖杯名为"召唤师杯"。'
    },
    {
      id: 14,
      question: '下列哪款游戏被誉为"开放世界游戏的标杆"？',
      options: ['《上古卷轴5：天际》', '《GTA V》', '《塞尔达传说：旷野之息》', '《巫师3：狂猎》'],
      correctAnswer: 2,
      explanation: '《塞尔达传说：旷野之息》因其自由探索和物理引擎被广泛认为是开放世界游戏的标杆。'
    },
    {
      id: 15,
      question: '《Among Us》游戏中，"内鬼"的主要目标是什么？',
      options: ['完成任务', '找出内鬼', '破坏并杀死船员', '修复设施'],
      correctAnswer: 2,
      explanation: '在《Among Us》中，"内鬼"的目标是在不被发现的情况下杀死所有船员或破坏关键设施。'
    }
  ],
  
  // 其他类别题目将在后续添加
  sports: [],
  music: [],
  science: []
};