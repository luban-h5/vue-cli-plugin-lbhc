import './gallery.scss'
import PersonalTab from './tabs/personal.js'
import PixabayTab from './tabs/pixabay.js'

export default {
  name: 'lbs-image-gallery',
  components: {
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    tabs: [
      {
        value: 'personal',
        label: '我的图库'
      },
      {
        value: 'pixabay',
        label: 'Pixabay图库'
      }
    ],
    activeTab: 'personal',
    innerVisible: false,
    pixabayList: []
  }),
  computed: {
  },
  watch: {
    visible (value) {
      this.innerVisible = value
    }
  },
  methods: {
    showGallery () {
      this.innerVisible = true
    },
    handleClose () {
      this.innerVisible = false
    },
    changeTab ({ key }) {
      this.activeTab = key
    },
    handleSelectImage (item) {
      this.handleClose()
      this.$emit('change', item.previewURL)
    },
    renderContent () {
      switch (this.activeTab) {
        case 'personal':
          return <PersonalTab onChangeItem={item => {
            this.handleSelectImage(item)
          }}/>
        case 'pixabay':
          return <PixabayTab onChangeItem={item => {
            this.handleSelectImage(item)
          }}/>
      }
    },
    renderDefaultActivator () {
      const activatorWithoutImg = (
        <div
          class="default-activator cursor-pointer empty-bg-activator"
          onClick={this.showGallery}
        >
          <a-icon type="plus" />
        </div>
      )

      const activatorWithImg = (
        <div onClick={this.showGallery}>
          {/*
             TODO 在这里增加 v-lazy 指令，防止
            「在开发者模式下，打开 disable cache，导致图片加载时间过长，导致看起来像点击 pagination 没有反应，误以为代码有错误」
             加了 v-lazy，之后，切换不同的图片，即使图片没有加载，但是会实现loading，会让开发者知道，并不是 bug，而是图片加载需要时间
          */}
          <div class="default-activator cursor-pointer "><img src={this.value} width="50%" style={{ margin: 'auto' }} /></div>
          <div class="flex-space-between" style="margin-top: 8px;">
            <a-button size="small">更换</a-button>
            <a-button size="small" onClick={e => {
              e.stopPropagation()
            }}>裁剪</a-button>
            <a-button size="small" onClick={(e) => {
              e.stopPropagation()
              this.handleSelectImage({ previewURL: '' })
            }}>移除</a-button>
          </div>
        </div>
      )
      return (this.value ? activatorWithImg : activatorWithoutImg)
    }
  },
  render (h) {
    return (
      <div>
        <slot>{this.renderDefaultActivator()}</slot>
        <a-modal
          closable
          title="图片库"
          width="65%"
          visible={this.innerVisible}
          onOk={this.handleClose}
          onCancel={this.handleClose}
          bodyStyle={{ margin: 0, padding: 0 }}
        >
          <a-layout style="height: 500px; position: relative;">
            <a-layout-sider width="200px" style="background-color: white;">
              <a-menu mode="inline" defaultSelectedKeys={['personal']} onClick={this.changeTab}>
                {
                  this.tabs.map((tab, index) => (
                    <a-menu-item key={tab.value} >
                      <a-icon type="user" />
                      <span>{tab.label}</span>
                    </a-menu-item>
                  ))
                }
              </a-menu>
            </a-layout-sider>
            <a-layout-content>
              {this.renderContent()}
            </a-layout-content>
          </a-layout>
        </a-modal>
      </div>
    )
  }
}
