import { expect } from 'chai'
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import PerfectScrollbar from '../../src/index'
describe('index.js', () => {
  let localVue

  beforeEach(function () {
    localVue = createLocalVue()
  })

  it('Component PerfectScrollbar shoud exist after global register', () => {
    localVue.use(PerfectScrollbar)
    expect(localVue.options.components.PerfectScrollbar).to.be.a('function')
  })

  it('Component PerfectScrollbar with specific name "scroll" shoud exist after global register', () => {
    localVue.use(PerfectScrollbar, {
      name: 'scroll'
    })
    expect(localVue.options.components.scroll).to.be.a('function')
  })
})
