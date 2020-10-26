import type { Component, App } from "vue"
import type PerfectScrollbarNamespace from 'perfect-scrollbar'

declare const PerfectScrollbarPlugin: PerfectScrollbar

export default PerfectScrollbarPlugin
export const PerfectScrollbar: Component

export declare interface PerfectScrollbarOptions {
  options?: PerfectScrollbarNamespace.Options
  tag?: string
  name?: string
  watchOptions?: boolean
}

export declare interface PerfectScrollbar {
  install: (app: App, settings?: PerfectScrollbarOptions) => any;
}
