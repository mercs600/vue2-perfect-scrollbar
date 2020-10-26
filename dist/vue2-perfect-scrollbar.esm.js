import { h } from 'vue';
import PerfectScrollbar from 'perfect-scrollbar';

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
];

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
  emits: eventNames,
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
    this.$nextTick(() => {
      this.update();
    });
  },
  beforeUnmount () {
    this.destroy();
  },
  methods: {
    create () {
      if (!(this.ps && this.$isServer)) {
        this.ps = new PerfectScrollbar(this.$refs.container, this.options);

        eventNames.forEach(eventName => {
          this.ps.element.addEventListener(eventName, event => this.$emit(eventName, event));
        });
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
  render () {
    return h(this.tag,
      {
        ref: 'container',
        class: 'ps'
      },
      this.$slots.default())
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
