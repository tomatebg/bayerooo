<template>
  <div class="gradient-container d-flex justify-center" :class="gradientClass">
    <div class="d-flex align-center">
      <a href="#" class="the-cat-click" @click="hasClicked = true">
        <img
          :src="catRound"
          alt="Gato"
          class="the-cat-image ml-3 mt-1"
          :class="theCatVelocity"
          draggable="false"
      /></a>
    </div>

    <v-snackbar
      :timeout="difficulty - 500"
      :value="true"
      absolute
      centered
      top
      color="deep-purple accent-4"
      rounded="pill"
      elevation="24"
      class="mt-12"
    >
      snackbar with <strong>elevation: 24</strong> property.
    </v-snackbar>

    <v-snackbar
      :value="true"
      absolute
      centered
      botton
      color="transparent"
      rounded="pill"
      elevation="24"
      class="mt-12"
    >
      snackbar with <strong>elevation: 24</strong> property.
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HomePage',
  layout: 'ronrons',
  data() {
    return {
      roundCondition: 0,
      hasClicked: true,
      intervalID: null,
    }
  },
  head() {
    return {
      title: 'Ronrons',
      meta: [
        {
          hid: 'Verificador se o dia de hoje é um domingo',
          name: 'Hoje é domingo?',
          content: 'Verificador se o dia de hoje é um domingo',
        },
      ],
    }
  },
  mounted() {
    this.repeatAfterSeconds()
  },
  computed: {
    ...mapGetters(['currentCat', 'difficulty']),
    gradientClass() {
      return 'pastel-gradient'
    },
    catRound() {
      if (this.roundCondition === 1) {
        return 'yes-cat.png'
      } else if (this.roundCondition === 2) {
        return 'no-cat.png'
      }
      return 'default-cat.png'
    },
    theCatVelocity() {
      if (this.difficulty === 3000) {
        return 'the-quiet-cat'
      } else if (this.difficulty === 2000) {
        return 'the-cat-in-hurry'
      }
      return 'the-cat-in-extreme-hurry'
    },
  },
  methods: {
    ...mapActions(['earnPoints', 'lostPoints']),
    repeatAfterSeconds() {
      console.log('time', this.difficulty * 1.5)
      // tempo da repetição
      // eslint-disable-next-line no-use-before-define
      this.intervalID = setInterval(this.makeARound, this.difficulty * 1.5) // eslint-disable-line no-use-before-define
    },
    async makeARound() {
      // const time = Math.round(Math.random() * 1000)
      console.log('timeround', this.difficulty / 3)

      // tempo do pisco
      Math.round(Math.random()) >= 0.5 // cor da rodada (1 = clicar 2= não clicar)
        ? (this.roundCondition = 1)
        : (this.roundCondition = 2)
      await this.timeout(this.difficulty / 3)
      if (this.roundCondition === 1 && this.hasClicked) {
        this.earnPoints()
      } else if (this.roundCondition === 2 && !this.hasClicked) {
        this.earnPoints()
      } else {
        this.lostPoints()
      }
      this.roundCondition = 0
      this.hasClicked = false
    },

    timeout(ms) {
      console.log(ms)
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
  },
}
</script>

<style scoped>
.no-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.orange-cat-gradient {
  background: linear-gradient(270deg, #ff9122, #ffcc89);
}

.mushu-cat-gradient {
  background: linear-gradient(270deg, #221c64, #44137b, #612797, #eaeaea);
}

.pastel-gradient {
  background: linear-gradient(
    250deg,
    #e3fcfc,
    #e4d4dc,
    #fce4e4,
    #d4ecf4,
    #e4ecd5,
    #ccdce4,
    #fce4dc,
    #dbd5e3,
    #cce4f4,
    #fbe4ec,
    #f4dcd4,
    #fce0d4,
    #e4d8e7,
    #e3dcf4,
    #fcdcdc,
    #eff7d3,
    #c4e7e0,
    #f3d4db,
    #f4d4c4,
    #fcd8cc,
    #fce4bc,
    #c4f4f3,
    #dcf4cc,
    #f4dca4,
    #c0eccc,
    #c4f0c4,
    #fceca4,
    #fcdb94
  );
}

.green-round-background {
  background: linear-gradient(270deg, #0c8f43, , #0c8f43);
}

.red-round-background {
  background: linear-gradient(270deg, #8f0c0c, #8f0c0c);
}

.gradient-container {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;

  background-size: 1400% 1400%;

  -webkit-animation: GradientAnimation 90s ease infinite;
  -moz-animation: GradientAnimation 90s ease infinite;
  animation: GradientAnimation 90s ease infinite;
}

.the-quiet-cat {
  animation-duration: 60s;
}

.the-cat-in-hurry {
  animation-duration: 30s;
}

.the-cat-in-extreme-hurry {
  animation-duration: 12s;
}

.the-cat-image {
  width: 200px;
  height: 200px;
  animation-name: TheCatRotation;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  border-radius: 30%;
}
.the-cat-click {
  border-radius: 50%;
}
.the-cat-click:active {
  filter: contrast(1.5);
}

@keyframes TheCatRotation {
  from {
    transform: rotate(-360deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes GradientAnimation {
  0% {
    background-position: 93% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 93% 0%;
  }
}
@-moz-keyframes GradientAnimation {
  0% {
    background-position: 93% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 93% 0%;
  }
}
@keyframes GradientAnimation {
  0% {
    background-position: 93% 0%;
  }
  50% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 93% 0%;
  }
}
</style>
