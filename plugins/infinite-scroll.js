import Vue from 'vue'

let disabled = false
const listeners = []

if (!process.server) {
  window.onscroll = () => {
    const difference =
      document.body.scrollHeight - (window.scrollY + window.innerHeight)
    if (difference <= 20) {
      if (!disabled) {
        disabled = true
        listeners.map((listener) => listener())
      }
    } else {
      disabled = false
    }
  }
}

Vue.prototype.onLoadMore = (callback) => {
  listeners.push(callback)
}
