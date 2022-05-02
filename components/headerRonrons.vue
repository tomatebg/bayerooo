<template>
  <v-toolbar flat dense absolute color="transparent" width="100%">
    <v-toolbar-title>Ronrons</v-toolbar-title>

    <v-spacer></v-spacer>
    <span>{{ pointsEarned }} pontos</span>

    <v-btn icon @click="clickOnHeaderCat">
      <v-icon>mdi-cat</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-podium-gold</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['switchCurrentCat']),
    clickOnHeaderCat() {
      this.switchCurrentCat()
    },
  },
  computed: {
    ...mapGetters(['pointsEarned']),
  },
}
</script>

<style></style>
