import { Vue, VueConstructor } from 'vue/types/vue'
import { PluginFunction, Component } from "vue"

declare const PerfectScrollbarPlugin: PerfectScrollbar

export default PerfectScrollbarPlugin
export const PerfectScrollbar: Component

export declare interface PerfectScrollbarOptions {
  options?: Object,
  tag?: String
}

export declare interface PerfectScrollbar {
  install: PluginFunction<PerfectScrollbarOptions>
}

