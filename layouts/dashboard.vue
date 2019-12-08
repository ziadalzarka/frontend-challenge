<template>
  <v-app>
    <v-content>
      <v-app-bar color="primary" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <Logo small class="mr-4 ml-2"></Logo>

        <v-text-field
          prepend-inner-icon="mdi-magnify"
          type="text"
          :label="$t('dashboard.search')"
          color="primary"
          light
          solo
          hide-details
          dense
        ></v-text-field>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '~/components/Logo'

export default {
  middleware: 'auth',
  components: { Logo },
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
