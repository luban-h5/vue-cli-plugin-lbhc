export default {
  render(h) {
    return (
      <a-layout-sider width="400" style="background: #fff">
        <a-card title="组件配置面板" style="height: 100%;">
          <a href="#" slot="extra">more</a>
          <div>{this.$slots.default}</div>
        </a-card>
      </a-layout-sider>
    )
  }
}