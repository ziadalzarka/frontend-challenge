import { mount, shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  it('renders', () => {
    const wrapper = mount(Logo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('renders different images on small', async () => {
    const wrapper = shallowMount(Logo)
    // fetch current image src
    const src = wrapper.find('img').attributes('src')
    expect(src).toBeString()
    // set the small property
    wrapper.setProps({ small: true })
    // await dom changes
    await wrapper.vm.$nextTick()
    // test if image changed
    expect(wrapper.find('img').attributes('src')).not.toEqual(src)
  })
})
