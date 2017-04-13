import Vue from 'vue'
import Vuex from 'vuex'
import resourcesService from './services/resources.js'

Vue.use(Vuex)

export const state = {
  resources: [],
  errors: []
}

export const actions = {
  fetchResources({commit}) {
    resourcesService.get()
      .then(response => commit('setResources', response.body))
      .catch(error => commit('addError', error))
  }
}

export const mutations = {
  setResources(state, resources) {
    state.resources = resources
  },
  addError(state, error) {
    state.errors.push(error)
  },
  removeError(state, errorIndex) {
    state.errors.splice(errorIndex, 1)
  }
}

export const getters = {
  resources: state => state.resources,
  errors: state => state.errors,
  latestError: state => state.errors[state.errors.length - 1]
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
