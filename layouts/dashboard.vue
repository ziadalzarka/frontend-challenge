<template>
  <v-app>
    <v-content>
      <Toolbar></Toolbar>
      <nuxt></nuxt>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar'

export default {
  middleware: 'auth',
  components: { Toolbar },
  computed: {},
  methods: {}
}
</script>
