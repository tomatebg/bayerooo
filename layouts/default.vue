<template>
  <v-app>
    <v-main style="width: 100%;">
        <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
