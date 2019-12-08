<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="auto">
        <v-btn text color="primary">
          <v-icon left>mdi-check</v-icon>
          {{ $t('dashboard.toolbar.complete') }}
        </v-btn>
        <v-btn text color="primary">
          <v-icon left>mdi-settings</v-icon>
          {{ $t('dashboard.toolbar.in-setup') }}
        </v-btn>
        <v-btn text color="primary">
          <v-icon left>mdi-share</v-icon>
          {{ $t('dashboard.toolbar.shared') }}
        </v-btn>
        <v-btn text color="primary">
          <v-icon left>mdi-chart-line</v-icon>
          {{ $t('dashboard.toolbar.active') }}
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn color="primary">
          <v-icon left>mdi-plus</v-icon>
          {{ $t('dashboard.toolbar.new-integration') }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="12" md="8">
        <v-row>
          <!-- :key="app.id" v-for="app in apps" -->
          <v-col xs="12" md="6">
            <AppCard></AppCard>
          </v-col>
          <v-col xs="12" md="6">card</v-col>
          <v-col xs="12" md="6">card</v-col>
          <v-col xs="12" md="6">card</v-col>
        </v-row>
      </v-col>
      <v-col xs="12" md="4">list </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppCard from '~/components/AppCard'

export default {
  middleware: 'auth',
  layout: 'dashboard',
  components: { AppCard },
  data: () => {
    return { apps: [] }
  },
  mounted() {
    // this.loadMore()
  },
  methods: {
    loadMore() {
      this.$axios
        .$get('api/apps', {
          params: {
            take: 5,
            skip: this.apps.length,
            sortBy: 'title',
            direction: 'desc'
          }
        })
        .then(({ data }) => (this.apps = [...this.apps, ...data]))
    }
  }
}
</script>

<style scoped>
.subtitle-2 * {
  vertical-align: text-bottom;
}
</style>
