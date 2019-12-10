import Vue from 'vue'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'
import * as apps from '@/store/apps'
import app from '@/mock/app'

Vue.use(Vuex)

describe('AppsStore', () => {
  const response = { data: new Array(10).fill(app), total: 100 }
  let store

  const refactorStore = (state) => {
    store = new Vuex.Store({
      ...apps,
      state: { ...apps.initialState, ...state }
    })
    store.$axios = {
      $get: () =>
        new Promise((resolve) => setTimeout(() => resolve(response), 1000))
    }
  }

  beforeEach(() => {
    refactorStore()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should fetch first patch', async () => {
    jest.useFakeTimers()
    await store.dispatch('fetchApps')
    expect(store.state.loading).toBeTrue()
    jest.runAllTimers()
    await flushPromises()
    expect(store.state.loading).toBeFalse()
    expect(store.state.apps).toEqual(response.data)
  })

  it('should load more items', async () => {
    refactorStore({ apps: new Array(10).fill(app), total: 100 })
    jest.useFakeTimers()
    await store.dispatch('loadMore')
    expect(store.state.loading).toBeTrue()
    jest.runAllTimers()
    await flushPromises()
    expect(store.state.loading).toBeFalse()
    expect(store.state.apps).toBeArrayOfSize(20)
  })

  it('should not fetch more than total', async () => {
    refactorStore({ apps: new Array(100).fill(app), total: 100 })
    jest.useFakeTimers()
    await store.dispatch('loadMore')
    expect(store.state.loading).toBeFalse()
    jest.runAllTimers()
    await flushPromises()
    expect(store.state.loading).toBeFalse()
    expect(store.state.apps).toBeArrayOfSize(100)
  })

  it('should reset state and fetch again', async () => {
    refactorStore({ apps: new Array(100).fill(app), total: 100 })
    jest.useFakeTimers()
    await store.dispatch('fetchApps')
    jest.runAllTimers()
    await flushPromises()
    expect(store.state.apps).toBeArrayOfSize(10)
  })
})
