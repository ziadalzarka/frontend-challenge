export const asyncStore = {
  SET_LOADING(state, loading) {
    state.loading = loading
    if (loading) {
      state.error = false
    }
  },
  SET_ERROR(state, error) {
    state.error = error
    if (error) {
      state.loading = false
    }
  }
}
