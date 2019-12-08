<template>
  <v-card>
    <v-card-text>
      <span class="title black--text">
        spa
      </span>
      <br />
      <span class="subtitle-2">
        <v-icon small>mdi-cellphone-android</v-icon>
        45 {{ $t('dashboard.app.users') }}
      </span>
      <span class="subtitle-2 ml-2">
        <AppPlatforms :platforms="{ ios: true }"></AppPlatforms>
      </span>
    </v-card-text>
    <AppChart
      :chart-data="[
        { value: 7 },
        { value: 16 },
        { value: 12 },
        { value: 2 },
        { value: 4 }
      ]"
    ></AppChart>
    <v-card-actions>
      <v-btn text icon>
        <v-icon>mdi-send</v-icon>
      </v-btn>
      <v-btn text icon>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn text icon>
        <v-icon>mdi-cellphone-android</v-icon>
      </v-btn>
      <v-btn text icon>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <v-btn text icon>
        <v-icon>mdi-settings</v-icon>
      </v-btn>
      <v-btn text icon>
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
  components: { AppChart, AppPlatforms }
}
</script>
