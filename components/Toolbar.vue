<template>
  <v-app-bar color="primary" dark>
    <v-app-bar-nav-icon aria-label="side menu"></v-app-bar-nav-icon>

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

    <v-spacer v-hide-on-mobile></v-spacer>

    <div v-hide-on-mobile>
      <v-icon>mdi-account-group</v-icon>
      <span>{{ user.totalDevices }}</span>
    </div>

    <div v-hide-on-mobile class="ma-4">
      <v-icon>mdi-apps</v-icon>
      <span>{{ user.totalApps }}</span>
    </div>

    <LanguageSwitcher v-hide-on-mobile style="width: 15%"></LanguageSwitcher>

    <div v-hide-on-mobile class="ma-4">
      <v-layout column>
        <v-flex>
          {{ user.name }}
        </v-flex>
        <v-flex>
          <v-chip text-color="white" small>
            <v-avatar left>
              <v-icon>mdi-crown</v-icon>
            </v-avatar>
            <span class="capitalize">{{ user.plan }}</span>
          </v-chip>
        </v-flex>
      </v-layout>
    </div>

    <v-avatar v-hide-on-mobile class="mr-2" color="grey">
      <img :src="user.avatar" :alt="user.name" />
    </v-avatar>

    <v-menu id="menu" v-hide-on-mobile bottom left>
      <template v-slot:activator="{ on }">
        <v-btn v-hide-on-mobile dark icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item class="pointer">
          <v-list-item-title id="logout-menu-item" @click="logout">{{
            $t('dashboard.logout')
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
import locales from '~/locales'
import Logo from '~/components/Logo'
import LanguageSwitcher from '~/components/LanguageSwitcher'

export default {
  name: 'Toolbar',
  components: { Logo, LanguageSwitcher },
  data: () => {
    return {
      items: locales
    }
  },
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
