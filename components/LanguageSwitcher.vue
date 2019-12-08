<template>
  <v-select
    v-model="locale"
    :items="locales"
    class="flex-grow-0"
    label="Language"
    item-value="code"
    item-text="label"
    outlined
    hide-details
    dense
  ></v-select>
</template>

<script>
import locales from '~/locales'

export default {
  name: 'LanguageSwitcher',
  data: () => ({ locales }),
  computed: {
    locale: {
      get() {
        return this.$store.state.locale
      },
      set(locale) {
        this.$store.dispatch('setLocale', locale)
      }
    }
  }
}
</script>
