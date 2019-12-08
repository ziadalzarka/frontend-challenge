<template>
  <v-app>
    <v-content>
      <v-layout class="fill-height">
        <v-flex xs12 md6 class="teal"> <Logo></Logo> </v-flex>
        <v-flex xs12 md6>
          <v-layout class="fill-height" justify-center align-center>
            <v-flex xs10 md6>
              <nuxt></nuxt>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: { Logo }
}
</script>
