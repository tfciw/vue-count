import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import fastclick from 'fastclick'
import resetCss from 'reset-css'
import mainCss from '@/common/css/main.css'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    direction: 'forward',
    detailsList: JSON.parse(localStorage.getItem('detailsList'))
  }
})

fastclick.attach(document.body)

Vue.config.productionTip = false

//router transition 历史管理 开始

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

store.registerModule('vux', {
  state: {
    direction: 'forward'
  },
  mutations: {
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  }
})

router.beforeEach(function (to, from, next) {

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      store.commit('updateDirection', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

//router transition 历史管理 结束

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
