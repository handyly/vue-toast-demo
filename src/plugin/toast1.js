import ToastComponent from '../components/myToast'

const plugin = {
  install (Vue) {
    // 生成一个Vue的子类, 同时这个子类也就是组件
    const ToastConstructor = Vue.extend(ToastComponent)
    // 生成一个该子类的实例
    const instance = new ToastConstructor()

    // 将这个实例挂载在我创建的div上, 并将此div加入全局挂载点内部
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    const toast = (msg, duration = 2000) => {
      instance.message = msg
      instance.show = true

      setTimeout(() => {
        instance.show = false
      }, duration)
    }
    // all myPlugin's plugins are included in this.$myPlugin
    if (!Vue.$myPlugin) {
      Vue.$myPlugin = {
        toast
      }
    } else {
      Vue.$myPlugin.toast = toast
    }

    Vue.mixin({
      created: function () {
        console.log('created')
        this.$myPlugin = Vue.$myPlugin
      }
    })
  }
}

export default plugin
// export const install = plugin.install
