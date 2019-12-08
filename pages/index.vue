<template>
  <div>
    <h1>
      {{ $t('dashboard.title') }}
    </h1>
    <p>
      {{ user.name }}
    </p>
    <v-btn @click="logout">Log out</v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
