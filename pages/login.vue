<template>
  <div>
    <v-alert v-show="error" type="error">
      {{ $t('login.errors.unauthorized') }}
    </v-alert>
    <h1 class="title mb-4">{{ $t('login.title') }}</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form id="userForm" @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="user.email"
            type="email"
            autocomplete="username"
            prepend-inner-icon="mdi-email"
            :label="$t('login.email')"
            :error-messages="errors[0]"
            required
          ></v-text-field>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="password"
          rules="required|password"
        >
          <v-text-field
            v-model="user.password"
            type="password"
            autocomplete="current-password"
            prepend-inner-icon="mdi-lock"
            :label="$t('login.password')"
            :error-messages="errors[0]"
            required
          ></v-text-field>
        </ValidationProvider>
        <div class="mt-5">
          <a href="#">{{ $t('login.forgot-password') }}</a>
          <br />
          <a href="#">{{ $t('login.no-account') }}</a>
        </div>
        <div class="mt-5">
          <v-btn
            block
            color="primary"
            type="submit"
            :loading="loading"
            :disabled="loading"
            >{{ $t('login.login') }}</v-btn
          >
        </div>
      </form>
    </ValidationObserver>
    <div class="mt-5">
      <v-layout>
        <v-flex xs12 md6>
          <v-btn block color="#DB2A2F" dark class="google-button">
            <v-icon left>mdi-google</v-icon>
            {{ $t('login.google') }}
          </v-btn>
        </v-flex>
        <v-flex xs12 md6>
          <v-btn block color="black" dark class="github-button">
            <v-icon left>mdi-github-circle</v-icon>
            {{ $t('login.github') }}
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
    <LanguageSwitcher class="mt-5"></LanguageSwitcher>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LanguageSwitcher from '~/components/LanguageSwitcher'

export default {
  layout: 'form',
  name: 'LoginPage',
  components: { LanguageSwitcher },
  data: () => {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: mapState('login', ['loading', 'error']),
  methods: {
    onSubmit() {
      this.$store.dispatch('login/logIn', this.user)
    }
  },

  auth: 'guest'
}
</script>

<style scoped>
.github-button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.google-button {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
