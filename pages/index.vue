<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="auto">
        <v-btn-toggle
          v-model="activeBtn"
          color="teal"
          tile
          group
          class="flex-wrap"
        >
          <v-btn value="complete">
            <v-icon left>mdi-check</v-icon>
            {{ $t('dashboard.toolbar.complete') }}
          </v-btn>
          <v-btn value="in-setup">
            <v-icon left>mdi-settings</v-icon>
            {{ $t('dashboard.toolbar.in-setup') }}
          </v-btn>
          <v-btn value="shared">
            <v-icon left>mdi-share</v-icon>
            {{ $t('dashboard.toolbar.shared') }}
          </v-btn>
          <v-btn value="active">
            <v-icon left>mdi-chart-line</v-icon>
            {{ $t('dashboard.toolbar.active') }}
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary">
          <v-icon left>mdi-plus</v-icon>
          {{ $t('dashboard.toolbar.new-integration') }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(app, index) in apps" :key="index" sm="12" md="6" lg="4">
        <AppCard :app="app"></AppCard>
      </v-col>
    </v-row>
    <div class="text-center" :class="{ invisible: !loading }">
      <v-progress-circular
        :indeterminate="true"
        color="primary"
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import AppCard from '~/components/AppCard'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: { AppCard },
  data: () => {
    return { activeBtn: 'active' }
  },
  computed: mapState('apps', ['apps', 'loading', 'error']),
  mounted() {
    this.loadMore()
    this.onLoadMore(() => this.loadMore())
  },
  methods: {
    loadMore() {
      console.log('called')
      this.$store.dispatch('apps/loadMore')
    }
  }
}
</script>

<style scoped>
.subtitle-2 * {
  vertical-align: text-bottom;
}
</style>
