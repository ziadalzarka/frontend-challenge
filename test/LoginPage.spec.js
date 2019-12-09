import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import LoginPage from '@/pages/login.vue'
import '~/plugins/vee-validate'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

describe('AppCard', () => {
  let loginShouldFail
  let store
  let vuetify
  let mocks
  let actions
  let state

  beforeEach(() => {
    loginShouldFail = false
    vuetify = new Vuetify()
    state = {
      loading: false,
      error: false
    }
    actions = {
      logIn: jest.fn().mockImplementation(() => {
        state.error = loginShouldFail
      })
    }
    store = new Vuex.Store({
      modules: {
        login: {
          namespaced: true,
          state,
          actions
        }
      }
    })
    mocks = {
      $t: (id) => id
    }
  })

  const factory = (propsData) =>
    mount(LoginPage, {
      propsData,
      localVue,
      store,
      vuetify,
      mocks
    })

  it('renders', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders email and password', async () => {
    const wrapper = factory()
    const user = { email: 'email', password: 'password' }
    wrapper.setData({ user })
    await wrapper.vm.$nextTick()
    expect(wrapper.find('input[type="email"]').element.value).toEqual(
      user.email
    )
    expect(wrapper.find('input[type="password"]').element.value).toEqual(
      user.password
    )
  })

  it('calls login action', async () => {
    const wrapper = factory()
    const user = { email: 'frontend@ninja.com', password: '12345' }
    wrapper.setData({ user })
    wrapper.find('form#userForm').trigger('submit')
    await flushPromises()
    expect(actions.logIn).toHaveBeenCalled()
    expect(wrapper.vm.error).toBeFalse()
  })

  it('cancels login when email is invalid', async () => {
    const wrapper = factory()
    const user = { email: 'email', password: '12345' }
    wrapper.setData({ user })
    wrapper.find('form#userForm').trigger('submit')
    await flushPromises()
    expect(actions.logIn).not.toHaveBeenCalled()
  })

  it('cancels login when password is invalid', async () => {
    const wrapper = factory()
    const user = { email: 'frontend@ninja.com', password: '1234' }
    wrapper.setData({ user })
    wrapper.find('form#userForm').trigger('submit')
    await flushPromises()
    expect(actions.logIn).not.toHaveBeenCalled()
  })

  it('should fail to log in', async () => {
    loginShouldFail = true
    const wrapper = factory()
    const user = { email: 'frontend@ninja.com', password: '12345' }
    wrapper.setData({ user })
    wrapper.find('form#userForm').trigger('submit')
    await flushPromises()
    expect(actions.logIn).toHaveBeenCalled()
    expect(wrapper.vm.error).toBeTrue()
  })
})
