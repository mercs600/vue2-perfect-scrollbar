import PerfectScrollbar from 'perfect-scrollbar';

var PerfectScrollbar$1 = {
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
  data () {
    return {
      ps: null
    }
  },
  watch: {
    watchOptions (shouldWatch) {
      if (!shouldWatch && this.watcher) {
        this.watcher();
      } else {
        this.createWatcher();
      }
    }
  },
  mounted () {
    this.create();

    if (this.watchOptions) {
      this.createWatcher();
    }
  },
  updated () {
    this.update();
  },
  beforeDestroy () {
    this.destroy();
  },
  methods: {
    create () {
      if (!(this.ps && this.$isServer)) {
        this.ps = new PerfectScrollbar(this.$refs.container, this.options);
      }
    },
    createWatcher () {
      this.watcher = this.$watch('options', () => {
        this.destroy();
        this.create();
      }, {
        deep: true
      });
    },
    update () {
      if (this.ps) {
        this.ps.update();
      }
    },
    destroy () {
      if (this.ps) {
        this.ps.destroy();
        this.ps = null;
      }
    }
  },
  render (h) {
    return h(this.tag,
      {
        ref: 'container',
        class: 'ps',
        on: this.$listeners
      },
      this.$slots.default)
  }
};

function install (Vue, settings) {
  if (settings) {
    if (settings.name && typeof settings.name === 'string') {
      PerfectScrollbar$1.name = settings.name;
    }

    if (settings.options && typeof settings.options === 'object') {
      PerfectScrollbar$1.props.options.default = () => {
        return settings.options
      };
    }

    if (settings.tag && typeof settings.tag === 'string') {
      PerfectScrollbar$1.props.tag.default = settings.tag;
    }

    if (settings.watchOptions && typeof settings.watchOptions === 'boolean') {
      PerfectScrollbar$1.props.watchOptions = settings.watchOptions;
    }
  }

  Vue.component(
    PerfectScrollbar$1.name,
    PerfectScrollbar$1
  );
}

export default install;
export { install, PerfectScrollbar$1 as PerfectScrollbar };
