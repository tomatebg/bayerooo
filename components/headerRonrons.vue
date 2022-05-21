<template>
  <v-toolbar flat dense absolute color="transparent" width="100%">
    <v-toolbar-title class="my-2 purple--text lighten-2--text"
      >Ronrons!</v-toolbar-title
    >

    <v-spacer></v-spacer>
    <span v-if="playerName" class="my-2 mr-2 purple--text lighten-2--text">
      Olá {{ playerName }}</span
    >
    <span class="my-2 purple--text lighten-2--text">
      Record atual: {{ pointsRecord }}</span
    >

    <v-btn icon @click="clickOnDifficultIcon">
      <v-icon class="my-2 purple--text lighten-2--text">{{
        difficultIcon
      }}</v-icon>
    </v-btn>

    <!-- <v-btn icon @click="clickOnHeaderCat">
      <v-icon>mdi-cat</v-icon>
    </v-btn> -->

    <!-- <v-btn icon>
      <v-icon class="my-2 purple--text lighten-2--text">mdi-podium-gold</v-icon>
    </v-btn> -->
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['pointsEarned', 'difficulty', 'pointsRecord', 'playerName']),
    difficultIcon() {
      if (this.difficulty === 3000) {
        return 'mdi-numeric-1-circle'
      }
      if (this.difficulty === 2000) {
        return 'mdi-numeric-2-circle'
      }
      return 'mdi-numeric-3-circle'
    },
  },
  methods: {
    ...mapActions(['switchCurrentCat', 'switchDifficult']),
    clickOnHeaderCat() {
      this.switchCurrentCat()
    },
    clickOnDifficultIcon() {
      this.switchDifficult()
    },
  },
}
</script>

<style></style>
