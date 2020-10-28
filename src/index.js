import PerfectScrollbar from './Scrollbar'

export default {
  install: (Vue, settings) => {
    if (settings) {
      if (settings.name && typeof settings.name === 'string') {
        PerfectScrollbar.name = settings.name
      }

      if (settings.options && typeof settings.options === 'object') {
        PerfectScrollbar.props.options.default = () => {
          return settings.options
        }
      }

      if (settings.tag && typeof settings.tag === 'string') {
        PerfectScrollbar.props.tag.default = settings.tag
      }

      if (settings.watchOptions && typeof settings.watchOptions === 'boolean') {
        PerfectScrollbar.props.watchOptions = settings.watchOptions
      }
    }

    Vue.component(
      PerfectScrollbar.name,
      PerfectScrollbar
    )
  }
}

export { PerfectScrollbar }
