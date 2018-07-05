import Vue from 'vue'
// svg 组件
import generateIconsView from '@/views/svg-icons/generateIconsView'
import SvgIcon from '@/components/SvgIcon'

// register globally
Vue.component('svg-icon', SvgIcon)


const requireAll = requireContext => {
  console.log(requireContext.keys())
  return requireContext.keys().map(requireContext)
}
const req = require.context('./svg', false, /\.svg$/)
// console.log(req)


const iconMap = requireAll(req)
console.log(requireAll(req))
generateIconsView.generate(iconMap)
