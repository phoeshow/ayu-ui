// 组件安装器
import './style/index.scss'
import Grid from './components/Grid'

let componentsList = {
  Grid
}
const AyuUI = Vue => {
  Object.keys(componentsList).forEach(key => {
    Vue.use(componentsList[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(AyuUI)
}
export default AyuUI
