<template>
  <v-app>
    <v-main style="width: 100%">
      <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" style="background: rgba(255, 255, 255, 0.1)">
      <a
        href="https://www.linkedin.com/in/rog%C3%A9rio-bayer/"
        class="ma-0 pa-0"
      >
        <img
          src="rogeriobayer.svg"
          alt="Rogerio Bayer Logo"
          class="footer-image ml-3 mt-1"
      /></a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      fixed: false,
    }
  },
}
</script>
<style scoped>
.footer-image {
  height: 17px;
}
</style>
