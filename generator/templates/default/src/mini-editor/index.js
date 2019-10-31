
import LbpComponent from '../component/entry.js'

import PropsPanel from './panels/props.js'
import Element from './models/element.js'

import CanvasWrapper from './wraper/canvas.js'
import PropsPanelWrapper from './wraper/props.js'

export default {
  name: 'app',
  data: () => ({
    editingElement: null,
  }),
  components: {
    LbpComponent,
    PropsPanel
  },
  created() {
    this.editingElement = new Element(LbpComponent)
  },
  render(h) {
    return (
      <a-layout id="components-layout-demo-top-side" style="height: 100%">
        <a-layout-header class="header">
          <div class="logo"><span class="text" style={{color: 'white'}}>鲁班H5组件开发脚手架</span></div>
        </a-layout-header>
        <a-layout>
          <CanvasWrapper>
            {
              this.editingElement && h('lbp-component', this.editingElement.getPreviewData())
            }
          </CanvasWrapper>
          <PropsPanelWrapper>
            <props-panel editingElement={this.editingElement} />
          </PropsPanelWrapper>
        </a-layout>
      </a-layout>
    )
  }
}

// #components-layout-demo-top-side .logo {
//   width: 180px;
//   height: 31px;
//   /* background: rgba(255, 255, 255, 0.2); */
//   margin: 16px 28px 16px 0;
//   float: left;
//   position: relative;

// }

// .text {
//   position: absolute;
//   top: -16px;
//   color: white;
//   width: 100%;
//   text-align: center;
// }
