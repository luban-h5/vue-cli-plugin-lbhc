<!-- 轮播图组件 Demo -->

<template>
  <div>
    <img v-if="editorMode === 'edit' && items.length" :src="items[activeIndex].value"  width="100%" height="100%" />
    <swipe v-else :autoplay="interval" indicator-color="red">
      <swipe-item v-for="(item, index) in items" :key="index"><img :src="item.value" width="100%" height="100%" /></swipe-item>
    </swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import 'vant/lib/swipe/style'
import 'vant/lib/swipe-item/style'

export default {
  name: '<%= options.name %>',
  components: {
    Swipe,
    SwipeItem
  },
  props: {
      /**
     * 文档链接：
     * https://github.com/luban-h5/vue-cli-plugin-lbhc/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6-%E5%B1%9E%E6%80%A7%E6%B3%A8%E5%85%A5%E7%AF%87:-editorMode(%E7%BC%96%E8%BE%91%E5%99%A8%E6%A8%A1%E5%BC%8F)
     *
     * #!zh: 编辑器当前模式
     *  通常用在轮播图、单选、多选、提交按钮、视频
     *  因为他们在编辑模式和预览模式下有不同的表现
     *  preview: 预览模式
     *  edit:   编辑模式
     *
     * #!en: current mode for editor
     *  preview: preview mode
     *  edit:    edit mode
     */
    editorMode: {
      type: String,
      default: 'edit'
    },
    interval: {
      type: Number,
      default: 4000,
      editor: {
        type: 'a-input-number',
        label: '间隔时间',
        require: true
      }
    },
    activeIndex: {
      type: Number,
      default: 0,
      editor: {
        custom: true
      }
    },
    items: {
      type: Array,
      default: () => [
        { value: 'https://img.yzcdn.cn/vant/apple-1.jpg' },
        { value: 'https://img.yzcdn.cn/vant/apple-2.jpg' }
      ],
      editor: {
        custom: true
      }
    }
  },
  editorConfig: {
    components: {
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>
