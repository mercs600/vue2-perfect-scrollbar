import { h } from 'vue'
import PerfectScrollbar from 'perfect-scrollbar'

const eventNames = [
  'scroll',
  'ps-scroll-y',
  'ps-scroll-x',
  'ps-scroll-up',
  'ps-scroll-down',
  'ps-scroll-left',
  'ps-scroll-right',
  'ps-y-reach-start',
  'ps-y-reach-end',
  'ps-x-reach-start',
  'ps-x-reach-end'
]

export default {
  name: 'PerfectScrollbar',
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    tag: {
      type: String,
      required: false,
      default: 'div'
    },
    watchOptions: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: eventNames,
  data () {
    return {
      ps: null
    }
  },
  watch: {
    watchOptions (shouldWatch) {
      if (!shouldWatch && this.watcher) {
        this.watcher()
      } else {
        this.createWatcher()
      }
    }
  },
  mounted () {
    this.create()

    if (this.watchOptions) {
      this.createWatcher()
    }
  },
  updated () {
    this.$nextTick(() => {
      this.update()
    })
  },
  beforeUnmount () {
    this.destroy()
  },
  methods: {
    create () {
      if (!(this.ps && this.$isServer)) {
        this.ps = new PerfectScrollbar(this.$el, this.options)

        eventNames.forEach(eventName => {
          this.ps.element.addEventListener(eventName, event => this.$emit(eventName, event))
        })
      }
    },
    createWatcher () {
      this.watcher = this.$watch('options', () => {
        this.destroy()
        this.create()
      }, {
        deep: true
      })
    },
    update () {
      if (this.ps) {
        this.ps.update()
      }
    },
    destroy () {
      if (this.ps) {
        this.ps.destroy()
        this.ps = null
      }
    }
  },
  render () {
    return h(this.tag,
      {
        class: 'ps'
      },
      this.$slots.default && this.$slots.default())
  }
}
