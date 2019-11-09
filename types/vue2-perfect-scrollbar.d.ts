import { Vue, VueConstructor } from 'vue/types/vue'
import { PluginFunction, Component } from "vue"

declare const PerfectScrollbarPlugin: PerfetScrollbar

export default PerfectScrollbarPlugin
export const PerfectScrollbar: Component

export declare interface PerfectScrollbarOptions {
  options?: Object,
  tag?: String
}

export declare interface PerfetScrollbar {
  install: PluginFunction<PerfectScrollbarOptions>
}

