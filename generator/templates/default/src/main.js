import Vue from 'vue'
// import App from './App.vue'
import App from './mini-editor/index'
import './plugins/ant-design-vue.js'
import './plugins/font.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
