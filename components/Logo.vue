<template>
  <img v-if="small" src="~/assets/logo-small.svg" alt="pushbots logo" />
  <img v-else src="~/assets/logo.svg" alt="pushbots logo" />
</template>

<script>
export default {
  props: {
    small: Boolean
  }
}
</script>
