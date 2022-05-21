export const state = () => ({
  ronronsGame: {
    currentCat: 1,
    difficulty: 3000,
    remainingLifes: 3,
    pointsEarned: 0,
    pointsRecord: 0,
    playerName: null,
    isPaused: true,
  },
})

export const getters = {
  currentCat: (state) => state.ronronsGame.currentCat,
  difficulty: (state) => state.ronronsGame.difficulty,
  pointsEarned: (state) => state.ronronsGame.pointsEarned,
  pointsRecord: (state) => state.ronronsGame.pointsRecord,
  remainingLifes: (state) => state.ronronsGame.remainingLifes,
  playerName: (state) => state.ronronsGame.playerName,
  isPaused: (state) => state.ronronsGame.isPaused,
}

export const mutations = {
  SET_CURRENT_CAT: (state, payload) => {
    state.ronronsGame.currentCat = payload
  },
  SET_DIFFICULTY: (state, payload) => {
    state.ronronsGame.difficulty = payload
  },
  SET_POINTS_EARNED: (state, payload) => {
    state.ronronsGame.pointsEarned = payload
  },
  SET_POINTS_RECORD: (state, payload) => {
    state.ronronsGame.pointsRecord = payload
  },
  SET_REMAINING_LIFES: (state, payload) => {
    state.ronronsGame.remainingLifes = payload
  },
  SET_PLAYER_NAME: (state, payload) => {
    state.ronronsGame.playerName = payload
  },
  SET_PAUSED: (state, payload) => {
    state.ronronsGame.isPaused = payload
  },
}

export const actions = {
  switchPause({ commit, getters }) {
    if (getters.isPaused) {
      commit('SET_PAUSED', false)
    } else {
      commit('SET_PAUSED', true)
    }
  },

  switchCurrentCat({ commit, getters }) {
    if (getters.currentCat === 1) {
      commit('SET_CURRENT_CAT', 2)
    } else {
      commit('SET_CURRENT_CAT', 1)
    }
  },

  switchDifficult({ commit, getters }) {
    if (getters.difficulty === 3000) {
      commit('SET_DIFFICULTY', 2000)
    } else if (getters.difficulty === 2000) {
      commit('SET_DIFFICULTY', 1000)
    } else {
      commit('SET_DIFFICULTY', 3000)
    }
  },
  earnPoints({ commit, getters }) {
    commit('SET_POINTS_EARNED', getters.pointsEarned + 100)

    if (getters.pointsEarned > getters.pointsRecord) {
      commit('SET_POINTS_RECORD', getters.pointsEarned)
    }
  },
  lostPoints({ commit, getters }) {
    if (getters.pointsEarned > 100) {
      commit('SET_POINTS_EARNED', Math.round(getters.pointsEarned / 2))
    } else {
      commit('SET_POINTS_EARNED', 0)
    }
  },
  setUser({ commit, getters }, data) {
    commit('SET_PLAYER_NAME', data.user)
  },

  //   async getProducts({ commit, dispatch },{}) {
  //     try {
  //       const data = await this.$axios.get('products')
  //       commit('SET_PRODUCTS', data.data.Items)
  //       commit('SET_PRODUCTS', data.data.Items)
  //     } catch (e) {
  //       this.$toast.success(e, {
  //         duration: 5000,
  //       })
  //     }
  //   },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
