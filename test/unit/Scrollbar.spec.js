import { shallowMount } from '@vue/test-utils'
import PerfectScrollbar from '../../src/Scrollbar'

describe('Scrollbar.vue', () => {
  it('PerfectScrollbar should be initialized with passed slot as text', () => {
    // mock scroll content higher than container - jsdom issue
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 500 })

    const wrapper = shallowMount(PerfectScrollbar, {
      slots: {
        default: ['<div style="height: 100px; width: 100px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>']
      }
    })

    expect(wrapper.find('.ps').classes('ps--active-y')).toBe(true)
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', { configurable: true, value: 0 })
  })

  it('PerfectScrollbar should not be initialized without slot', () => {
    const wrapper = shallowMount(PerfectScrollbar)
    expect(wrapper.find('.ps').classes('ps--active-y')).toBe(false)
  })

  it('this.ps should be null after destroy', () => {
    const wrapper = shallowMount(PerfectScrollbar)
    wrapper.unmount()
    expect(wrapper.vm.ps).toBeNull
  })

  it('Component should remove reference do HTMLElement after destroy', () => {
    const wrapper = shallowMount(PerfectScrollbar)
    let psObject = wrapper.vm.ps
    wrapper.unmount()
    expect(psObject.element).toBeNull
  })
})
