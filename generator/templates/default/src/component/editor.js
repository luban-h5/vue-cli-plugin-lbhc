import LbpTextAlign from '@luban-h5/lbs-text-align'

export default {
  propsConfig: {
    text: {
      type: 'a-input',
      label: '按钮文字',
      require: true,
      defaultPropValue: '按钮'
    },
    fontSize: {
      type: 'a-input-number',
      label: '字号(px)',
      require: true,
      prop: {
        step: 1,
        min: 12,
        max: 144
      },
      defaultPropValue: 14
    },
    color: {
      type: 'a-input',
      label: '文字颜色',
      // !#zh 为编辑组件指定 prop
      prop: {
        type: 'color'
      },
      require: true,
      defaultPropValue: 'black'
    },
    backgroundColor: {
      type: 'a-input', // lbs-color-picker
      label: '背景颜色',
      prop: {
        type: 'color'
      },
      require: true,
      defaultPropValue: '#ffffff' // TODO why logogram for color does't work?
    },
    borderColor: {
      type: 'a-input', // lbs-color-picker
      label: '边框颜色',
      prop: {
        type: 'color'
      },
      require: true,
      defaultPropValue: '#eeeeee'
    },
    borderWidth: {
      type: 'a-input-number',
      label: '边框宽度(px)',
      require: true,
      prop: {
        step: 1,
        min: 0,
        max: 10
      },
      defaultPropValue: 1
    },
    borderRadius: {
      type: 'a-input-number',
      label: '圆角(px)',
      require: true,
      prop: {
        step: 0.1,
        min: 0,
        max: 200
      },
      defaultPropValue: 0
    },
    lineHeight: {
      type: 'a-input-number',
      label: '行高',
      require: true,
      prop: {
        step: 0.1,
        min: 0.1,
        max: 10
      },
      defaultPropValue: 1
    },
    textAlign: {
      /**
       * #!en: you can also config type like below:
       * #!zh: 可以直接这样写：
        textAlign: {
          type: component(component definition json/自定义的组件，比如下面的 components[''lbs-text-align'])
        }

      * more explanation
        textAlign: {
          type: {
            render() {},
            props: {},
            methods: {},
          }
        }
       * #!en: reference: how to judge the tag is custom component or a HTML element in React or Vue?
       * !#zh:
       * 思路来源：
       * React 中 深入JSX 中，如何判断 h(tag) 中的 tag 是自定义组件还是普通 HTML 元素呢？React 是判断该 tag 是否为 function 来实现的
       * Vue 中的自定义组件 是一个普通的 JSON 对象，最后自定义组件被转换成了函数，输入是 JSON 输出是 函数，可以看看 Vue 中 createElement 也就是 h 的实现·
       * 参见：http://hcysun.me/2018/01/05/%E6%8E%A2%E7%B4%A2Vue%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6/
       */
      type: 'lbs-text-align',
      label: '文字对齐',
      require: true,
      defaultPropValue: 'center'
    }
  },
  components: {
    'lbs-text-align': LbpTextAlign
  }
}