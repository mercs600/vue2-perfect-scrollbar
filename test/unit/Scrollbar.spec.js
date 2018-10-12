import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Scrollbar from '../../src/Scrollbar'

describe('Scrollbar.vue', () => {
  it('PerfectScrollbar should be initialized with passed slot as text', () => {
    const wrapper = shallowMount(Scrollbar, {
      attachToDocument: true,
      slots: {
        default: ['<div style="height: 100px; width: 100px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>']
      }
    })
    expect(wrapper.find('.ps').classes('ps--active-y')).to.be.true
  })

  it('PerfectScrollbar should not be initialized without slot', () => {
    const wrapper = shallowMount(Scrollbar, {
      attachToDocument: true
    })
    expect(wrapper.find('.ps').classes('ps--active-y')).to.be.false
  })

  it('this.ps should be null after destroy', () => {
    const wrapper = shallowMount(Scrollbar, {
      attachToDocument: true
    })
    wrapper.destroy()
    expect(wrapper.vm.ps).to.be.null
  })

  it('Component should remove reference do HTMLElement after destroy', () => {
    const wrapper = shallowMount(Scrollbar, {
      attachToDocument: true
    })
    let psObject = wrapper.vm.ps
    wrapper.destroy()
    expect(psObject.element).to.be.null
  })
})
