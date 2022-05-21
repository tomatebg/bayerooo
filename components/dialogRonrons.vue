<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <div>
        <img
          src="default-cat.png"
          alt="Gato"
          class="the-cat-image-dialog ma-4 mb-0"
          draggable="false"
        />
        <img
          src="no-cat.png"
          alt="Gato"
          class="the-cat-image-dialog ma-4 mb-0"
          draggable="false"
        />
        <img
          src="yes-cat.png"
          alt="Gato"
          class="the-cat-image-dialog ma-4 mb-0"
          draggable="false"
        />
      </div>
      <v-card-title>
        <span class="text-h5">Bem vindo ao Ronrons!</span>
      </v-card-title>
      <v-card-text>
        Bem vindo ao presente de aniversário de verdade da Mari! Esse jogo foi
        pensado nos mínimos detalhes para ser o mais legal e fofo em todo o
        tempo que você passar nele. Insira seus dados de usuário abaixo e
        aproveite a fofura do ronrons!
      </v-card-text>

      <v-divider></v-divider>

      <v-tabs v-model="tab">
        <v-tabs-slider color="purple"></v-tabs-slider>

        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>

        <v-tab-item>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field
                      label="Username"
                      required
                      hint="isso vai para o ranking! Seja criativo!"
                      :counter="10"
                      :rules="nameRules"
                      v-model="formSignup.user"
                    ></v-text-field>
                    <v-text-field
                      v-model="formSignup.password"
                      label="Senha de 4 dígitos"
                      :counter="4"
                      :rules="passwordRules"
                      type="password"
                      hint="você precisará dela para entrar novamente no futuro"
                    ></v-text-field>
                    <v-color-picker
                      v-model="formSignup.color"
                      dot-size="25"
                      swatches-max-height="200"
                      required
                      hide-inputs
                    ></v-color-picker>
                  </v-form>
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validateSignup"
                  >
                    Validar e Jogar
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-form
                    ref="formSignin"
                    v-model="validSignin"
                    lazy-validation
                  >
                    <v-text-field
                      label="Username"
                      required
                      hint="Bem vindo de volta"
                      :counter="10"
                      :rules="nameRules"
                      v-model="formSignin.user"
                    ></v-text-field>
                    <v-text-field
                      v-model="formSignin.password"
                      label="Senha de 4 dígitos"
                      :counter="4"
                      :rules="passwordRules"
                      type="password"
                    ></v-text-field>
                  </v-form>
                  <v-btn
                    :disabled="!validSignin"
                    color="success"
                    class="mr-4"
                    @click="validateSignin"
                  >
                    Validar e Jogar
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-tab-item>
      </v-tabs>
      <v-progress-circular
        indeterminate
        v-if="loading"
        color="amber"
      ></v-progress-circular>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { uuid } from 'vue-uuid'

export default {
  data() {
    return {
      dialog: true,
      loading: false,
      formSignup: {
        user: null,
        color: null,
        password: null,
        id: uuid.v4(),
      },
      formSignin: { user: null, password: null },

      valid: true,
      validSignin: true,

      tab: 1,
      items: ['Nunca joguei ronrons', 'Já joguei Ronrons'],
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) =>
          (v && v.length <= 10) || 'O nome não pode passar de 10 caracteres',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (!isNaN(parseFloat(v)) && v >= 0 && v <= 9999) ||
          'Password has to be between 0 and 9999',
      ],
    }
  },
  computed: {
    ...mapGetters(['pointsEarned', 'difficulty', 'pointsRecord']),
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
    ...mapActions(['switchPause', 'setUser']),
    validateSignup() {
      if (this.$refs.form.validate()) {
        this.loading = true
        this.$axios
          .post('create', this.formSignup)
          .then((data) => {
            this.$toast.success('Bem vindo ao ronrons! Vamos jogar!', {
              duration: 2000,
              theme: 'bubble',
            })
            this.loading = false
            this.dialog = false
            this.setUser(this.formSignup)

            this.switchPause()
          })
          .catch((response) => {
            this.$toast.error(`${response}`, { duration: 5000 })
            this.loading = false
          })
      }
    },
    validateSignin() {
      if (this.$refs.formSignin.validate()) {
        this.$axios
          .post('simplelogin', this.formSignin)
          .then((data) => {
            this.$toast.success('Bem vindo ao ronrons! Vamos jogar!', {
              duration: 2000,
              theme: 'bubble',
            })
            this.loading = false
            this.dialog = false
            this.setUser(this.formSignin)

            this.switchPause()
          })
          .catch((response) => {
            this.$toast.error(`${response}`, { duration: 5000 })
            this.loading = false
          })
      }
    },
    clickOnHeaderCat() {
      this.switchCurrentCat()
    },
    clickOnDifficultIcon() {
      this.switchDifficult()
    },
  },
}
</script>

<style scoped>
.the-cat-image-dialog {
  width: 100px;
  height: 100px;
}
</style>
