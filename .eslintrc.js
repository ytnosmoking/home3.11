module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },

  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  // extends: 'standard',
  plugins: ['vue', 'html'],

  globals: {
    document: false,
    navigator: false,
    window: false
  },
  // 0 关闭校验 1 警告 2 报错
  "rules": {
    "no-console": 0, // console
    'accessor-pairs': 2, // 对象中使用 getter /setter
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }], //箭头函数前后空格 必须
    "no-const-assign": 2, //禁止修改const声明的变量
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }], // 在代码块中 使用一致的大括号风格
    'camelcase': [2, {
      'properties': 'always'
    }],//强制使用骆驼拼写法命名约定
    'comma-dangle': [2, 'never'], // 禁止末尾逗号
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }], //逗号后使用一致的空格
    'comma-style': [2, 'last'], // 使用一致的逗号风格
    'constructor-super': 2, // 构造函数中要有 supper
    'curly': [2, 'multi-line'], //强制所有控制语句使用一致的括号风格?
    'dot-location': [2, 'property'],
    'eol-last': 0,  // 禁止文件末尾存在空行
    'eqeqeq': [2, 'allow-null'], // 要求 全等 ===
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],//强制 generator 函数中 * 号周围使用一致的空格
    'handle-callback-err': [2, '^(err|error)$'],
    'indent': [2, 2, {
      'SwitchCase': 1
    }], //要求回调函数中有容错处理
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],// 键名后冒号 空格
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }], //强制在关键字前后使用一致的空格
    'new-cap': [2, {
      'newIsCap': true, //要求调用 new 操作符时有首字母大小的函数。
      'capIsNew': false //允许调用首字母大写的函数时没有 new 操作符
    }], 
    'new-parens': 2, //要求调用无参构造函数时有圆括号
    'no-array-constructor': 2, // 禁用 array 构造函数
    // 'no-caller': 2, //禁用 arguments.caller 或 arguments.callee
    'no-class-assign': 2, // 禁止修改类(构造函数)声明的变量
    'no-cond-assign': 2, // 禁止条件语句中 出项赋值现象
    'no-const-assign': 2, //禁止修改 const 声明的变量
    'no-control-regex': 2, // 禁止在正则表达式中使用控制字符
    'no-delete-var': 2, // 禁止删除变量
    'no-dupe-args': 2, // 禁止 function 中 出现的重复参数
    'no-dupe-class-members': 2, // 不允许类成员中有重复的 名称
    'no-dupe-keys': 2, // 禁止对象出现重复的key
    'no-duplicate-case': 2, //禁止出现重复的 case 标签
    'no-empty-character-class': 2, //禁止 正则出项空 字符
    'no-empty-pattern': 2, // 禁止 空解构
    'no-eval': 2,  // 禁止 eval
    'no-ex-assign': 2, //禁止对 catch 子句中的异常重新赋值 
    'no-extend-native': 2, // 禁止扩展原生对象
    'no-extra-bind': 2, //
    // 'no-extra-boolean-cast': 2, //禁止不必要的布尔类型转换
    'no-extra-parens': [2, 'functions'], // 禁止不必要的括号
    'no-fallthrough': 2, //禁止 case 语句落空
    'no-floating-decimal': 2, // 禁止浮点小数
    'no-func-assign': 2, //禁止对 function 声明重新赋值
    'no-implied-eval': 2, // 禁止隐试 eval()
    'no-inner-declarations': [2, 'functions'], //禁止在嵌套的块中出现 function 声明
    'no-invalid-regexp': 2, //禁止无效的 正则
    'no-irregular-whitespace': 2, //禁止在字符串和注释之外不规则的空白
    'no-iterator': 2, // 禁止 迭代器
    'no-label-var': 2, // 禁止与变量同名的标签
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],//禁止标签
    'no-lone-blocks': 2, // 禁止不必要的 嵌套
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2, // 禁止使用多个空格
    'no-multi-str': 2, // 禁止多行字符串
    'no-multiple-empty-lines': [2, {
      'max': 1
    }], // 禁止超出1行的 空行
    // 'no-native-reassign': 2,
    'no-new-object': 2,  // 禁止 Object 构造器
    'no-new-require': 2, //不允许 new require('sth')  new(require('sth));
    'no-new-symbol': 2, //禁止 Symbolnew 操作符和 new 一起使用
    'no-new-wrappers': 2, //禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-obj-calls': 2, //禁止将全局对象当作函数进行调用   var math1 = Math()
    'no-octal': 2,  //禁用八进制
    'no-octal-escape': 2,
    'no-path-concat': 2, //当使用 _dirname 和 _filename 时不允许字符串拼接
    'no-proto': 2, //禁用__proto__ 使用 getPrototypeOf 方法替代 __proto__
    'no-redeclare': 2, // 禁止 重复申明
    'no-regex-spaces': 2, //禁止正则表达式字面量中出现多个空格
    'no-return-assign': [2, 'except-parens'], //禁止在返回语句中赋值 除了括号外
    'no-self-assign': 2,  // 禁止自身 赋值
    'no-self-compare': 2, // 禁止自身 比较
    'no-sequences': 2, // 禁用逗号操作符
    'no-shadow-restricted-names': 2, //关键字不能被遮蔽 (NaN、Infinity、undefined)和严格模式下被限定的标识符 eval、arguments 
    'no-sparse-arrays': 2, //禁用稀疏数组
    'no-this-before-super': 2, //在构造函数中禁止在调用super()之前使用this或super
    'no-throw-literal': 2, //限制可以被抛出的异常
    'no-trailing-spaces': 2, // 单行结束后面 不要有空格
    'no-undef': 2, //不能使用undefined
    'no-undef-init': 2, //变量初始化时不能直接给它赋值为undefined
    'no-unexpected-multiline': 2, //禁止使用令人困惑的多行表达式
    'no-unmodified-loop-condition': 2, //禁止 不变的循环条件
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }], //禁止可以表达为更简单结构的三元操作符 
    'no-unreachable': 2, //禁止在 return、throw、continue 和 break 后 出现代码
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, {
      'vars': 'all', // 针对所有变量
      'args': 'none' // 针对 函数参数
    }], // never used vars
    'no-useless-call': 2,
    'no-useless-computed-key': 2, //禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 2, // 禁止不必要的构造函数
    'no-useless-escape': 0, //禁止不必要的 转义
    'no-whitespace-before-property': 2, // 禁止属性前 空白  
    'no-with': 2, // 禁用 with 语句
    'one-var': [2, {
      'initialized': 'never'
    }], // 连续声明  禁止
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }//强制操作符使用一致的换行符风格 符号在后   ？：在前
    }], // 换行运算符 在行尾
    'padded-blocks': [2, 'never'], // 禁止 块内 填充
    'quotes': [2, 'double', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }], // 引号 双引号
    'semi': [0, 'never'], //冒号
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }], // 冒号前后空格
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [0, 'always'], // 函数定义前不要空格
    'space-in-parens': [2, 'never'], // 圆括号内没有空格
    'space-infix-ops': 2, //操作符周围要有空格
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],//禁止一元符前后空格  word:new、delete、typeof、void、yield 可以 ；nonwords -、+、--、++、!、!!
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }], // 注释后要有空格
    'template-curly-spacing': [2, 'never'],//禁止字符串模板中出现空格
    'use-isnan': 2, // 要求isNaN() 检查NaN
    'valid-typeof': 2, // 强制要求typeof 与有效的字符串比较
    'wrap-iife': [2, 'any'], // 需要把立即执行的函数 包起来 闭包
    'yield-star-spacing': [2, 'both'], //强制在 yield* 表达式中 * 周围使用空格
    'yoda': [2, 'never'],  // 变量 > 值
    'prefer-const': 2, // const 声明那些声明后不再被修改的变量
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, //开发 debugger 生产nodebugger
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],// 大括号使用一致空格
    'array-bracket-spacing': [2, 'never'], // 禁止数组 出现空格
    'vue/jsx-uses-vars': 2
  }
}
