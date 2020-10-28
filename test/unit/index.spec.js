import { mount } from '@vue/test-utils'
import PerfectScrollbar from '../../src/index'
describe('index.js', () => {
  let wrapper
  const App = {
    template: '<h1>perfect-scrollbar</h1>'
  }

  it('Component PerfectScrollbar shoud exist after global register', () => {
    wrapper = mount(App, {
      global: {
        plugins: [PerfectScrollbar]
      }
    })
    expect(wrapper.__app._context.components.PerfectScrollbar).toBeInstanceOf(Object)
  })

  it('Component PerfectScrollbar with specific name "scroll" shoud exist after global register', () => {
    wrapper = mount(App, {
      global: {
        plugins: [[PerfectScrollbar, { name: 'scroll' }]]
      }
    })
    expect(wrapper.__app._context.components.scroll).toBeInstanceOf(Object)
  })
})
