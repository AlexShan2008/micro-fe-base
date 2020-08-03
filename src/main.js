import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start, runAfterFirstMounted, initGlobalState } from 'qiankun'
import apps from './apps'

// for angular subapp
// import 'zone.js';

Vue.use(ElementUI)

registerMicroApps(apps) // 注册应用`

// 数据传递方法一：通过 GlobalState 方法传递：
// 1. Initialize state
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  base: 'Vue',
  user: {
    name: 'qiankun'
  },
});

onGlobalStateChange((value, prev) => console.log('***BaseApp***[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  base: 'VueApp',
  user: {
    name: 'qiankun',
  }
});

/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp('/react');

/**
 * Step4 启动应用
 */
start({
  prefetch: true
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});