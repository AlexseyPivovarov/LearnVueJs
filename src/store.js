import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objectList: [],
    lights: false,
    lamp: false
  },
  mutations: {
    setList (state, data) {
      state.objectList = data
    },
    setMark (state, id) {
      state.objectList.map(function (item) {
        if (item.id === id) { item.use = false }
        return item
      })
    },
    unMark (state) {
      state.objectList = state.objectList.map(function (item) {
        item['use'] = true
        return item
      })
    },
    showLights (state) {
      state.lights = true
    },
    showLamp (state) {
      state.lamp = true
    }
  },
  actions: {
    async getList ({ commit }) {
      try {
        let request = await Vue.http.get('http://www.kvazar-light.net/api/', {})
        let result = request.body.map(function (item) {
          item['use'] = true
          return item
        })
        commit('setList', request.body)
        return result
      } catch (e) {
        console.log(e)
      }
    }
  }
})
