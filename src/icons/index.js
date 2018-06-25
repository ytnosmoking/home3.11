import Vue from 'vue'
// svg 组件
import generateIconsView from '@/views/svg-icons/generateIconsView'
import SvgIcon from '@/components/SvgIcon'

// register globally
Vue.component('svg-icon', SvgIcon)


const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)


const iconMap = requireAll(req)
generateIconsView.generate(iconMap)
