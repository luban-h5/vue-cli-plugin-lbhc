import Vue from 'vue'

export function getVM (pluginName) {
  const Ctor = Vue.component(pluginName)
  return new Ctor()
}
