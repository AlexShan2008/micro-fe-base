import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from 'qiankun';

Vue.use(ElementUI);

const apps = [
  {
    name: 'reactApp',
    entry: '//localhost:7100', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: '#reactApp',
    activeRule: '/react',
  },
  {
    name: 'vueApp', // 应用的名字
    entry: '//localhost:7101', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: '#vueApp', // 容器名
    activeRule: '/vue', // 激活的路径
    props: { a: 1 }

  }
]
registerMicroApps(apps); // 注册应用`
start({
  prefetch: false // 取消预加载
});// 开启

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
