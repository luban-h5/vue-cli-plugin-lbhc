/**
 * 自定义组件的入口文件(即打包时候，打包这个文件)
 * 更多文档细节，参见：
 * https://github.com/luban-h5/vue-cli-plugin-lbhc/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6-%E5%8E%9F%E7%90%86%E7%AF%87:-%E7%BB%84%E4%BB%B6%E5%85%A5%E5%8F%A3-components-index.vue
 *
 *
 * entry.vue 提供是一个演示用的轮播图组件(已经发布，是鲁班的官方轮播图组件)
 */

import CustomComponent from './entry'

const install = function (Vue) {
  Vue.component(CustomComponent.name, CustomComponent)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

CustomComponent.install = install

export default CustomComponent
