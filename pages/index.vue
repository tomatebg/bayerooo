<template>
  <div
    class="gradient-container d-flex justify-center"
    :class="getGradientClass"
  >
    <div class="d-flex align-center">
      <span class="no-select font-weight-light text-h3 text-md-h2 mx-4 ml-md-0">
        {{ todayIsDomingo }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {}
  },
  head() {
    return {
      title: 'Hoje é domingo?',
      meta: [
        {
          hid: 'Verificador se o dia de hoje é um domingo',
          name: 'Hoje é domingo?',
          content: 'Verificador se o dia de hoje é um domingo',
        },
      ],
    }
  },
  computed: {
    todayIsDomingo() {
      if (new Date().getDay() === 0) {
        return 'Hoje é domingo! Aproveite!'
      }
      return 'Hoje não é domingo'
    },
    getGradientClass() {
      const hour = new Date().getHours()
      if (hour > 6 && hour < 19) {
        return 'day-gradient'
      }
      return 'night-gradient'
    },
  },
  methods: {},
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

.day-gradient {
  background: linear-gradient(
    296deg,
    #03d8d7,
    #6beba5,
    #f3db33,
    #fdd21f,
    #fda460,
    #cc3191
  );
}

.night-gradient {
  background: linear-gradient(
    270deg,
    #221c64,
    #44137b,
    #612797,
    #3d269b,
    #0867a8,
    #a91e9b,
    #e3478f
  );
}

.gradient-container {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;

  background-size: 1400% 1400%;

  -webkit-animation: GradientAnimation 34s ease infinite;
  -moz-animation: GradientAnimation 34s ease infinite;
  animation: GradientAnimation 34s ease infinite;
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
