import Vue from 'vue'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import AppChart from '@/components/AppChart.vue'
import en from '@/locales/en'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(VueI18n)

const chartData = [
  { label: '2019-11-13', value: 249 },
  { label: '2019-11-14', value: 351 },
  { label: '2019-11-15', value: 973 },
  { label: '2019-11-16', value: 180 },
  { label: '2019-11-17', value: 666 },
  { label: '2019-11-18', value: 845 },
  { label: '2019-11-19', value: 455 },
  { label: '2019-11-20', value: 717 }
]

describe('AppChart', () => {
  const factory = (propsData) =>
    shallowMount(AppChart, {
      propsData,
      i18n: { locale: 'en', messages: { en } },
      localVue
    })

  it('renders', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('computes values', () => {
    const wrapper = factory({ chartData })
    const chartDataValues = chartData.map((point) => point.value)
    expect(wrapper.vm.values).toEqual(chartDataValues)
  })
})
