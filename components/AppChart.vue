<template>
  <div>
    <v-sparkline
      v-if="draw"
      :fill="true"
      :gradient="chartGradient"
      smooth="50"
      :value="values"
      auto-draw
    ></v-sparkline>
    <div class="text-center caption mt-2">
      <span class="indicator mr-1"></span>
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
    return { didMount: false }
  },
  computed: {
    values() {
      return this.chartData.map((point) => point.value)
    },
    chartGradient() {
      return [colors.teal.base]
    },
    draw() {
      return this.didMount && this.values.length > 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.didMount = true
    })
  }
}
</script>

<style scoped>
.indicator {
  display: inline-block;
  width: 12px;
  height: 12px;
  vertical-align: middle;
  background-color: #009688;
}
.indicator + span {
  vertical-align: middle;
}
</style>
