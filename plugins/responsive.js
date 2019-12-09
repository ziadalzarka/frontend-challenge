import Vue from 'vue'

Vue.directive('hide-on-mobile', {
  bind(el) {
    el.classList.add('d-lg-block')
    el.style.display = 'none'
  }
})
