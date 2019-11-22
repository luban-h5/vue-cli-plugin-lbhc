import Vue from 'vue'
import { getVM } from '../utils'

export default {
  data: () => ({
    loadCustomEditorFlag: false
  }),
  props: {
    editingElement: {
      type: Object,
      default: null
    },
    layout: {
      type: String,
      default: 'horizontal'
    }
  },
  computed: {
    customEditorName () {
      return `${this.editingElement.name}-custom-editor`
    }
  },
  methods: {
    loadCustomEditorForPlugin () {
      this.loadCustomEditorFlag = false
      if (!this.editingElement) return

      if (Vue.component(this.customEditorName)) {
        this.loadCustomEditorFlag = true
      } else {
        try {
          import(`../../component/editor`).then(component => {
            this.loadCustomEditorFlag = true
            Vue.component(this.customEditorName, component.default)
          }).catch(err => {
            console.log(err)
            console.warn('没有发现组件对应的编辑器')
          })
        } catch (err) {
          console.log(err)
          console.warn('没有发现组件对应的编辑')
        }
      }
    },
    /**
     * 将插件属性的 自定义增强编辑器注入 属性编辑面板中
     */
    // mixinEnhancedPropsEditor (editingElement) {
    //   if (!this.editingElementEditorConfig || !this.editingElementEditorConfig.components) return
    //   const { components } = this.editingElementEditorConfig
    //   for (const key in components) {
    //     if (this.$options.components[key]) return
    //     this.$options.components[key] = components[key]
    //   }
    // },
    renderPropsEditorPanel (h, editingElement) {
      const vm = getVM(editingElement.name)
      const props = vm.$options.props

      return (
        <a-form
          ref="form"
          size="mini"
          id="props-edit-form"
          layout={this.layout}
        >
          {
            // plugin-custom-editor
            this.loadCustomEditorFlag &&
            h(this.customEditorName, {
              props: {
                elementProps: editingElement.pluginProps
              }
            })
          }
          {
            Object
              .entries(props)
              .filter(([propKey, obj]) => obj.editor && !obj.editor.custom)
              .map(([propKey, obj]) => {
                const item = obj.editor
                // https://vuejs.org/v2/guide/render-function.html
                const data = {
                  style: { width: '100%' },
                  props: {
                    ...item.prop || {},
                    // https://vuejs.org/v2/guide/render-function.html#v-model

                    // #!zh:不设置默认值的原因（下一行的代码，注释的代码）：
                    // 比如表单 input，如果用户手动删除了 placeholder的内容，程序会用defaultPropValue填充，
                    // 表现在UI上就是：用户永远无法彻底删掉默认值（必须保留至少一个字符）
                    // value: editingElement.pluginProps[propKey] || item.defaultPropValue
                    value: editingElement.pluginProps[propKey]
                  },
                  on: {
                  // https://vuejs.org/v2/guide/render-function.html#v-model
                  // input (e) {
                  //   editingElement.pluginProps[propKey] = e.target ? e.target.value : e
                  // }
                    change (e) {
                      editingElement.pluginProps[propKey] = e.target ? e.target.value : e
                    }
                  }
                }
                const formItemLayout = this.layout === 'horizontal' ? {
                  labelCol: { span: 6 }, wrapperCol: { span: 16, offset: 2 }
                } : {}
                const formItemData = {
                  props: {
                    ...formItemLayout,
                    label: item.label
                  }
                }
                return (
                  <a-form-item {...formItemData}>
                    { item.extra && <div slot="extra">{typeof item.extra === 'function' ? item.extra(h) : item.extra}</div>}
                    { h(item.type, data) }
                  </a-form-item>
                )
              })
          }
        </a-form>
      )
    }
  },
  render (h) {
    const ele = this.editingElement
    if (!ele) return (<span>No Element Selected}</span>)
    return this.renderPropsEditorPanel(h, ele)
  },
  created () {
    this.loadCustomEditorForPlugin()
  }
}
