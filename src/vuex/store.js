import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  direction: 'forward',
  detailsList: JSON.parse(localStorage.getItem('detailsList'))
}
export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    }
  }
})
