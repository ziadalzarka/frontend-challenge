export const state = () => ({
  locale: 'en'
})

export const mutations = {
  SET_LOCALE: (state, locale) => (state.locale = locale)
}

export const actions = {
  setLocale({ commit }, locale, rootState) {
    this.$i18n.setLocale(locale)
    commit('SET_LOCALE', locale)
  }
}
