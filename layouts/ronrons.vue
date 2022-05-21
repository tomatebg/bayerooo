<template>
  <v-app>
    <header-ronrons />
    <dialog-ronrons />
    <rankingdialog-ronrons />

    <v-main style="width: 100%">
      <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" style="background: rgba(255, 255, 255, 0.1)">
      <v-row class="justify-space-between">
        <a
          href="https://www.linkedin.com/in/rog%C3%A9rio-bayer/"
          class="ma-0 pa-0"
        >
          <img
            src="rogeriobayer.svg"
            alt="Rogerio Bayer Logo"
            class="footer-image ml-3 mt-6"
        /></a>
        <div class="flex-row">
          <h1 class="my-2 purple--text lighten-2--text font-weight-light">
            {{ pointsEarned }} pontos
          </h1>
        </div>
        <v-btn
          icon
          @click="clickOnPauseIcon"
          class="purple lighten-2 mr-3 mt-3 white--text"
        >
          <v-icon>{{ pauseIcon }}</v-icon>
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import headerRonrons from '~/components/headerRonrons.vue'
import dialogRonrons from '~/components/dialogRonrons.vue'
import rankingdialogRonrons from '~/components/rankingdialogRonrons.vue'

export default {
  name: 'ronronsLayout',
  components: { headerRonrons, dialogRonrons, rankingdialogRonrons },

  data() {
    return {
      fixed: false,
    }
  },
  computed: {
    ...mapGetters(['isPaused', 'pointsEarned']),
    pauseIcon() {
      if (!this.isPaused) {
        return 'mdi-stop-circle'
      }

      return 'mdi-play-circle'
    },
  },
  methods: {
    ...mapActions(['switchPause']),

    clickOnPauseIcon() {
      this.switchPause()
    },
  },
}
</script>
<style scoped>
.footer-image {
  height: 17px;
}
</style>
