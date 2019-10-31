module.exports = (api, opts, rootOpts) => {
  addDependencies(api, opts)
  renderFiles(api, opts)
}

function renderFiles (api, opts) {
  const filesToDelete = [
    // 'postcss.config.js',
    // '.browserslistrc',
    // 'babel.config.js',
    // '.gitignore',
    '.eslintrc.js',
    'public/favicon.ico',
    'public/index.html',
    'src/App.vue',
    'src/main.js',
    'src/assets/logo.png',
    'src/components/HelloWorld.vue',
    'src/router/index.js',
    'src/views/About.vue',
    'src/views/Home.vue'
  ]

  // console.log('\n[luban-h5 component plugin tips]\n \t GeneratorAPI options:', opts)

  // https://github.com/vuejs/vue-cli/issues/2470
  api.render(files => {
    Object.keys(files)
      .filter(name => filesToDelete.indexOf(name) > -1)
      .forEach(name => delete files[name])
  })

  api.render('./templates/default')

  // 配置文件
  api.render({
    './.eslintrc.js': './templates/default/_eslintrc.js',
  });
}

function addDependencies (api, opts) {
   // 修改 `package.json` 中的字段
   api.extendPackage({
    "name": opts.isScoped ? `@${opts.scope}/${opts.name}` : opts.name,
    "private": false,
    "main": `dist/${opts.name}.umd.min.js`,
    dependencies: {
      "@luban-h5/lbs-text-align": "^0.0.3",
      "ant-design-vue": "^1.2.4",
      "font-awesome": "4.7.0",
    },
    devDependencies: {
      "@vue/cli-plugin-babel": "^4.0.0",
      "@vue/cli-plugin-eslint": "^4.0.0",
      "@vue/cli-service": "^4.0.0",
      "eslint-plugin-vue": "^5.0.0",
      "vue-template-compiler": "^2.6.10",
      "@vue/eslint-config-standard": "^4.0.0",
    },
    scripts: {
      "build": `vue-cli-service build --target lib --name ${opts.name} ./src/component/entry.js`
    },
    "license": "MIT"
  })
}