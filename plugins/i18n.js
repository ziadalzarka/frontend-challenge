export default function({ app }) {
  app.store.commit('SET_LOCALE', app.i18n.locale)

  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    app.store.commit('SET_LOCALE', newLocale)
  }
}
