// 统一注册全局组件
import type { App, Component } from 'vue';
// 引入所有全局组件
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';

// 统一管理组件，限制其类型为 组件 类型
const components: { [key: string]: Component } = {
  SvgIcon,
};

export default {
  install(app: App) {
    // 注册全局组件
    Object.entries(components).forEach(([key, component]) => {
      app.component(key, component);
    });
  },
};
