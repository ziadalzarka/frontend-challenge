import { asyncStore } from '@/util/async-store'

export const namespaced = true

export const initialState = {
  apps: [],
  loading: false,
  error: false,
  total: null
}

export const state = () => initialState

export const mutations = {
  APPEND_APPS(state, apps) {
    state.apps = [...state.apps, ...apps]
  },
  UPDATE_TOTAL(state, total) {
    state.total = total
  },
  RESET(state) {
    Object.assign(state, initialState)
  },
  ...asyncStore
}

export const actions = {
  fetchApps({ commit, dispatch }) {
    commit('RESET')
    dispatch('loadMore')
  },
  loadMore({ state, commit }) {
    if (!state.total || state.total > state.apps.length) {
      commit('SET_LOADING', true)
      this.$axios
        .$get('api/apps', {
          params: {
            take: 10,
            skip: state.apps.length,
            sortBy: 'title',
            direction: 'desc'
          }
        })
        .then(({ data, total }) => {
          commit('SET_LOADING', false)
          commit('APPEND_APPS', data)
          commit('UPDATE_TOTAL', total)
        })
        .catch(() => commit('SET_ERROR', true))
    }
  }
}
