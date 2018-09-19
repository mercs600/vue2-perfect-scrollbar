import PerfectScrollbar from 'perfect-scrollbar';

var script = {
  name: 'PeftectScrollbar',
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
    }
  },
  data () {
    return {
      ps: null
    }
  },
  mounted () {
    if (!(this.ps && this.$isServer)) {
      this.ps = new PerfectScrollbar(this.$refs.container, this.options);
    }
  },
  updated () {
    this.update();
  },
  methods: {
    update () {
      if (this.ps) {
        this.ps.update();
      }
    }
  },
  render (h) {
    return h(this.tag,
      {
        ref: 'container',
        on: this.$listeners
      },
      this.$slots.default)
  }
};

/* script */
            const __vue_script__ = script;
/* template */

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/merc/Work/OpenSource/vue2-perfect-scrollbar/src/Scrollbar.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var PerfectScrollbar$1 = __vue_normalize__(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

function install (Vue, settings) {
  if (settings.options) {
    PerfectScrollbar$1.props.options.default = () => {
      return settings.options
    };
  }

  if (settings.tag) {
    PerfectScrollbar$1.props.tag.default = settings.tag;
  }

  Vue.component(
    settings.name ? settings.name : PerfectScrollbar$1.name,
    PerfectScrollbar$1
  );
}

export default install;
export { PerfectScrollbar$1 as PerfectScrollbar };
