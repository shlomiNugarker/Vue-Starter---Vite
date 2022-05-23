import { createStore } from 'vuex'
import itemModule from './modules/item-module.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    itemModule,
  },
})

export default store
