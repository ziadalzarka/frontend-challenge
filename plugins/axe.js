import Vue from 'vue'
import axe from 'axe-core'
import VueAxe from 'vue-axe'

function enableAxe() {
  Vue.use(VueAxe, {
    config: {
      rules: axe.getRules(['wcag21aa'])
    }
  })
}

if (process.env.WCAG) {
  enableAxe()
}

window.enableAxe = enableAxe
