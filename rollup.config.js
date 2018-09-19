import { writeFile } from 'fs'
import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import css from 'rollup-plugin-css-only'
import vue from 'rollup-plugin-vue'

const browser = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'Vue2PerfectScrollbar',
    file: pkg.browser
  },
  plugins: [
    vue({
      template: {
        isProduction: true
      }
    }),
    resolve({
      browser: true
    }),
    commonjs(),
    buble()
  ]
}

const browserMin = {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'Vue2PerfectScrollbar',
    file: 'dist/vue2-perfect-scrollbar.umd.min.js'
  },
  plugins: [
    vue({
      template: {
        isProduction: true
      }
    }),
    resolve({
      browser: true
    }),
    commonjs(),
    buble(),
    uglify()
  ]
}

const nodeModules = {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      file: pkg.main
    },
    {
      format: 'esm',
      file: pkg.module
    }
  ],
  plugins: [
    css({
      output: (styles, styleNodes) => {
        writeFile(pkg.style, styles, (err) => {
          if (err) {
            console.log(err)
          } else {
            resolve()
          }
        })
      }
    }),
    vue({
      style: false,
      css: false
    })
  ],
  external: [ 'perfect-scrollbar' ]
}

export default [
  browser,
  browserMin,
  nodeModules
]
