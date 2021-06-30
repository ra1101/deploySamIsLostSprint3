import { shallowMount } from '@vue/test-utils'
import AppHeader from './../../components/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('renders h1 title', () => {
    const msg = 'new message'
    const wrapper = shallowMount(AppHeader, {})
    expect(wrapper.find('.title').text()).toEqual("Sam Is Lost")
  })
})
