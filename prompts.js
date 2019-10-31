module.exports = [
  {
    name: 'name',
    type: 'input',
    message: '组件的名称(发布到npm)',
    default: 'test'
    // pattern: /^[A-Za-z_][\w-]+$/ // TODO 添加验证
  },
  {
    name: 'isScoped',
    type: 'confirm',
    message: '是否有命名空间(@scope)',
    default: false
  },
  {
    name: 'scope',
    type: 'input',
    message: 'scope',
    when: (answers) => answers.isScoped,
    default: 'test-scope'
  },
]