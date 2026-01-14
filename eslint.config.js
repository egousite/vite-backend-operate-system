// ESLint 9.x 配置文件 (Flat Config格式)
// 导入必要的模块和插件
import js from '@eslint/js'; // ESLint 官方推荐的JavaScript规则
import globals from 'globals'; // 提供浏览器、Node.js等环境的全局变量
import tseslint from 'typescript-eslint'; // TypeScript ESLint插件
import pluginVue from 'eslint-plugin-vue'; // Vue.js ESLint插件
import pluginPrettier from 'eslint-plugin-prettier'; // Prettier集成插件

// 导出ESLint配置
// 使用TypeScript ESLint的配置函数来定义配置
// 注意：ESLint 9.x使用flat config格式，与传统的.eslintrc不同
export default tseslint.config({
  // 指定要检查的文件类型
  // 使用glob模式匹配JavaScript、TypeScript和Vue文件
  files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,vue}'],

  // 注册使用的插件
  // 插件提供额外的规则和功能
  plugins: {
    vue: pluginVue, // Vue.js相关规则
    prettier: pluginPrettier, // Prettier代码格式化规则
  },

  // 继承的基础配置
  // 这些配置提供了一组预定义的规则集
  extends: [
    js.configs.recommended, // ESLint官方推荐的JavaScript规则
    ...tseslint.configs.recommended, // TypeScript ESLint推荐的规则
    pluginVue.configs['flat/essential'], // Vue.js基础规则
  ],

  // 语言选项配置
  // 定义解析器和全局变量
  languageOptions: {
    globals: globals.browser, // 浏览器环境的全局变量（如window、document等）
    parserOptions: {
      parser: tseslint.parser, // 使用TypeScript ESLint解析器
    },
  },

  // 自定义规则配置
  // 可以覆盖继承的规则或添加新规则
  rules: {
    // Prettier相关规则
    'prettier/prettier': 'error', // 启用Prettier格式化检查

    // ESLint基础规则 (https://eslint.bootcss.com/docs/rules/)
    'no-var': 'error', // 强制使用let或const，禁止使用var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 限制最多只能有一个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境禁止console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境禁止debugger
    'no-unexpected-multiline': 'error', // 防止意外的多行表达式
    'no-useless-escape': 'off', // 关闭不必要的转义字符检查

    // TypeScript规则 (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 推荐使用@ts-expect-error而不是@ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 允许使用any类型
    '@typescript-eslint/no-non-null-assertion': 'off', // 允许使用非空断言操作符(!)
    '@typescript-eslint/no-namespace': 'off', // 允许使用命名空间
    '@typescript-eslint/semi': 'off', // 关闭分号检查（由Prettier处理）

    // Vue.js规则 (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 允许单字组件名
    'vue/no-mutating-props': 'off', // 允许修改props（需要谨慎使用）
    'vue/attribute-hyphenation': 'off', // 允许使用驼峰式属性名
  },

  // 忽略的文件和目录
  // ESLint不会检查这些路径下的文件
  ignores: ['**/node_modules/*', '**/dist/*', '**/build/*'],
});
