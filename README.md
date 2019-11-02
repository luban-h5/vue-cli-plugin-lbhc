## vue-cli-plugin-lbhc
> vue-cli-plugin-luban-h5-component

## 安装

### 使用preset自动安装插件
```
vue create --preset luban-h5/vue-cli-plugin-lbhc my-luban-component-demo
```


### 目录结构

```bash
mini-editor 模拟鲁班H5的核心编辑器功能
component   你要编写组件的目录
  entry.js  组件入口（类似index.js）
  editor.js 组件的编辑面板配置

```


### 开发流程

```bash
vue create --preset luban-h5/vue-cli-plugin-lbhc lbc-demo
cd lbc-demo
yarn serve

# 构建、发布个人组件
yarn build
npm login
npm publish


# 构建发布 scope 组件
yarn build
npm login
npm publish --access publish
```

### 概念解释
1. `组件的名称(发布到npm)`：输入组件名称
   1. 默认为test，这个名字最后会作为：component name，将在luban-h5的编辑器中，通过 yarn add component-name 的形式引入
   
2. `是否有命名空间(@scope)`：Yes or No
3. `scope(命名空间<理解为企业/组织名称>)`: 输入scope名称
   1. 作为组织或者企业开发组件，可以选择 Yes，填写npm scope（将企业/组织的组件放在 `@组织名` 下, 便于管理）
   2. 举例1：LubanH5 的官方组件库，都放在了`@luban-h5`这个scope下。以按钮组件为例，通过 `yarn add @luban-h5/lbc-button`，即可引入官方按钮组件了。用户一看到 `@luban-h5` 这个，就知道是由 LubanH5官方提供的组件库
   3. 举例2:比如你的企业/组织名称是 abc，你在开发上传组件，那么就可以选择：
       1. 组件的名称(发布到npm) ：upload
       2.  是否有命名空间(@scope)：Yes
       3. scope：abc
       4. 通过 `npm publish --access publish` 发布到 npm
       5. 通过`npm install @abc/upload` 或 `yarn add @abc/uplaod`， 即可引入到`鲁班编辑器`中作为`自定义组件`使用
