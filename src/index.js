import PerfectScrollbar from './Scrollbar.vue'

function install (Vue, settings) {
  if (settings.options) {
    PerfectScrollbar.props.options.default = () => {
      return settings.options
    }
  }

  if (settings.tag) {
    PerfectScrollbar.props.tag.default = settings.tag
  }

  Vue.component(
    settings.name ? settings.name : PerfectScrollbar.name,
    PerfectScrollbar
  )
}

export { PerfectScrollbar }
export default install
