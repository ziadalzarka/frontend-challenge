import Vue from 'vue'
import * as VeeValidate from 'vee-validate/dist/vee-validate.full'
import ar from 'vee-validate/dist/locale/ar.json'
import en from 'vee-validate/dist/locale/en.json'

// Install English and Arabic locales.
VeeValidate.localize({
  en,
  ar
})

// Password rule
VeeValidate.extend('password', {
  validate: (value) => {
    return /^.{5,}$/.test(value)
  },
  message: 'Password must not be less than 5 characters long'
})

// Set current locale from store
VeeValidate.localize('en')

// Install ValidationProvider component
Vue.component('ValidationObserver', VeeValidate.ValidationObserver)
Vue.component('ValidationProvider', VeeValidate.ValidationProvider)

Vue.use(VeeValidate, { inject: true })
