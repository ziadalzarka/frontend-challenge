<template>
  <div>
    <v-alert v-show="error" type="error">
      Email and password do not match
    </v-alert>
    <h1 class="title mb-4">Log into your account</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="user.email"
            prepend-icon="mdi-email"
            label="Email"
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
            prepend-icon="mdi-lock"
            type="password"
            label="Password"
            :error-messages="errors[0]"
            required
          ></v-text-field>
        </ValidationProvider>
        <div class="mt-5">
          <a href="#">Forgot your password?</a>
          <br />
          <a href="#">Don't have an account?</a>
        </div>
        <div class="mt-5">
          <v-btn
            block
            color="primary"
            type="submit"
            :loading="loading"
            :disabled="loading"
            >Log In</v-btn
          >
        </div>
      </form>
    </ValidationObserver>
    <div class="mt-5">
      <v-layout>
        <v-flex xs12 md6>
          <v-btn block color="#DB2A2F" dark class="google-button">
            <v-icon left>mdi-google</v-icon>
            Google
          </v-btn>
        </v-flex>
        <v-flex xs12 md6>
          <v-btn block color="black" dark class="github-button">
            <v-icon left>mdi-github-circle</v-icon>
            GitHub
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'form',

  data: () => {
    return {
      user: {
        email: '',
        password: ''
      },
      error: false,
      loading: false
    }
  },

  methods: {
    onSubmit() {
      this.loading = true
      this.$auth
        .loginWith('local', { data: this.user })
        .catch(() => (this.error = true))
        .then(() => (this.loading = false))
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
