<template>
  <v-card>
    <v-card-text>
      <v-layout>
        <v-flex class="flex-grow-0">
          <v-avatar tile color="blue">
            <!-- add postfix `?v=...` because the placeholder image gets cached and all the cards are the same image -->
            <img :src="`${app.icon}?=${app.id}`" alt="app icon" />
          </v-avatar>
        </v-flex>
        <v-flex class="pl-2">
          <span class="body-1 black--text">
            {{ app.title }}
          </span>
          <br />
          <span class="subtitle-2">
            <v-icon small>mdi-cellphone-android</v-icon>
            {{ app.totalUsers }} {{ $t('dashboard.app.users') }}
            <AppPlatforms :platforms="app.platforms"></AppPlatforms>
          </span>
        </v-flex>
        <v-flex class="d-flex flex-grow-0">
          <v-btn icon aria-label="share">
            <v-icon>mdi-share</v-icon>
          </v-btn>
          <v-btn icon aria-label="open menu">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
    <AppChart :chart-data="app.chartData"></AppChart>
    <v-card-actions>
      <v-btn text icon aria-label="share">
        <v-icon>mdi-send</v-icon>
      </v-btn>
      <v-btn text icon aria-label="rewind">
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn text icon aria-label="view platforms">
        <v-icon>mdi-cellphone-android</v-icon>
      </v-btn>
      <v-btn text icon aria-label="open users">
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <v-btn text icon aria-label="open settings">
        <v-icon>mdi-settings</v-icon>
      </v-btn>
      <v-btn text icon aria-label="open statistics">
        <v-icon>mdi-chart-line</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import AppChart from '~/components/AppChart'
import AppPlatforms from '~/components/AppPlatforms'

export default {
  name: 'AppCard',
  components: { AppChart, AppPlatforms },
  props: {
    app: { type: Object, default: () => {} }
  }
}
</script>
