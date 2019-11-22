<!-- Vue 版本的按钮组件 Demo -->

<template>
  <button :style="style">{{text}}</button>
</template>

<script>
import commonProps from '../common/props.js'
export default {
  name: '<%= options.name %>',
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
    text: commonProps.text(),
    vertical: commonProps.vertical,
    backgroundColor: commonProps.backgroundColor,
    color: commonProps.color,
    fontSize: commonProps.fontSize,
    lineHeight: commonProps.lineHeight,
    borderWidth: commonProps.borderWidth,
    borderRadius: commonProps.borderRadius,
    borderColor: commonProps.borderColor,
    textAlign: commonProps.textAlign()
  },
  computed: {
    style() {
      const style = {
        color: this.color,
        textAlign: this.textAlign,
        backgroundColor: this.backgroundColor,
        fontSize: this.fontSize,
        lineHeight: this.lineHeight + 'em',
        borderColor: this.borderColor,
        borderRadius: this.borderRadius + 'px',
        borderWidth: this.borderWidth + 'px',
        textDecoration: 'none'
      }
      return style
    }
  },
}
</script>