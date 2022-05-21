<template>
  <v-dialog v-model="showRankingDialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <img
          src="default-cat.png"
          alt="Gato"
          class="the-cat-image-ranking mr-3"
          draggable="false"
        />
        <span class="text-h5">Ranking Ronrons</span>
      </v-card-title>
      <v-card-text>
        {{ playerName }} seu record máximo nessa sessão foi: {{ pointsRecord }}
      </v-card-text>
      <v-btn
        color="success ml-5"
        class="mr-4 my-4"
        :disabled="!isAvailableToSend"
        @click="sendToRanking"
      >
        Enviar para o ranking
      </v-btn>

      <v-progress-circular
        indeterminate
        v-if="loading"
        color="amber"
      ></v-progress-circular>

      <v-divider></v-divider>

      <v-data-table
        v-if="rankingResults"
        :headers="headers"
        :items="rankingResults"
        :items-per-page="5"
        :sort-desc="true"
        sort-by="points"
        class="elevation-1"
      >
      </v-data-table>

      <v-btn color="success ml-5 my-4" class="mr-4" @click="clickOnPauseIcon">
        Voltar para o game
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      dialog: true,
      loading: false,
      rankingResults: null,
      lastRankingSended: 0,
      headers: [
        {
          text: 'Usuário',
          align: 'start',
          sortable: false,
          value: 'user',
        },
        { text: 'Pontos', value: 'points' },
      ],
    }
  },
  computed: {
    ...mapGetters(['isPaused', 'playerName', 'pointsRecord']),
    showRankingDialog() {
      if (this.isPaused && this.playerName) {
        return true
      } else {
        return false
      }
    },
    isAvailableToSend() {
      if (
        this.lastRankingSended < this.pointsRecord &&
        this.pointsRecord !== 0
      ) {
        return true
      }
      return false
    },
  },
  mounted() {
    this.getRanking()
  },
  methods: {
    ...mapActions(['switchPause', 'setUser']),

    clickOnPauseIcon() {
      this.switchPause()
    },

    sendToRanking() {
      this.loading = true
      this.$axios
        .post('ranking', {
          level: 1,
          user: this.playerName,
          points: this.pointsRecord,
        })
        .then((data) => {
          this.$toast.success('Pontuação adicionada ao ranking com sucesso', {
            duration: 2000,
            theme: 'bubble',
          })
          this.loading = false
          this.lastRankingSended = this.pointsRecord

          this.getRanking()
        })
        .catch((response) => {
          this.$toast.error(`${response}`, { duration: 5000 })
          this.loading = false
        })
    },
    getRanking() {
      this.loading = true
      this.$axios
        .get('ranking')
        .then((data) => {
          console.log(data.data)
          this.rankingResults = data.data
          this.loading = false
        })
        .catch((response) => {
          this.$toast.error(`${response}`, { duration: 5000 })
          this.loading = false
        })
    },
  },
}
</script>

<style scoped>
.the-cat-image-ranking {
  width: 40px;
  height: 40px;
}
</style>
