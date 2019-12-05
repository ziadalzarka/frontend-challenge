import Vue from 'vue'
import axe from 'axe-core'

if (process.env.NODE_ENV !== 'production') {
  const VueAxe = require('vue-axe')
  Vue.use(VueAxe, {
    config: {
      rules: axe.getRules(['wcag21aa'])
    }
  })
}
