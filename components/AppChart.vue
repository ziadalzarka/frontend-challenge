<template>
  <div>
    <v-sparkline
      :fill="true"
      :gradient="chartGradient"
      smooth="25"
      :value="values"
      :auto-draw="autoDraw"
    ></v-sparkline>
    <div class="text-center caption mt-2">
      <span>{{ $t('dashboard.app.daily-active-users') }}</span>
    </div>
  </div>
</template>

<script>
import colors from 'vuetify/es5/util/colors'

export default {
  name: 'AppChart',
  props: {
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data: () => {
    return { autoDraw: false }
  },
  mounted() {
    this.autoDraw = true
  },
  computed: {
    values() {
      return this.chartData.map((point) => point.value)
    },
    chartGradient() {
      return [colors.teal.base]
    }
  }
}
</script>
