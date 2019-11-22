<!--

  组件属性自定义编辑器（增强编辑器）
  文档：https://github.com/luban-h5/vue-cli-plugin-lbhc/wiki

-->

<template>
  <div>
    <a-pagination
      :current="current"
      @change="handleSelectPage"
      size="small"
      :total="innerItems.length"
      :defaultPageSize="1"
      :itemRender="itemRender"
    />
    <lbs-image-gallery
      style="margin: 16px 0"
      :value="currentItem.value"
      @change="handleSelectImage"
    />
  </div>
</template>

<script>

export default {
  props: {
    elementProps: {
      type: Object,
      default: () => ({
        items: [],
        activeIndex: 0
      })
    }
  },
  computed: {
    innerItems () {
      return this.elementProps.items
    },
    currentItem () {
      return this.innerItems[this.current - 1] || {}
    }
  },
  data: () => ({
    current: 1
  }),
  methods: {
    handleSelectPage (page) {
      this.current = page
      this.elementProps.activeIndex = page - 1
    },
    handleSelectImage (url) {
      this.currentItem.value = url
    },
    itemRender (current, type, originalElement) {
      if (type === 'prev') {
        return <a-button style={{ marginRight: '8px' }} size="small" icon="minus" onClick={() => this.minus(current)} disabled={this.innerItems.length === 1}></a-button>
      } else if (type === 'next') {
        return <a-button style={{ marginLeft: '8px' }} size="small" icon="plus" onClick={this.add}></a-button>
      }
      return originalElement
    },
    add () {
      this.elementProps.items.push({
        value: '',
        label: `选项${this.innerItems.length + 1}-label`
      })
    },
    minus (index) {
      if (this.innerItems.length === 1) return
      this.elementProps.items.splice(index, 1)
      this.elementProps.activeIndex = Math.max(index - 1, 0)
    }
  }
}

</script>
