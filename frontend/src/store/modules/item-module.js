import { itemService } from '../../services/item/item-service'

export default {
  state: {
    items: null,
    filterBy: null,
    isLoading: false,
  },
  getters: {
    items(state) {
      if (state.filterBy) {
        if (state.filterBy.name) {
          const regex = new RegExp(state.filterBy.name, 'i')
          return state.items.filter((item) => regex.test(item.name))
        }
      }
      return state.items
    },
    isLoading(state) {
      return state.isLoading
    },
  },
  mutations: {
    setItems(state, { items }) {
      state.items = items
    },
    setIsLoading(state, { isLoading }) {
      state.isLoading = isLoading
    },
    removeItem(state, { id }) {
      const idx = state.items.findIndex((item) => item._id === id)
      state.items.splice(idx, 1)
    },
    saveItem(state, { item }) {
      console.log(item)
      const idx = state.items.findIndex((currItem) => currItem._id === item._id)
      if (idx !== -1) state.items.splice(idx, 1, item)
      else state.items.push(item)
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    async loadItems({ commit, state }) {
      commit({ type: 'setIsLoading', isLoading: true })
      try {
        const items = await itemService.query(state.filterBy)
        commit({ type: 'setItems', items })
      } catch (err) {
        console.error('Cannot Load items', err)
        throw err
      } finally {
        commit({ type: 'setIsLoading', isLoading: false })
      }
    },
    async removeItem({ commit }, { id }) {
      try {
        await itemService.remove(id)
        commit({ type: 'removeItem', id })
      } catch (err) {
        console.error('Cannot remove item', err)
        throw err
      }
    },
    async saveItem({ commit }, { item }) {
      try {
        var item = await itemService.save(item)
        commit({ type: 'saveItem', item })
      } catch (err) {
        console.error('Cannot Edit/Add item', err)
        throw err
      }
    },
    async filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      // dispatch({ type: 'loadItems' }) for filter on backend
    },
  },
}
