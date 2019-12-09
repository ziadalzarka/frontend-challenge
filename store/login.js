import { asyncStore } from '@/util/async-store'

export const namespaced = true

export const state = () => ({
  loading: false,
  error: false
})

export const mutations = {
  ...asyncStore
}

export const actions = {
  logIn({ commit }, data) {
    commit('SET_LOADING', true)
    this.$auth
      .loginWith('local', { data })
      .then(() => commit('SET_LOADING', false))
      .catch(() => commit('SET_ERROR', true))
  }
}
