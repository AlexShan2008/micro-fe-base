import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun'
import apps from './apps'

Vue.use(ElementUI)

registerMicroApps(apps) // 注册应用`
start({
  prefetch: false // 取消预加载
}) // 开启

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
