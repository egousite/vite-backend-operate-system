import { createApp } from 'vue';
import App from './App.vue';
// 引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入element-plus的中文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// 注册SVG图标
// @ts-ignore
import 'virtual:svg-icons-register';
// 引入全局组件
import globalComponents from './components/index.ts';
// 引入全局样式
import './styles/index.scss';

// 创建应用实例
const app = createApp(App);
// 挂载element-plus
app.use(ElementPlus, {
  locale: zhCn,
});
// 挂载全局组件
app.use(globalComponents);
// 挂载应用
app.mount('#app');
