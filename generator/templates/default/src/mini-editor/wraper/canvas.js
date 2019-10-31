export default {
  render(h) {
    return (
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          style={{ background: '#fff', margin: 0, minHeight: '280px' }}
        >
          <a-card title="组件预览面板" style="height: 100%;">
          <a href="#" slot="extra">more</a>
          <div>{this.$slots.default}</div>
        </a-card>
        </a-layout-content>
      </a-layout>
    )
  }
}